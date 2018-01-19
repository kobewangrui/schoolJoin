<style lang="css" scoped>
	.index{
		margin-bottom: 1.5rem;
	}
	.menu{
        box-sizing: border-box;
		padding: .3rem;        
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
		padding: .3rem 0;
		border-bottom:.01rem solid #e5e5e5; 
	}
	.list ul li div.imgShow video{
		width: 7.5rem;
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
			</ul>
		</div>
        <div class="list">
            <ul>
                <li v-for="i in [1,2,3]" :key="i.id">
                    <div class="imgShow">
                        <video src="http://www.w3school.com.cn/i/movie.ogg" controls="controls"></video>
                    </div>
                    <div class="title">
                        <p>大绳定制最长10个字符</p>
                        <p>12月13日</p>
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
			}
		},
		components:{
		}
	}
</script>