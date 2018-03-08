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
</style>
<template>
    <div class="outer">
        <p class="title">
            <span>{{msg.name}}</span>
            <span>{{$route.query.time | dateTime}}</span>
        </p>
        <div class="detail">
            <ul class="list">
                <li v-for="(i,index) in lists">
                    <label :for="'img'+index">
                            <img :src="i.path">
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
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lists:'',
                msg:'',
                edit:true,
                photoList:[],
            }
        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                this.$http.post('/PcApi',{name:'pc.Album.actPicDetail',act_id:this.$route.query.id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        // this.lists = res.body.data.pictures;
                        // this.msg = res.body.data.album;
                        this.lists =  { 
                                "0" : { 
                                        "id" : "9", // 图片id
                                        "tid" : "7", // 所属相册id
                                        "path" : "http://39.104.69.153/dsdxj/uploads/2018_01_10/img1515575385TPR2rAMm.jpg", // 原图
                                        "thumbnail" : "http://39.104.69.153/dsdxj/uploads/2018_01_10/img1515575385TPR2rAMm_thum.jpg" 
                                }, // 缩略图
                                "1" : { 
                                        "id" : "10", 
                                        "tid" : "7", 
                                        "path" : "http://39.104.69.153/dsdxj/uploads/2018_01_10/img1515575385LIvVQcaL.jpg", 
                                        "thumbnail" : "http://39.104.69.153/dsdxj/uploads/2018_01_10/img1515575385LIvVQcaL_thum.jpg" 
                                }, 
                                "2" : { 
                                        "id" : "110", 
                                        "tid" : "7", 
                                        "path" : "http://39.104.69.153/dsdxj/uploads/2018_01_10/img1515575385LIvVQcaL.jpg", 
                                        "thumbnail" : "http://39.104.69.153/dsdxj/uploads/2018_01_10/img1515575385LIvVQcaL_thum.jpg" 
                                }, 
                                "3" : { 
                                        "id" : "1110", 
                                        "tid" : "7", 
                                        "path" : "http://39.104.69.153/dsdxj/uploads/2018_01_10/img1515575385LIvVQcaL.jpg", 
                                        "thumbnail" : "http://39.104.69.153/dsdxj/uploads/2018_01_10/img1515575385LIvVQcaL_thum.jpg" 
                                }, 
                        }
                        this.msg = { 
                                "name" : "三生三世", // 相册名字
                                "id" : 7, // 相册id
                                "is_like":1,
                                "likes":1111
                            }
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
        }
    }
</script>