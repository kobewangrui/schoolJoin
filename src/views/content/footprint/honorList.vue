<style lang="css" scoped>
    .honor{
        padding: .3rem .2rem;
        box-sizing: border-box;
        margin-bottom: 1.6rem;
    }
    ul li{
        margin-bottom: .2rem;
    }
    ul li img,
    ul li img{
        vertical-align: middle;
    }
    .contentNull{
        margin-top: 2rem;
        font-size: .34rem;
        text-align:center;
        color: #d8d8d8;
    }
</style>
<template>
    <div class="honor">
        <ul v-if="cert.length>0">
            <router-link :to="{path:'/honorDetail',query:{path:i.path,content:i.content}}" tag="li" v-for="i in cert" :key="i.id">
                <img v-if="i.icon_type==='1'" :src="require('assets/image/badge-1.png')">
                <img v-if="i.icon_type==='2'" :src="require('assets/image/badge-2.png')">
                <img v-if="i.icon_type==='3'" :src="require('assets/image/badge-3.png')">
                <span>{{i.remark}}</span>
            </router-link>
        </ul>
        <p v-else class="contentNull">暂无荣誉证书</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                cert:[]
            }
        },
        created(){
            this.myHonor();
        },
        methods:{
            myHonor(){
                this.$http.post('/PcApi',{name:'pc.cert.myCert'},{emulateJSON:true}).then((res)=>{
                    if(res.body.success === 1000){
                        this.cert = res.body.data.cert
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>