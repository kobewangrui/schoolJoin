<style lang="css" scoped>
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
		width: 4rem;
		font-size: .34rem;
		color: #574c46;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
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
            <ul>
                <router-link tag="li" :to="{path:'/detail',query:{id:i.activity_id}}" v-for="i in listData" :key="i.id">
                    <div class="imgShow">
                        <img :src="i.path">
                    </div>
                    <div class="title">
                        <p>{{i.activity_name}}</p>
                        <p>￥{{i.price}}</p>
                    </div>
                    <div class="time">
                        <p>
                            <img :src="require('assets/image/datepicker.png')">
                            <span>{{i.starttime | dateTime}}</span>
                        </p>
                        <p>
                            <span v-for="j in i.label.split(',')" :key="j.id">{{j}}</span>
                        </p>
                    </div>
                </router-link>
            </ul>
        </div>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		created(){
		},
		props:[
			'listData'
		]
	}
</script>