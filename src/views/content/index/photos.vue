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
</style>
<template>
    <div class="photo">
        <ul class="list">
            <router-link v-for="i in lists" :key="i.id" tag="li" :to="{path:'/photoDetail',query:{id:i.activity_id,time:i.starttime}}">
                <p>
                    <img :src="i.cover">
                </p>
                <p class="title">{{i.activity_name}}</p>
                <p class="date">{{i.starttime | dateTime}}</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lists:'',
            }
        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                this.$http.post('/PcApi',{name:'pc.cert.past'},{emulateJSON:true}).then((res)=>{
                    if(res.body.success === 1000){
                        this.lists = res.body.data;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>