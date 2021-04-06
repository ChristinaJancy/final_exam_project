import Vue from 'vue'
import Vuex from 'vuex'
import 'firebase/firestore'
import * as fb from '../firebase'
import router from '../router/index'
import {usersCollection} from '../firebase.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
  },
  mutations: {
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
        title: form.title
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
  }
})
