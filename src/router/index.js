import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import { auth } from "../firebase";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Account.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
      path: "/billing",
      name: "billing",
      component: () =>
        import(/* webpackChunkName: "billing" */ "../views/Billing.vue"),
      meta: {
        requiresAuth: true,
      }
  },
  {
    path: "/link-opportunities",
    name: "link opportunities",
    component: () =>
      import(/* webpackChunkName: "link-opportunities" */ "../views/LinkOpportunities.vue"),
    meta: {
      requiresAuth: true,
    }
},
  {
    path: "/lists",
    name: "lists",
    component: () =>
      import(/* webpackChunkName: "lists" */ "../views/Lists.vue"),
    meta: {
      requiresAuth: true,
    }
    
},
{
  path: "/add-target-page",
  name: "target pages",
  component: () =>
    import(/* webpackChunkName: "lists" */ "../views/admin/AddTargetPage.vue"),
  meta: {
    requiresAuth: true,
  }
  
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;
