<style lang="css" scoped>
    .outer{
        padding: .3rem 1rem;
        margin-bottom: 1.6rem;
    }
    ul.dates{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: .3rem 0;
    }
    .dates li{
        margin-left: .1rem;
        margin-bottom: .3rem;
    }
    .dates li label{
        display: inline-block;
        width: 2.12rem;
        height: 1.32rem;
        text-align: center;
        line-height: 1.32rem;
        border: .02rem solid #EEEEEE;
        font-size: .26rem;
        border-radius: .08rem;
    }
    .dates li  input[type="radio"]{
        display: none;
    }
    .dates li  input[type="radio"]:checked+label{
        color: #FFAE4E;
        border: .02rem solid #FFAE4E;
    }
    .title{
        font-size: .42rem;
        margin-bottom: .3rem;
    }
    .title .intro{
        font-size: .32rem;
        font-weight: bold;
        margin: .2rem 0;
    }
    .val{
        margin: .5rem 0;
    }
    .val li{
        margin-bottom: .1rem;
    }
    ul.val li span,
    ul.val li img{
        vertical-align: middle;
    }
    .val li img{
        width: .5rem;
        height: .5rem;
    }
    .val li span{
        color: #93887F;
        font-size: .32rem;
        margin-left: .2rem;
    }
    .vals{
        font-size: .32rem;
        margin: .2rem 0;
    }
    .up{
        font-size: .34rem;
        font-weight: bold;
    }
    .pay{
        height: 1rem;
        background: #FCFCFC;
        text-align: right;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .pay button{
        width: 2.34rem;
        height: 1rem;
        font-size: .34rem;
        color: #fff;
        margin-left: .2rem;
        background: #d8d8d8;
    }
    .pay .active{
        background: #F9C84E;
    }
    .pay .money{
        color: #2F2B27;
        font-size:  .42rem;
    }
    .pay .txt{
        color: #93887F;
        font-size: .3rem;
        margin-right: .3rem;
    }
</style>
<template>
    <div>
        <div class="outer">
            <p class="title">相册容量</p>
            <p class="intro">根据积分等级，拥有不同的相册容量</p>
            <ul class="val">
                <li>
                    <img :src="require('assets/image/stair.png')">
                    <span>(0-1000)：20M</span>
                </li>
                <li>
                    <img :src="require('assets/image/second-level.png')">
                    <span>(10001-2000)：25M</span>
                </li>
                <li>
                    <img :src="require('assets/image/three-level.png')">
                    <span>(2001-4000)：30M</span>
                </li>
                <li>
                    <img :src="require('assets/image/level-Four.png')">
                    <span>(4001-8000)：35M</span>
                </li>
                <li>
                    <img :src="require('assets/image/five-levels.png')">
                    <span>(8000-16000)：40M</span>
                </li>
            </ul>
            <p class="intro">当前容量</p>
            <p class="vals">剩余{{$store.state.user.volume}}M，共{{$store.state.user.total_volume}}M</p>
            <p class="up">提高容量（有效期为一年）</p>
            <ul class="dates">
                <li v-for="(i,index) in list" >
                    <input :id="'d'+index" v-model="goods" :value="i.id" type="radio" name="val">
                    <label :for="'d'+index">{{i.title}}</label>
                </li>
            </ul>
        </div>
        <div class="pay">
            <span class="txt">本次支付</span>
            <span class=“money”>￥{{money}}元</span>
            <button :class="{'active':$vuerify.check() && money>0}" @click="orderPay">支付</button>
        </div>
    </div>

</template>
<script>
    export default{
        data(){
            return{
                goods:"",
                list:[],
                money:0
            }
        },
        created(){
            this.wxconfigStart();
            this.getList();
        },
        vuerify:{
            goods:['required'],
        },
        methods:{
            getList(){
                this.$http.post('/PcApi',{name:'pc.Login.volList'},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.list = res.body.data;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            wxconfigStart(){
                this.$http.post('/PcApi',{name:'pc.wxpay.getWxSign',url:location.href},{emulateJSON:true}).then((res)=>{
                    console.log(location.href);
                    wx.config({
                        debug:false,
                        appId:'wx8387437705240b54',
                        timestamp:res.body.data.timestamp,
                        nonceStr: res.body.data.nonceStr,
                        signature: res.body.data.signature,
                        jsApiList:['chooseWXPay']
                    })
                }).catch((error)=>{
                    console.log(error);
                })
            },
            orderPay(){
                if(this.$vuerify.check() && this.money>0){
                    this.$http.post('/PcApi',{name:'pc.Login.volOrder',vid:this.goods},{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            this.payPrice(res.body.data.id);
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            },
            payPrice(order){
                this.$http.post('/PcApi',{name:'pc.Login.payVolume',order_id:order},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        let datas = res.body.data.pay_need;
                        wx.chooseWXPay({
                            timestamp:datas.timestamp_pay,
                            nonceStr:datas.nonceStr_pay,
                            package:"prepay_id="+datas.package,
                            signType:datas.signType,
                            paySign:datas.sign_pay,
                            success:(res)=>{
                                console.log(JSON.stringify(res));
                                this.$router.push('/moreIntro');
                            },
                            cancel:(res)=>{
                                console.log(JSON.stringify(res));
                            },
                            fail:(err)=>{
                                console.log(JSON.stringify(err));
                            }
                        })
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
        },
        watch:{
            'goods':function(val){
                for(let i = 0; i<this.list.length; i++){
                    if(val === this.list[i].id){
                        this.money = this.list[i].price;
                        return;
                    }
                }
            }
        }
    }
</script>