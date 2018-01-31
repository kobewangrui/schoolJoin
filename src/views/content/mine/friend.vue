<style lang="css" scoped>
    .outer{
        margin-bottom: 1.5rem;
    }
    .list{
        box-sizing: border-box;
        padding: 0 .3rem;
        background: #fff;
    }
    .list li{
        border-bottom: .01rem solid #E4DAD1;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: .2rem 0;
    }
    .list li .msg img,
    .list li .msg span{
        vertical-align: middle;
    }    
    .list li .msg img{
        width: .85rem;
        height: .85rem;
        border-radius: 50%;
        margin-right: .25rem;
    }
    .list li .sign img{
        width: .36rem;
        height: .31rem;
        margin-top: .25rem;
    }
    .intro{
        background: #fff;        
        box-sizing: border-box;
        padding: .2rem .3rem;
        margin-bottom: 4.5rem;
        text-align: right;
        color: #93887F;
        font-size: .26rem;
    }
    .intro span,
    .intro img{
        vertical-align: middle;
    }
    .getIntro{
        font-size: .28rem;
        color: #BAAB6A;
        text-align: center;
        margin-bottom: .1rem;
    }
    .bottomTable{
        width: 100%;
        position: fixed;
        bottom: 0;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        color: #fff;
        background: #F9C84E;
    }
</style>
<template>
    <div class="outer">
        <ul class="list">
            <li v-for="i in 10" :key="i.id">
                <div class="msg">
                    <img :src="require('assets/image/pic.jpg')">
                    <span>王睿龙</span>
                </div>
                <p class="sign">
                    <img :src="require('assets/image/invite.png')">
                </p>
            </li>
        </ul>
        <p class="intro">
            <img :src="require('assets/image/invite.png')">
            <span>表示该好友由您邀请至平台</span>
        </p>
        <p class="getIntro">由您邀请进平台的好友，</p>
        <p class="getIntro">每当他们参加一次活动，您可获得50积分</p>
        <p class="bottomTable">添加成员</p>
    </div>
</template>