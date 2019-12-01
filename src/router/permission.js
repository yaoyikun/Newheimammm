import router from "./index.js"
// 路由拦截
router.beforeEach((to, from, next) => {
    window.console.log(to, from)
    next()
})
router.afterEach(() => {
    window.console.log("afterEach")
    window.console.log( process.env.VUE_APP_BASEURL)
})