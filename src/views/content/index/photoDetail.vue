<style lang="css" scoped>
    .outer{
        margin-bottom: 1.5rem;
    }
    .detail{
        padding: .3rem;
        box-sizing: border-box;
    }    
    .title{
        display: flex;
        justify-content: space-between;
        background: #fff;
        height: 1.08rem;
        line-height: 1.08rem;
        padding: 0 .3rem;
    }
    .title span:first-child{
        font-size: .32rem;
    }
    .title span:last-child{
        font-size: .28rem;
        color: #9e9b9b;
    }
    .deleteAllPhoto{
        color: #f9c84e;
        font-size: .32rem;
        text-align: center;
        margin-bottom: .2rem;
    }
    .list{
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
    }
    .list li{
        display: flex;
        justify-content: space-between;
        width: 30%;
        text-align: center;
        margin: 0 .05rem .05rem 0;
    }
    .list img{
        width: 2.32rem;
        height: 2.32rem;
    }
    .bottomTable,
    .bottomDelete{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        border: .01rem solid #e4dad1;
        text-align: center;
        position: fixed;
        bottom: 0;
    }
    .bottomTable li{
        float: left;
        width: 33.3%;
    }
    .bottomTable li.active{
        color: #F9C84E;
    }
    .bottomTable .upload{
        background: #f9c84e;
        color: #fff;
    }
    .bottomDelete li{

        float: left;
        width: 50%;
    }
    .bottomDelete li.delete{
        background: #f9c84e;
        color: #fff;
    }
    .bottomTable:after{
        content:'';
        clear:both;
        display:block;
        width:0;
        height:0;
    }
</style>
<template>
    <div class="outer">
        <p class="title">
            <span>16年6月夏令营</span>
            <span>16年8月创建</span>
        </p>
        <div class="detail">
            <p class="deleteAllPhoto">删除该相册</p>
            <ul class="list">
                <li v-for="i in [1,2,3,4,5,6,7]">
                    <img :src="require('assets/image/pic.jpg')">
                </li>
            </ul>
        </div>
        <ul class="bottomTable" v-if="false">
            <li :class="{'active':true}">
                <img src="">
                <span>(1234)</span>
            </li>
            <li>编辑</li>
            <li class="upload">上传</li>
        </ul>
        <ul class="bottomDelete" v-else>
                <li>取消</li>
                <li class="delete">删除</li>
            </ul>
    </div>
</template>