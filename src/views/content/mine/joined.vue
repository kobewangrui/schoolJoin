<style lang="css" scoped>
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
                            <!-- <p>￥2222*2</p> -->
                            <p>余款:￥{{i.balance}}</p>
                            <p v-if="i.status === 2">已报名</p>
                        </div>
                    </div>
                </div>
                <p class="payMsg" v-if="i.status === 2">（短信通知）</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lists:''
            }
        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                this.$http.post('/PcApi',{name:'pc.ActOrderList',status:2,page:1},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        // this.lists = res.body.data.list;
                        this.lists = 
                                    [{
                                        "activity_name":"活动名称",
                                        "path":"活动图片",
                                        "addtime":155555555555,
                                        "status":2,
                                        "balance":3000,
                                        "ds_coin":10000,
                                        "activity_id":2
                                    },{
                                        "activity_name":"活动名称",
                                        "path":"活动图片",
                                        "addtime":155555555555,
                                        "status":2,
                                        "balance":44,
                                        "ds_coin":100,
                                    },{
                                        "activity_name":"活动名称",
                                        "path":"活动图片",
                                        "addtime":155555555555,
                                        "status":2,
                                        "balance":4444,
                                        "ds_coin":100,
                                        "activity_id":3
                                    }
                                    ]
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        watch:{
            '$route.query.type':function(){
                this.getList();
            }
        }
    }
</script>