<style lang="css" scoped>
	.index{
		margin-bottom: 1.5rem;
	}
	.bannerImg img{
		height:3.4rem;
		width:100%;
	}
	.menu{
		box-sizing: border-box;
		padding: .5rem 0 .4rem;        
		background: #fff;
		border-bottom: .01rem solid #ebebeb;
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
</style>
<template>
	<div class="index">
		<div class="bannerImg">
			<img :src="require('assets/image/advance.png')">
		</div>
		<div class="menu">
			<ul>
				<router-link tag="li" to="/travel">
					<p>
						<img :src="require('assets/image/study.png')">
					</p>
					<p>研学旅行</p>
				</router-link>
				<router-link tag="li" to="/international">
					<p>
						<img :src="require('assets/image/international-exchange.png')">
					</p>
					<p>国际交流</p>
				</router-link>
				<router-link tag="li" to="/publicWelfare">
					<p>
						<img :src="require('assets/image/public-benefit.png')">
					</p>
					<p>大绳公益</p>
				</router-link>
				<router-link tag="li" to="/photo">
					<p>
						<img :src="require('assets/image/photo-album.png')">
					</p>
					<p>往期相册</p>
				</router-link>
				<router-link tag="li" to="/video">
					<p>
						<img :src="require('assets/image/video.png')">
					</p>
					<p>往期视频</p>
				</router-link>
				<router-link tag="li" to="/customized">
					<p>
						<img :src="require('assets/image/customization.png')">
					</p>
					<p>大绳定制</p>
				</router-link>
			</ul>
		</div>
		<List v-for="i in [1,2,3]" :key="i.id"></List>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		components:{
			List:require('assets/components/list.vue')
		}
	}
</script>
