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
    .cover{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .pop{
        font-size: .32rem;
        width: 5.9rem;
        background: #fff;
        border-radius: .08rem;
        position: absolute;
        z-index: 2;
        margin: 0 auto;
        top: 50%;
        left: 50%;
        margin-left: -2.95rem;
        margin-top: -2.85rem;
        text-align: center;
        padding: .4rem 0 .35rem;
        box-sizing: border-box;
        transition: all .2s;
        transform: scale(0,0);
    }
    .pop p:first-child{
        margin-bottom:.5rem;
        font-size: .4rem;
    }
    .pop p:last-child{
        font-size: .32rem;
        height: .5rem;
    }
    .pop p:last-child span{
        display: inline-block;
        width: 40%;
        text-align: center;
    }
    .popShow{
        transform: scale(1,1);
    }
</style>
<template>
    <div class="outer">
        <ul class="list">
            <li v-for="i in lists" :key="i.id" @click="popToggle(i.id)">
                <div class="msg">
                    <img :src="i.image">
                    <span>{{i.nickname}}</span>
                </div>
                <p class="sign" v-if="i.invite ===1">
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
        <router-link tag="p" to="/qcode" class="bottomTable">添加成员</router-link>
        <div class="pop" :class="{'popShow':popHandle}">
            <p>是否删除好友？</p>
            <p>
                <span @click="deleteFriend()">是</span>
                <span @click="popToggle">否</span>
            </p>
        </div>
        <div class="cover" @click="popToggle" v-if="popHandle"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                lists:[],            
                popHandle:false,
                id:'',
            }
        },
        created(){
            this.getFriendList();
        },
        methods:{
            getFriendList(){
                this.$http.post('/PcApi',{name:'pc.Family.myFriends'},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.lists = res.body.data;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            deleteFriend(){
                this.$http.post('/PcApi',{name:'pc.Family.delFriend',ids:this.id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.id='';
                        this.popHandle = !this.popHandle;
                        this.getFriendList();
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            popToggle(id){
                this.id = id;
                window.scrollTo(0, 0);
                this.popHandle = !this.popHandle;
            },
        }
    }
</script>