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
</style>
<template>
    <div class="photo">
        <ul class="list">
            <router-link v-for="i in lists" :key="i.id" tag="li" :to="{path:'/productionDetail',query:{id:i.id,time:i.updated_at}}">
                <p>
                    <img :src="i.cover">
                </p>
                <p class="title">{{i.name}}</p>
                <p class="date">{{i.updated_at | dateTime}}</p>
            </router-link>
        </ul>
        <p class="size">相册容量：剩余{{left_volume}}M，共{{total_volume}}M</p>
        <p class="more">了解更多</p>
        <p class="tableBottom" @click="createPhoto">新建相册</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lists:'',
                total_volume:'',
                left_volume:''
            }
        },
        created(){
            this.getList();
        },
        methods:{
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
                this.$http.post('/PcApi',{name:'pc.Album.createAlbum',album_name:'新建相册',type:1},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.getList();
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>