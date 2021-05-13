import Vue from 'vue'
import Vuex from 'vuex'
import 'firebase/firestore'
import * as fb from '../firebase'
import router from '../router/index'
import { dbPageAdd, usersCollection} from '../firebase.js'
import pathify from 'vuex-pathify'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    pathify.plugin,
  ],

  state: {
    currentUser: null,
    userProfile: {},
    pages:[],
    
  },
  mutations: {
    setPages: state => {
      let pages = []

      dbPageAdd.onSnapshot((snapshotItems) => {
       
        snapshotItems.forEach((doc) => {
          var pageData = doc.data();
          pages.push({
            ...pageData,
            id: doc.id
          })
        })
        console.log(pages)
        state.pages = pages;
        pages = []
      }
    )},

    setUserProfile(state, val) {
      state.userProfile = val
    },
    userStatus(state, user) {
      if (user) {
        state.currentUser = user
        console.log("UsernameStore", state.currentUser)
      } else {
        state.currentUser = null
      }
    },

    setUsers: state => {
      let users = []

      usersCollection.onSnapshot((snapshotItems) => {
        users = []
        snapshotItems.forEach((doc) => {
          var usersData = doc.data();
          users.push({
            ...usersData,
            id: doc.id
          })
        })
        console.log(users)
        state.users = users;
    
      }
    )},
  },
  actions: {
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid 
      userRef
      // update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        name: user.name,
        company: user.company,
      })
    
      dispatch('fetchUserProfile', { uid: userId })
    },  


    setPages: context => {
      context.commit('setPages')
    },
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

      // create user object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        company: form.company
      })

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/')
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut()

      // clear user data from state
      commit('setUserProfile', {})

      // redirect to login view
      router.push('/login')
    },
  },
  modules: {
  },


  getters:{
    currentUser: state => state.currentUser,
    getPages: state => state.pages,
  },

  
})
