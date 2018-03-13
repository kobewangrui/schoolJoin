<style lang="css" scoped>
    .content{
        padding: .3rem;
    }
    .content img{
        width: 100%;
        margin-bottom: .3rem;
    }
</style>
<template>
    <div class="content">
        <p>
            <img :src="$route.query.path">
        </p>
        <p v-html="$route.query.content"></p>
    </div>
</template>