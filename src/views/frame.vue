<style lang="css" src="assets/css/publicClass.css"></style>
<template>
	<div>
    	<router-view></router-view>
  	</div>
</template>
<script>
	import { wxLogin, getUser } from '../assets/js/common.js'
	export default{
		data(){
			return{

			}
		},
		created(){
			// wxLogin(); //授权登录
			// this.getCode();
			
		},
		methods:{
			getCode(){
				this.$http.post('/api',{name:'pc.Login.getInfo',code:'授权登陆code'},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
						console.log(res.body)
					}
				}).catch((error)=>{
					console.log(error);
				})
			}
		}
	}
</script>