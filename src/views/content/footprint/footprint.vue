<style lang="css" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        padding: .2rem .3rem;
        font-size: .32rem;
    }
    .header img{
        width: .36rem;
        height: .4rem;
    }
    .header img,
    .header span{
        vertical-align: middle;
    }
    .header .count{
        color: #FFAE4E;
    }
    .header .more{
        color: #93887F;
        transform: scale(1,2.3);
    }
    .list{
        margin-bottom: 1.5rem;
    }
	.list ul li{
		background: #fff;
		box-sizing: border-box;
		padding: .3rem 0;
		border-bottom:.01rem solid #e5e5e5; 
	}
	.list ul li div.imgShow img{
		width: 7.5rem;
		height: 4rem;
	}
	.list ul li div.title,
	.list ul li div.time{
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 .3rem;
		margin-top: .2rem;
	}
	.list ul li div.title > p:first-child{
		font-size: .34rem;
		color: #574c46;
	}

	.list ul li div.title > p:last-child{
		font-size: .32rem;
		color: #d01d06;
	}
	.list ul li div.time>p:first-child img,
	.list ul li div.time>p:first-child span{
		vertical-align: middle;
	}
	.list ul li div.time>p:first-child img{
		width:.35rem;
		height:.35rem;
		margin-right: .05rem;
	}	
	.list ul li div.time>p:first-child span{
		font-size:.26rem;
		color: #9e9b9b;
	}
	.list ul li div.time > p:last-child span{
		display: inline-block;
		box-sizing: border-box;
		width: 1.2rem;
		height: .38rem;
		border: .02rem solid #cfcfcf;
		border-radius: .2rem;
		padding: .05rem;
		margin-right: .2rem;
		font-size: .24rem;
		text-align: center;
		line-height: .28rem;
		color:rgb(217,210,168);
	}
</style>
<template>
    <div class="list">
        <div class="header">
           <p>
               <img :src="require('assets/image/honor.png')">
               <span>荣誉证书</span>
               <span class="count">(23)</span>
           </p>
           <p class="more">></p>
        </div>
        <ul>
            <router-link tag="li" to="/" v-for="i in 5" :key="i.id">
                <div class="imgShow">
                    <img :src="require('assets/image/timg.jpeg')">
                </div>
                <div class="title">
                    <p>大绳定制最长10个字符</p>
                    <p>￥5670</p>
                </div>
                <div class="time">
                    <p>
                        <img :src="require('assets/image/datepicker.png')">
                        <span>12.13</span>
                    </p>
                    <p>
                        <span>荣誉证书</span>
                        <span>活动相册</span>
                    </p>
                </div>
            </router-link>
        </ul>
    </div>
</template>