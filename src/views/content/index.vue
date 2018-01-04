<style lang="css" scoped>
	.index{
		margin-bottom: 1.5rem;
	}
	.bannerImg img{
		height:3.4rem;
		width:100%;
	}
	.menu{
		margin: .5rem 0 .4rem;
	}
	.menu ul{
		width:100%;
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
	}
	.menu ul li{
		width:30%;
		text-align: center;
		font-size: .3rem;
		color:#312d2a;
	}
	.menu ul li p:first-child{
		margin-bottom: .015rem;
	}

	.menu ul li:nth-child(2),
	.menu ul li:nth-child(3),
	.menu ul li:first-child{
		margin-bottom:.4rem;

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
	<div class="index">
		<div class="bannerImg">
			<img :src="require('assets/image/advance.png')">
		</div>
		<div class="menu">
			<ul>
				<router-link tag="li" to="/">
					<p>
						<img :src="require('assets/image/study.png')">
					</p>
					<p>研学旅行</p>
				</router-link>
				<router-link tag="li" to="/">
					<p>
						<img :src="require('assets/image/international-exchange.png')">
					</p>
					<p>国际交流</p>
				</router-link>
				<router-link tag="li" to="/">
					<p>
						<img :src="require('assets/image/public-benefit.png')">
					</p>
					<p>大绳公益</p>
				</router-link>
				<router-link tag="li" to="/">
					<p>
						<img :src="require('assets/image/photo-album.png')">
					</p>
					<p>往期相册</p>
				</router-link>
				<router-link tag="li" to="/">
					<p>
						<img :src="require('assets/image/video.png')">
					</p>
					<p>往期视频</p>
				</router-link>
				<router-link tag="li" to="/">
					<p>
						<img :src="require('assets/image/customization.png')">
					</p>
					<p>大绳定制</p>
				</router-link>
			</ul>
		</div>
		<div class="list">
			<ul>
				<router-link tag="li" to="/" v-for="i in 3">
					<div class="imgShow">
						<img :src="require('assets/image/apply.png')">
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
							<span v-for="i in 3" :key="i.id">8-12岁</span>
						</p>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>
