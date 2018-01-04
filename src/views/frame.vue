<style lang="css" src="assets/css/publicClass.css"></style>
<style lang="css" scoped>
	footer{
		position:fixed;
		bottom:0;
		width:100%;
		height:1rem;
		background:#fff;
		z-index:10;
	}
	footer ul{
		width:100%;
	}
	footer ul li{
		width:25%;
		height:1rem;
		line-height:1rem;
		list-style:none;
		float:left;
		text-align:center;
		font-size:.2rem;
		color:#6d6d6d;
	}
	footer ul li p{
		line-height:.4rem;
	}
	footer ul li p>img{
		width:.46rem;
		height:.46rem;
	}
	footer ul:after{
		content:'';
		clear:both;
		width:0;
		overflow:hidden;
	}
	footer ul li p:nth-child(2)>img:first-child{
		display:none;
	}
	footer ul li.router-link-active p:nth-child(2)>img:last-child{
		display:none;
	}	
	footer ul li.router-link-active p:nth-child(2)>img:first-child{
		display:inline-block;
	}
	footer ul li.router-link-active p:first-child{
		color:#ffb200;
	}
</style>
<template>
  <div>
    <router-view></router-view>
    <footer>
		<ul>
			<router-link tag="li" to="/" exact>
				<p>首页</p>
				<p>
					<img :src="require('assets/image/home-selected.png')">
					<img :src="require('assets/image/home-default.png')">
				</p>
			</router-link>
			<router-link tag="li" to="/search" exact>
				<p>搜索</p>
				<p>
					<img :src="require('assets/image/search-selected.png')">
					<img :src="require('assets/image/search-default.png')">					
				</p>
			</router-link>
			<router-link tag="li" to="/footprint" exact>
				<p>足迹</p>
				<p>
					<img :src="require('assets/image/footprint-selected.png')">
					<img :src="require('assets/image/footprint-default.png')">					
				</p>
			</router-link>
			<router-link tag="li" to="/mine" exact>
				<p>我的</p>
				<p>
					<img :src="require('assets/image/mine-selected.png')">
					<img :src="require('assets/image/mine-default.png')">					
				</p>
			</router-link>
		</ul>
	</footer>
  </div>
</template>