import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "../containers/Login"
import Chat from "../containers/Chat"

const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/chat",
        component: Chat
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router