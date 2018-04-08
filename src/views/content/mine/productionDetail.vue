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
    .title .names{
        font-size: .32rem;
    }
    .title .dateTime{
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

    .cover{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .names .editName{
        font-size: .2rem;
        color: #d8d8d8;
        margin-left: .2rem;
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
        margin-bottom:.3rem;
        font-size: .32rem;
    }
    .pop input[type='text']{
        width: 3rem;
        border: .02rem solid #d8d8d8;
        font-size: .28rem;
        padding: .05rem .1rem;
        box-sizing: border-box;
        border-radius: .08rem;
    }
    .pop button{
        width: 3rem;
        height: .6rem;
        background: #D8D8D8;
        border-radius: .08rem;
        font-size: .28rem;
        color: #fff;
        margin-top: .5rem;
    }
    .pop button.active{
        background: #F9C84E;
    }
    .popShow{
        transform: scale(1,1);
    }
    .eventsNone{
        pointer-events: none;
    }
</style>
<template>
    <div class="outer">
        <p class="title">
            <span class="names" :class="{'eventsNone':edit}" @click="popHandle=true">{{names}}<span v-if="!edit" class="editName">修改</span></span>
            <span class="dateTime">{{$route.query.time | dateTime}}</span>
        </p>
        <div class="detail">
            <p class="deleteAllPhoto" v-if="!edit"  @click="deletePhoto">删除该相册</p>
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
            <li class="active">
                <img class="like" @click="like(2)" v-if="msg.is_like!=='0'" :src="require('assets/image/like.png')">
                <img class="like" @click="like(1)" v-if="msg.is_like==='0'" :src="require('assets/image/unlike.png')">
                <span class="number">({{msg.likes}})</span>
            </li>
            <li @click="edits">编辑</li>
            <li class="upload">
                <addImg @clickImg = "clickImg" :max="10" @imgChange = "imgChange"></addImg>
            </li>
        </ul>
        <ul class="bottomDelete" v-else>
            <li @click="cancel">取消</li>
            <li class="delete" @click="deletePic">删除</li>
        </ul>
        <div class="pop" :class="{'popShow':popHandle}">
            <p>修改相册名字</p>
            <p>
                <input type="text" v-model="newName" placeholder="请输入新的相册名">
            </p>
            <p>
                <button @click="editName" :class="{'active':$vuerify.check()}">确认修改</button>
            </p>
        </div>
        <div class="cover" @click="cancelChangeName" v-if="popHandle"></div>
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
                names:'',
                lookImg:false,
                popHandle:false,
                newName:''
            }
        },
        created(){
            this.getList();
        },
        vuerify:{
            newName:['required']
        },
        methods:{
            cancelChangeName(){
                this.popHandle=false;
                this.newName =''
            },
            editName(){
                if(this.$vuerify.check()){
                    this.$http.post('/PcApi',{name:'pc.Album.editAlbum',album_id:this.$route.query.id,title:this.newName},{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            this.popHandle=false;
                            this.getList();
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            },
            getList(){
                this.$http.post('/PcApi',{name:'pc.Album.albumDetail',album_id:this.$route.query.id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.lists = res.body.data.pictures;
                        this.msg = res.body.data.album;
                        this.names = res.body.data.album.name;
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
                console.log(JSON.stringify(fm));
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