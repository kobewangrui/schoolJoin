<style lang="css" scoped>
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
    <div>
        <div v-if="false">
            <div class="icon">
                <img :src="require('assets/image/regret.png')">
            </div>
            <p class="intro">抱歉，您搜索的内容为空</p>
            <router-link to="/customized" tag="p" class="toLink">大绳定制申请>></router-link>
        </div>
        <List v-for="i in [1,2,3,4]" :key="i.id" v-else/>
    </div>
</template>
<script>
    export default{
        components:{
            List:require('assets/components/list.vue')
        }
    }
</script>