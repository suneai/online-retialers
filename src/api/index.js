// 配置API接口地址
import root from "./root.js";

import axios from "axios";


//详细说明参见 https://www.kancloud.cn/yunye/axios/234845
//封装axios
function pottingAxios(method, url, params, success, failure) {
    //参数是否过滤
    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        baseURL: root,
        withCredentials: false,
        timeout: 20000,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function (res) {
        if (res.data.success === true || res.data.code == 200 || res.status == 200) {
            if (success) {
                success(res.data);
            } else {
                if (failure) {
                    failure(res.data);
                }
            }
        } else {
            if (failure) {
                failure(res.data);
            } else {
                console.warn('error' + JSON.stringify(res.data));
            }
        }
    }).catch(function (err) {
        let res = err.response;
        if (err) {
            console.warn(err);
            return;
        }
    })
}


export default {
    get: function (url, params, success, failure) {
        //对params等形参做相关处理,比如加密,验签等等;下面的也是如此都可以做相关处理

        return pottingAxios('GET', url, params, success, failure);

    },
    post: function (url, params, success, failure) {

        url = url;

        return pottingAxios('POST', url, params, success, failure);
    },
    put: function (url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function (url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    },
    jsonp: function (url, params, option) {
        //.......
        return new Promise((resolve, reject) => {
            jsonp(url, option, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(data);
                }
            })
        })
    }
}

