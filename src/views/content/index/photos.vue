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
            <router-link v-for="i in [1,2,3,4,5,6,7,8]" :key="i.id" tag="li" to="/photoDetail">
                <p>
                    <img :src="require('assets/image/friend.png')">
                </p>
                <p class="title">18年10月夏令营</p>
                <p class="date">2013-10-02</p>
            </router-link>
        </ul>
    </div>
</template>