import Vue from 'vue'
import Router from 'vue-router'
import index from "../views/index/index.vue"
import login from "../views/login/login.vue"
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/index',
            component: index,
        },
        {
            path: '/login',
            component: login,
        },
        
    ]
})
