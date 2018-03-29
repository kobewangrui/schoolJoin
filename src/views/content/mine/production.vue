<style lang="css" scoped>
    .photo{
        margin-bottom: 1.5rem;
    }
    .list{
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        flex-flow: row wrap;
        padding: .3rem;
    }
    .list li{
        width: 50%;
        margin-bottom: .3rem;
    }
    .list li img{
        width: 3.28rem;
        height: 3.28rem;
        border-radius: .08rem;
    }
    .list li .title{
        font-size: .32rem;
        color: #313d2a;
    }
    .list li .date{
        color: #9e9b9b;
        font-size: .28rem;
    } 
    .photo .size{
        color: #312D2A;
        font-size: .28rem;
        text-align: center;
    }
    .photo .more{
        color: #FFAE4E;
        font-size: .32rem;
        text-align: center;
    }
    .photo .tableBottom{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        color: #fff;
        font-size: .34rem;
        background: #F9C84E;
        position: fixed;
        bottom: 0;
    }
    .cltList{
        width: 5rem;
        max-height: 4rem;
        padding: .4rem .5rem;
        background: #fff;
        position: fixed;
        left: 0.75rem;
        top: 25%;
        z-index: 6;
        text-align:center;
    }
    .cltList .titleList{
        text-align: center;
        margin-bottom: .4rem;
    }
    .cltList ul li{
        margin-bottom: .2rem;
    }
    .cltList label.choose{
        display: inline-block;
        width: .3rem;
        height: .3rem;
        color: #fff;
        background: #fff;
        border-radius: 50%;
        text-align: center;
        line-height: .3rem;
        font-size: .3rem;
        border: .02rem solid #d8d8d8;
    }
    .cltList input[type='radio']{
        display: none;
    }
    .cltList input[type='radio']:checked+label.choose{
        background: #f9c84e;
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
        text-align:center;
        margin-top:.5rem;
    }
    .confirm button{
        width: 3.9rem;
        height: .86rem;
        color: #fff;
        border-radius: .42rem;
        background: #f9c84e;
        font-size: .34rem;
    }
</style>
<template>
    <div class="photo">
        <ul class="list">
            <router-link v-for="i in lists" :key="i.id" tag="li" :to="{path:'/productionDetail',query:{id:i.id,time:i.created_at}}">
                <p>
                    <img :src="i.cover">
                </p>
                <p class="title">{{i.name}}</p>
                <p class="date">{{i.created_at | dateTime}}</p>
            </router-link>
        </ul>
        <p class="size">相册容量：剩余{{left_volume}}M，共{{total_volume}}M</p>
        <router-link to="/moreIntro" tag="p" class="more">了解更多</router-link>
        <p class="tableBottom" @click="createPhoto">新建相册</p>
        <div class="cltList" v-if="cltListShow">
            <p class="titleList">选择新建相册类型</p>
            <ul>
                <li>
                    <label for="upload">用于上传</label>
                    <input name="photo" id="upload" type="radio" v-model="types" value="1">
                    <label class="choose" for="upload"></label>
                </li>
                <li>
                    <label for="clt">用于收藏</label>
                    <input name="photo" id="clt" type="radio" v-model="types" value="2">
                    <label class="choose" for="clt"></label>
                </li>
            </ul>
            <p class="confirm">
                <button @click="likeSuccess">确认</button>
            </p>
        </div>
        <div class="cover" v-if="cltListShow" @click="cltListShow=false"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lists:'',
                total_volume:'',
                left_volume:'',
                cltListShow:false,
                types:1,
            }
        },
        created(){
            this.getList();
        },
        methods:{        
            likeSuccess(){
                this.cltListShow = false;
                this.$http.post('/PcApi',{name:'pc.Album.createAlbum',album_name:'新建相册',type:this.types},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.getList();
                    }
                }).catch((error)=>{
                    console.log(error);
                })     
            },
            getList(){
                this.$http.post('/PcApi',{name:'pc.Album.myPictures'},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.lists = res.body.data.albums;
                        this.left_volume = res.body.data.left_volume;
                        this.total_volume = res.body.data.total_volume;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            createPhoto(){
                this.cltListShow = true;
            }
        }
    }
</script>