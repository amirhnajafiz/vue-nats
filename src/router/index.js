import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import Login from "../containers/Login"
import Chat from "../containers/Chat"

// TODO: comments and documentatons please
const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/chat",
        component: Chat,
        meta: {requiresAuth: true},
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isAuthenticated) {
        next()
        return
      }
      next()
    } else {
      next()
    }
})

export default router