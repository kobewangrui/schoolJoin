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
			<yd-slider autoplay="3000">
				<yd-slider-item v-for="i in img" :key="i.id">
					<a :href="i.url">
						<img :src="i.path">
					</a>
				</yd-slider-item>
			</yd-slider>
		</div>
		<div class="menu">
			<ul>
				<router-link tag="li" :to="{path:'/travel',query:{type:'StudyTravel'}}">
					<p>
						<img :src="require('assets/image/study.png')">
					</p>
					<p>研学旅行</p>
				</router-link>
				<router-link tag="li" :to="{path:'/international',query:{type:'IetExchange'}}">
					<p>
						<img :src="require('assets/image/international-exchange.png')">
					</p>
					<p>国际交流</p>
				</router-link>
				<router-link tag="li" :to="{path:'/publicWelfare',query:{type:'PubWelfare'}}">
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
		<List :listData='lists'></List>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				lists:[],
				img:[]
			}
		},
		created(){
			this.getList();
			this.getBanner();
		},
		methods:{
			getList(){
				this.$http.post('/PcApi',{name:'pc.IndexAct'},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
						this.lists = res.body.data.activity_list;
					}
				}).catch((error)=>{
					console.log(error);
				})
			},
			getBanner(){
				this.$http.post('/PcApi',{name:'pc.banner'},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
						this.img = res.body.data.banner_homepage
					}
				}).catch((error)=>{
					console.log(error);
				})
			}
		},
		components:{
			List:require('assets/components/list.vue')
		}
	}
</script>
