<style lang="css" scoped>
    .detail{
        padding: .3rem;
        box-sizing: border-box;
    }    
    .title{
        display: flex;
        justify-content: space-between;
        margin-bottom: .4rem;
    }
    .title span:first-child{
        font-size: .32rem;
    }
    .title span:last-child{
        font-size: .28rem;
        color: #9e9b9b;
    }

    .list{
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
    }
    .list li{
        width: 30%;
        text-align: center;
        margin-right: .05rem;
    }
    .list img{
        width: 2.32rem;
        height: 2.32rem;
    }
    .bottomTable{
        display: flex;
        height: 1rem;
        line-height: 1rem;
        justify-content: space-between;
        margin-bottom: .4rem;
        border: .01rem solid #e4dad1;
        text-align: center;
    }
</style>
<template>
    <div class="detail">
        <p class="title">
            <span>16年6月夏令营</span>
            <span>16年8月创建</span>
        </p>
        <ul class="list">
            <li v-for="i in [1,2,3,4,5,6,7]">
                <img :src="require('assets/image/pic.jpg')">
            </li>
        </ul>
       <ul class="bottomTable">
           <li>
               <img src="">
               <span>(1234)</span>
           </li>
           <li>编辑</li>
           <li>上传</li>
       </ul>
    </div>
</template>