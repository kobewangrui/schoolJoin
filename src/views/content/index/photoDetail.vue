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
        max-width: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        justify-content: flex-start;
        flex-flow: row wrap;
    }
    .list li{
        width:2.2rem;
        text-align: center;
        margin-left: .1rem;
        position: relative;
    }
    .list img{
        width: 2.2rem;
        height: 2.3rem;
    }
    .list label.choose{
        display: inline-block;
        width: .3rem;
        height: .3rem;
        color: #fff;
        background: #fff;
        border-radius: 50%;
        text-align: center;
        line-height: .3rem;
        font-size: .3rem;
        position: absolute;
        top: .1rem;
        left: .1rem;
    }
    .list input[type='checkbox']{
        display: none;
    }
    .list input[type='checkbox']:checked+label.choose{
        background: #f9c84e;
    }
    .bottomTable,
    .bottomlike{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        border: .01rem solid #e4dad1;
        text-align: center;
        position: fixed;
        bottom: 0;
        background: #fff;
    }
    .bottomlike li{
        background: #fff;
        float: left;
        width: 50%;
    }
    .bottomlike li.like{
        background: #f9c84e;
        color: #fff;
    }
    .cltList{
        width: 5rem;
        height: 4rem;
        max-height: 4rem;
        padding: .4rem .5rem;
        background: #fff;
        position: fixed;
        left: 0.75rem;
        top: 25%;
        z-index: 6;
        overflow: scroll;
    }
    .cltList .titleList{
        text-align: center;
    }
    .cltList label{
        display: inline-block;
        width: 80%;
    }
    .cover{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.2);
        position: fixed;
        top: 0;
        z-index: 5;
    }
    .confirm{
        margin-top: 1.5rem;
        text-align: center;
    }
    .confirm button{
        width: 2.3rem;
        height: .6rem;
        border-radius: .08rem;
        color: #fff;
        background: #F9C84E;
        font-size: .34rem;
    }
</style>
<template>
    <div class="outer">
        <p class="title">
            <span>{{$route.query.name}}</span>
            <span>{{$route.query.time | dateTime}}</span>
        </p>
        <div class="detail">
            <ul class="list">
                <li v-for="(i,index) in lists">
                    <label :for="'img'+index">
                        <yd-lightbox>
                            <yd-lightbox-img :src="i.path"></yd-lightbox-img>
                        </yd-lightbox>
                    </label>
                    <input :id="'img'+index" type="checkbox" v-model="photoList" :value="i.id">
                    <label v-if="!edit" :for="'img'+index" class="choose">✓</label>
                </li>
            </ul>
        </div>
        <ul class="bottomTable" v-if="edit">
            <li @click="edits">编辑收藏</li>
        </ul>
        <ul class="bottomlike" v-else>
            <li @click="cancel">取消</li>
            <li class="like" @click="likepic">收藏到个人相册</li>
        </ul>
        <div class="cltList" v-if="cltListShow">
            <p class="titleList">相册列表</p>
            <ul>
                <li v-for="(i,index) in cltList" :key="i.id">
                    <input :id="'p'+index" type="radio" v-model="cltId" :checked="index==='0'" :value="i.id">
                    <label :for="'p'+index">{{i.name}}</label>
                </li>
            </ul>
            <p class="confirm">
                <button @click="likeSuccess">确认收藏</button>
            </p>
        </div>
        <div class="cover" v-if="cltListShow" @click="toggle"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                lists:'',
                edit:true,
                photoList:[],
                cltList:[],
                cltId:'',
                cltListShow:false
            }
        },
        created(){
            this.getList();
            this.getCltList();
        },
        methods:{
            getList(){
                this.$http.post('/PcApi',{name:'pc.Album.actPicDetail',act_id:this.$route.query.id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.lists = res.body.data;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            cancel(){
                this.edit = true;
                this.photoList = [];
            },
            edits(){
                this.edit = false;
                this.photoList = [];
            },
            likepic(){
                if(this.photoList.length>0){
                    this.cltListShow = true;
                }else{
                    alert('至少选择一张需要收藏的图片');
                }

            },
            getCltList(){
                this.$http.post('/PcApi',{name:'pc.Album.cltList'},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.cltList = res.body.data;
                        this.cltId = res.body.data[0].id;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            toggle(){
                this.cltListShow = false;
                this.photoList = [];
                this.cltId = '';
            },
            likeSuccess(){
                let list = this.photoList.join(',');
                this.$http.post('/PcApi',{name:'pc.Album.collect',pic_id:list,album_id:this.cltId},{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            this.$router.push('/photo');
                            this.cltListShow = false;
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
            }
        }
    }
</script>