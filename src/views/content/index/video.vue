<style lang="css" scoped>
	.index{
		margin-bottom: 1.5rem;
		padding: .2rem;
		box-sizing: border-box;
		background: #fff;
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
		border-bottom:.01rem solid #e5e5e5; 
		box-sizing: border-box;
	}
	.menu ul li img{
		width: .55rem;
		height: .55rem;
	}
	.list ul li div.imgShow img{
		width: 7.1rem;
		height: 4rem;
	}
	.list ul li div.title{
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
		font-size: .26rem;
		color: #9e9b9b;
	}
</style>
<template>
	<div class="index">
		<div class="menu">
			<ul>
				<li @click="filterTyoe('StudyTravel')">
					<p>
						<img :src="require('assets/image/study.png')">
					</p>
					<p>研学旅行</p>
				</li>
				<li @click="filterTyoe('IetExchange')">
					<p>
						<img :src="require('assets/image/international-exchange.png')">
					</p>
					<p>国际交流</p>
				</li>
				<li @click="filterTyoe('PubWelfare')">
					<p>
						<img :src="require('assets/image/public-benefit.png')">
					</p>
					<p>大绳公益</p>
				</li>
			</ul>
		</div>
        <div class="list">
            <ul>
                <li v-for="i in lists" :key="i.id">
                    <div class="imgShow">
						<a :href="i.url">
							<img :src="i.path">
						</a>
					</div>
                    <div class="title">
                        <p>{{i.name}}</p>
                        <p>{{i.addtime | dateTime}}</p>
                    </div>
                </li>
            </ul>
        </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				lists:[],
				videoType:'',
				page:1
			}
		},
		created(){
			this.getVideoList();
			var self = this;
            $(window).scroll(function(){
                let scrollTop = $(this).scrollTop()
                let scrollHeight = $(document).height()
                let windowHeight = $(this).height()
                if(scrollTop + windowHeight === scrollHeight){
                    self.page++;
                    self.getVideoList();
                }
            })
		},
		methods:{
			getVideoList(){
				this.$http.post('/PcApi',{name:'pc.DsVideo',up_type:this.videoType,page:this.page},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
						if(res.body.data.Videolist.length > 0){
							this.lists = this.lists.concat(res.body.data.Videolist);
						}
					}
				}).catch((error)=>{
					console.log(error);
				})
			},
			filterTyoe(type){
				this.videoType = type;
				this.getVideoList();
			}
		}
	}
</script>