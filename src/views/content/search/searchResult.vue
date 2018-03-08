<style lang="css" scoped>
    .result{
        margin-bottom: 1.6rem;
    }
    p{
        text-align: center;
    }
    .icon{
        text-align: center;
        margin-top: 3rem;
    }
    .icon img{
        width: 0.94rem;
        height: 0.82rem;
    }
    .intro{
        margin: .2rem 0 .5rem;
        font-size: .32rem;
        color: #2f2b27;
    }
    .toLink{
        font-size: .32rem;
        color: #ffae4e;
    }
</style>
<template>
    <div class="result">
        <div v-if="lists.length<=0">
            <div class="icon">
                <img :src="require('assets/image/regret.png')">
            </div>
            <p class="intro">抱歉，您搜索的内容为空</p>
            <router-link to="/customized" tag="p" class="toLink">大绳定制申请>></router-link>
        </div>
        <List :listData="lists" v-else/>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                lists:[]
            }
        },
        created(){
            this.search();
        },
        methods:{
            search(){
                this.$http.post('/PcApi',{name:'pc.Album.search',theme:this.$route.query.theme,start:this.$route.query.start,end:this.$route.query.end,address:this.$route.query.address},{emulateJSON:true}).then((res)=>{
                    console.log(res.body)
                    if(res.body.code === 1000){
                        this.lists = res.body.data;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        components:{
            List:require('assets/components/list.vue')
        },
    }
</script>