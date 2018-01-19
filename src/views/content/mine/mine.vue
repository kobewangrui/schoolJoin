<style lang="css" scoped>
    .headImg{
        background: gray;
        box-sizing: border-box;
        padding: .3rem;
    }
    .headImg .userName{
        font-size:.28rem;
        color:#fff;
    }
    .headImg .userMsg>p{
        text-align: center;
        font-size: .36rem;
        color: #fff;
    }
    .headImg .userMsg>p img{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }
    .userIntegral{
        background: #fff;
        margin-bottom: 0.15rem;
    }
    .userIntegral .integralTitle{
        color: #93887f;
        font-size: .28rem;
    }
    .userIntegral ul{
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: .3rem 1rem;
        text-align: center;
    }
    .userIntegral ul li>p:first-child{
        font-size: .36rem;
        color: #2f2b27;
        margin-bottom: .05rem;
    } 
    .userIntegral .level{
        width: .36rem;
        height: .48rem;
        margin:0 auto;
    }
    .featuresList ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        box-sizing: border-box;
        padding: .5rem .4rem 0;
        text-align: center;
        background: #fff;
    }
    .featuresList ul li{
        width: 33.3%;
        color: #6f6660;
        font-size: .26rem;
    } 
    .featuresList ul li:first-child,
    .featuresList ul li:nth-child(2),
    .featuresList ul li:last-child{
        margin-bottom: .5rem;
    }
    .featuresList ul li>img{
        width: .42rem;
        height: .42rem;
    }    
</style>
<template>
    <div>
        <div class="headImg">
            <p class="userName">王睿龙，您好</p>
            <div class="userMsg">
                <p>
                    <img :src="require('assets/image/teenager.png')">
                    <p>大绳的希冀</p>
                </p>
            </div>
        </div>
        <div class="userIntegral">
            <ul>
                <li>
                    <p class="level">
                        <img :src="require('assets/image/stair.png')">
                        <img v-if="false" :src="require('assets/image/second-level.png')">
                        <img v-if="false" :src="require('assets/image/three-level.png')">
                    </p>
                    <p class="integralTitle">荣誉等级</p>
                </li>
                <li>
                    <p>3456</p>
                    <p class="integralTitle">积分</p>
                </li>
                <li>
                    <p>3456</p>
                    <p class="integralTitle">大绳币</p>
                </li>
            </ul>
        </div>
        <div class="featuresList">
            <ul>
                <router-link to="/order" tag="li">
                    <p>
                        <img :src="require('assets/image/obligation.png')">
                    </p>
                    <p>待付款</p>
                </router-link>
                <li>
                    <p>
                        <img :src="require('assets/image/apply.png')">
                    </p>
                    <p>已报名</p>
                </li>
                <li>
                    <p>
                        <img :src="require('assets/image/production.png')">
                    </p>
                    <p>作品</p>
                </li>
                <li>
                    <p>
                        <img :src="require('assets/image/family.png')">
                    </p>
                    <p>家庭</p>
                </li>
                <li>
                    <p>
                        <img :src="require('assets/image/friend.png')">
                    </p>
                    <p>好友</p>
                </li>
                <li>
                    <p>
                        <img :src="require('assets/image/service.png')">
                    </p>
                    <p>客服</p>
                </li>
            </ul>
        </div>
    </div>
</template>