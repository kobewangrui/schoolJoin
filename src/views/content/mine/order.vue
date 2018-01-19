<style lang="css" scoped>
    .nav ul{
        display: flex;
        justify-content: space-between;
        color:#2f2b27;
        font-size: .34rem;
        border-bottom: .01rem solid #e4dad1;
    }
    .nav ul li{
        box-sizing: border-box;
        padding: .1rem .3rem .2rem;
        border-bottom: .03rem solid #f7f7f7;
    }
    .nav ul li.active{
        border-bottom: .03rem solid #ffae4e;
        color: #ffae4e;
    }
    .list{
        box-sizing: border-box;
        padding: .1rem .3rem;
    }
    .list ul li{
        box-sizing: border-box;
        padding: .2rem 0;
        border-bottom: .01rem solid #E4dad1;
    }
    .list li .date{
        color: #93887f;
        font-size: .28rem;
        margin-bottom: .1rem;
    }
    .list li .listContent{
        display: flex;
        justify-content: flex-start;
    }
    .list li img{
        width: 2.5rem;
        height: 1.6rem;
    }
    .list li .listText{
        margin-left: .2rem;
        width: 100%;
        height: 1.6rem;
        position: relative;
    }
    .list .listText>p:first-child{
        font-size: .34rem;
        color: #574c46;
    }
    .list .listText .price{
        display: flex;
        justify-content: space-between;
    }
    .list .listText .price{
        font-size: .32rem;
        color: #2f2b27;
        position: relative;
        bottom: -.6rem;
    }
    .pay{
        color: #ffae4e;
        font-size: .32rem;
        border: .02rem solid #ffae4e;
        border-radius: .5rem;
        box-sizing: border-box;
        padding: .03rem .15rem;
        line-height: .45rem;
    }
    .cancel{
        font-size: .32rem;
        color: #929292;
    }
    .payMsg{
        font-size: .3rem;
        color: #caa711;
        text-align: right;
    }
</style>
<template>
    <div>
       <nav class="nav">
           <ul>
               <li class="active">全部</li>
               <li>待付款</li>
               <li>已报名</li>
               <li>建议感受</li>
           </ul>
       </nav>
       <div class="list">
           <ul>
               <li v-for="i in [1,2,3,4]">
                   <p class="date">2018-05-44</p>
                   <div class="listContent">
                       <div>
                           <img :src="require('assets/image/pic.jpg')">
                       </div>
                       <div class="listText">
                            <p>titletitletitletitle</p>
                            <div class="price">
                                <p>￥2222*2</p>
                                <p>余款:￥3333</p>
                                <!-- <p>已报名</p> -->
                                <!-- <p class="pay">活动感受及建议</p> -->
                                <!-- <p class="cancel">已取消</p> -->
                                <!-- <p class="pay">前往支付</p> -->
                            </div>
                       </div>
                   </div>
                   <!-- <p class="payMsg">（提交活动感受及建议奖励666积分）</p> -->
                   <p class="payMsg">（大绳币减免￥23）</p>
               </li>
           </ul>
       </div>
    </div>
</template>