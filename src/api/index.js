// 公用模块
import { fetch } from "../utils/request.js"


// 获取笑话集
export function getJokes(params) {
    return fetch('joke/list', "get", params)
}
//来个post
export function postTest(params) {
    return fetch('https://autumnfish.cn/api/user/reg', "post", params)
}

