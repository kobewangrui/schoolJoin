<style lang="css" scoped>
    .outer{
        padding: .3rem 1rem;
    }
    ul.dates{
        display: flex;
        justify-content: flex-start;
        margin: .3rem 0;
    }
    .dates li{
        margin-left: .1rem;
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
    ul{
        margin: .3rem 0;
    }
    ul li{
        margin-bottom: .1rem;
    }
    ul li img{
        width: .5rem;
        height: .5rem;
    }
    ul li span{
        color: #93887F;
        font-size: .32rem;
        margin-left: .2rem;
    }
    .val{
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
    }
    .active{
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
            <ul>
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
            <p class="val">剩余{{$store.state.user.left_volume}}M，共{{$store.state.user.volume}}M</p>
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
            <button :class="{'active':$vuerify.check()}" @click="orderPay">支付</button>
        </div>
    </div>

</template>
<script>
    export default{
        data(){
            return{
                goods:"",
                list:[{ 
               "id" : "1", // 商品id
               "price" : "20.00", // 价格
               "vol" : "200",  //容量 M
               "title" : "20元100M" //商品名称
                },{ 
                    "id" : "2", 
                    "price" : "35.00", 
                    "vol" : "204800", 
                    "title" : "35元200M" 
                } ],
                money:0
            }
        },
        created(){
            this.pay();
        },
        vuerify:{
            goods:['required'],
        },
        methods:{
            getList(){
                this.$http.post('/PcApi',{name:'pc.Login.volList'},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
						let list = res.body.data;
					}
				}).catch((error)=>{
					console.log(error);
				})
            },
            orderPay(){
                if(this.$vuerify.check()){
                    console.log(this.goods);
                    this.$http.post('/PcApi',{name:'pc.Login.volOrder',vid:this.goods},{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            this.payPrice(res.body.data.id);
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            },
            wxpay({timestamp,nonceStr,package_wx,signType,paySign}){
                return new Promise((resolve,reject)=>{
                    try{
                    wx.chooseWXPay({
                       timestamp,nonceStr,package:package_wx,signType,paySign,
                       success:()=>resolve(),
                       fail:()=>reject()
                    })
                    }catch(err){
                        console.log(err.stack);
                    }
                })
            },
            pay(){
                this.$http.post('/PcApi',{name:'pc.wxpay.getWxSign',url:location.href},{emulateJSON:true}).then((res)=>{
                    wx.config({
                        debug:true,
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
            payPrice(order){
                this.$http.post('/PcApi',{name:'pc.WXpay.unifiedOrder',order_number:order},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        let datas = res.body.data;
                        this.wxpay({timestamp:datas.timestamp_pay,nonceStr:datas.nonceStr_pay,package:datas.package,paySign:datas.sing_pay});
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