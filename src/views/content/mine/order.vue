<style lang="css" scoped>
    .outer{
        margin-bottom: 1.6rem;
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
        max-width: 4.2rem;
        overflow: hidden;
        color: #574c46;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .list .listText .price{
        display: flex;
        justify-content: space-between;
    }
    .list .listText .price{
        font-size: .3rem;
        color: #2f2b27;
        position: relative;
        bottom: -.4rem;
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
    .deleteOrder{
        float: left;
    }
    .balance{
        margin-top: .26rem;
        font-size: .3rem;
    }
</style>
<template>
    <div class="outer">
        <div class="list">
                <ul>
                    <li v-for="i in lists" :key="i.id">
                        <p class="date">{{i.addtime | dateTime}}</p>
                        <div class="listContent">
                            <div>
                                <img :src="i.path">
                            </div>
                            <div class="listText">
                                <p>{{i.activity_name}}</p>
                                <div class="price">
                                    <p v-if="i.is_pre_price==='1' && i.is_volunteer!=='1'">预支付:￥{{i.pre_price}}</p>
                                    <p v-if="i.is_pre_price==='0' && i.is_volunteer==='0'">￥{{parseInt(i.money) + parseInt(i.ds_coin/10)}}</p>
                                    <p v-if="(i.is_pre_price==='0' && i.is_volunteer==='1') || (i.is_pre_price==='1' && i.is_volunteer==='1')">义工:￥{{i.money}}</p>
                                    <p class="pay" v-if="i.status === '1'" @click="payPrice(i.order_number)">前往支付</p>
                                </div>
                                <p class="balance" v-if="i.is_pre_price==='1' && i.is_volunteer!=='1'">余款:￥{{i.balance}}</p>
                        </div>
                    </div>
                    <p class="payMsg"><span class="deleteOrder" @click="deleteOrder(i.order_id)">删除</span>（大绳币减免￥{{i.ds_coin/10}}）</p>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lists:[],
                page:1
            }
        },
        created(){
            this.wxSign();
            this.getList();
            var self = this;
            $(window).scroll(function(){
                let scrollTop = $(this).scrollTop()
                let scrollHeight = $(document).height()
                let windowHeight = $(this).height()
                if(scrollTop + windowHeight === scrollHeight){
                    self.page++;
                    self.getList();
                }
            })
        },
        methods:{
            wxSign(){
                this.$http.post('/PcApi',{name:'pc.wxpay.getWxSign',url:location.href},{emulateJSON:true}).then((res)=>{
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
            payPrice(orders){
                this.$http.post('/PcApi',{name:'pc.WXpay.unifiedOrder',order_number:orders},{emulateJSON:true}).then((res)=>{
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
                                this.$router.push({path:'/joined',query:{type:2}});
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
            getList(){
                this.$http.post('/PcApi',{name:'pc.ActOrderList',status:1,page:this.page},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        if(res.body.data.list.length > 0){
                            this.lists = this.lists.concat(res.body.data.list);
                        }
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            deleteOrder(id){
                this.$http.post('/PcApi',{name:'pc.OrderDel',order_id:id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        console.log('删除成功');
                        this.$http.post('/PcApi',{name:'pc.ActOrderList',status:1,page:this.page},{emulateJSON:true}).then((res)=>{
                            if(res.body.code === 1000){
                                    this.lists = res.body.data.list;
                            }
                        }).catch((error)=>{
                            console.log(error);
                        })
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        watch:{
            '$route.query.type':function(){
                this.lists = [];
                this.page = 1;
                this.getList();
            }
        }
    }
</script>