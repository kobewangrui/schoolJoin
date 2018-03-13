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
    .bottomDelete{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        border: .01rem solid #e4dad1;
        text-align: center;
        position: fixed;
        bottom: 0;
        background: #fff;
    }
    .bottomTable li{
        float: left;
        width: 33.3%;
    }
    .bottomTable li.active{
        color: #F9C84E;
    }
    .bottomTable .upload{
        background: #f9c84e;
        color: #fff;
    }
    .bottomDelete li{
        background: #fff;
        float: left;
        width: 50%;
    }
    .bottomDelete li.delete{
        background: #f9c84e;
        color: #fff;
    }
    .bottomTable:after{
        content:'';
        clear:both;
        display:block;
        width:0;
        height:0;
    }
    .like{
        width: .4rem;
        height: .4rem;
    }
    .like,
    .number{
        vertical-align: middle;
    }
</style>
<template>
    <div class="outer">
        <p class="title">
            <span>{{msg.name}}</span>
            <span>{{$route.query.time | dateTime}}</span>
        </p>
        <div class="detail">
            <p class="deleteAllPhoto" v-if="!edit"  @click="deletePhoto">删除该相册</p>
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
            <li class="active">
                <img class="like" @click="like(1)" v-if="msg.is_like==='0'" :src="require('assets/image/like.png')">
                <img class="like" @click="like(2)" v-if="msg.is_like!=='0'" :src="require('assets/image/unlike.png')">
                <span class="number">({{msg.likes}})</span>
            </li>
            <li @click="edits">编辑</li>
            <li class="upload">
                <addImg @clickImg = "clickImg" :max="5" @imgChange = "imgChange"></addImg>
            </li>
        </ul>
        <ul class="bottomDelete" v-else>
                <li @click="cancel">取消</li>
                <li class="delete" @click="deletePic">删除</li>
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
                activeImg: '',
                uploading: false,
                imgs:[],
            }
        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                this.$http.post('/PcApi',{name:'pc.Album.albumDetail',album_id:this.$route.query.id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.lists = res.body.data.pictures;
                        this.msg = res.body.data.msg;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            like(arg){
                this.$http.post('/PcApi',{name:'pc.Album.like',album_id:this.$route.query.id,type:arg},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.getList();
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            deletePhoto(){
                this.$http.post('/PcApi',{name:'pc.Album.delAlbum',album_id:this.msg.id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.$router.push('/production');
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
            deletePic(){
                let idStr = this.photoList.join(',');
                this.$http.post('/PcApi',{name:'pc.Album.delPicture',pic_id:idStr},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.getList();
                        this.$router.push('/productionDetail');
                        this.edit = true;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            clickImg(img){
				this.activeImg = img;
			},
			imgChange(files){
				this.imgs = files;
            },
            upload(){
				var fm = new FormData();
				this.imgs.forEach((img) => {
					fm.append('img', img, `${Math.ceil(Date.now()*Math.random()*10)}.jpg`);
                })
                fm.append('name','pc.Album.upload_img');
                fm.append('album_id',this.$route.query.id);
                console.log(fm);
                this.$http.post('/PcApi',fm,{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
						console.log('上传成功');
                        this.getList();
					}
				}).catch((error)=>{
					console.log(error);
				})
			}
        },
        components:{
            addImg:require('assets/components/addImg.vue')
        },
        watch:{
            'imgs':function(){
                this.upload();
            }
        }
    }
</script>