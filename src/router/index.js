import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import Login from "../containers/Login"
import Chat from "../containers/Chat"

// client routes
const routes = [
    {
        path: "/",     // home route
        component: Login
    },
    {
        path: "/chat", // chat route that sends user to chat room
        component: Chat,
        meta: {requiresAuth: true}, // this route needs authentication
    }
]

// vue router
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// do the authentication before each route changing
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isAuthenticated) {
        next()
        return
      }
      next('/') // return to home page
    } else {
      next()
    }
})

export default router