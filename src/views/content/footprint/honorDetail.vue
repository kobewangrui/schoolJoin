<style lang="css">
    .contentHonorDetail{
        padding: .3rem;
    }
    .contentHonorDetail p.htmlImg img{
        max-width: 7rem;
        margin-bottom: .3rem;
    }
    .contentHonorDetail p img{
        max-width: 7rem;
        margin-bottom: .3rem;
    }
</style>
<template>
    <div class="contentHonorDetail">
        <p>
            <img :src="$route.query.path">
        </p>
        <p class="htmlImg" v-html="$route.query.content"></p>
    </div>
</template>