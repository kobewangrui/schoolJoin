<style lang="css" scoped>
    .outer{
        margin-bottom: 1.6rem;
    }
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
        width:50%;
        text-align: center;
    }
    .nav ul li.router-link-active{
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
        font-size: .32rem;
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
</style>
<template>
    <div class="outer">
       <nav class="nav">
           <ul>
               <router-link tag="li" exact :to="{path:'/joined',query:{type:2}}">已报名</router-link>
               <router-link tag="li" exact :to="{path:'/joined',query:{type:4}}">建议感受</router-link>
           </ul>
       </nav>
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
                                <p v-if="i.is_pre_price==='1'">￥{{i.is_pre_price}}</p>
                                <p v-if="i.is_pre_price==='1'">余款:￥{{i.balance + i.ds_coin/10}}</p>
                                <p v-if="i.is_pre_price==='0' || i.is_volunteer==='1'">￥{{i.money + i.ds_coin/10}}</p>
                                <p v-if="i.status === '2'">已报名</p>
                                <p class="pay" v-if="i.status === '4'">感受建议</p>
                            </div>
                       </div>
                   </div>
                   <router-link tag="p" :to="{path:'/suggest',query:{title:i.activity_name,id:i.activity_id}}"  class="payMsg" v-if="i.status === '4'">（提交活动感受及建议奖励666积分）</router-link>
                   <p class="payMsg" v-if="i.status === '2'"><span class="deleteOrder" @click="deleteOrder(i.order_id)">删除</span>（短信通知）</p>
                   <p class="payMsg" v-if="i.status !== '2'"><span class="deleteOrder" @click="deleteOrder(i.order_id)">删除</span></p>
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
                getList(){
                    this.$http.post('/PcApi',{name:'pc.ActOrderList',status:2,page:this.page},{emulateJSON:true}).then((res)=>{
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
                            this.$http.post('/PcApi',{name:'pc.ActOrderList',status:2,page:this.page},{emulateJSON:true}).then((res)=>{
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