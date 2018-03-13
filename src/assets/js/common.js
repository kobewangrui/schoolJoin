import {
    myHttp,
    getParameterByName
} from './utils.js'
const baseURL = 'http://www.dashengxiji.xyz/dasheng';
const appId = 'wx8387437705240b54';
const dev = process.env.NODE_ENV === 'development' ? true : false;

let user;
let openId = localStorage.getItem('openId');
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

function getCode() {
    location.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8387437705240b54&redirect_uri=http://www.dashengxiji.xyz/WxMsg/getCode&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`);
}

function wxLogin() {
    if (dev) return;
    if (!getParameterByName('code') && !openId) getCode();
}
function getOpenId() {
    if (dev) return Promise.resolve();
    if (openId && openId !== 'null') return Promise.resolve(openId);
    return new Promise(resolve => {
        fetch(`${baseURL}/getOpenId.do`, {
            method: 'POST',
            headers: myHeaders,
            body: 'licenseCode=E2ECBC62529F0D090EA369022622F74B&code=' + getParameterByName('code')
        }).then((r) => {
            if (r.ok) {
                return r.json()
            }
        }).then(json => {
            openId = json;
            // 为避免直接当页刷新
            if (json == 'null') getCode();
            else {
                localStorage.setItem('openId', json);
                resolve(json);
            }
        }).catch((err) => {
            console.log('A problem:' + err.message);
        })
    })
}

function getUser(customId) {
    return getOpenId().then(openId => {
        const selectId = customId || localStorage.getItem('customId') || 'test1';
        if (user && !customId) return Promise.resolve(user);
        return new Promise((resolve) => {
            fetch(`${baseURL}/getUserInfo.do`, {
                method: 'POST',
                headers: myHeaders,
                body: 'licenseCode=E2ECBC62529F0D090EA369022622F74B&openid=' + (dev ? selectId : openId)
            }).then((r) => {
                if (r.ok) {
                    return r.json()
                }
                throw new Error('Network response was not ok.');
            }).then((json) => {
                user = json.obj;
                if (user) localStorage.setItem('userId', user.userId);
                resolve(user)
            }).catch((err) => {
                console.log('A problem:' + err.message);
            })
        })
    })
}

export {
    getUser,
    appId,
    baseURL,
    wxLogin
};