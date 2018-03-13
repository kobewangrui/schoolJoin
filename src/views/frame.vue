<style lang="css" src="assets/css/publicClass.css"></style>
<template>
	<div>
    	<router-view></router-view>
  	</div>
</template>
<script>
	export default{
		data(){
			return{
				code:'',
				login:'',
				userId:''
			}
		},
		created(){
			this.code = this.getParameterByName('code');
			this.codeGetMsg();
		},
		methods:{
			getParameterByName(name, url){
				if (!url) {
					url = window.location.href;
				}
				name = name.replace(/[\[\]]/g, "\\$&");
				var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
					results = regex.exec(url);
				if (!results) return null;
				if (!results[2]) return '';
				return decodeURIComponent(results[2].replace(/\+/g, " "));
			},
			codeGetMsg(){
				if(this.code == null || this.code === ''){
					this.wxLogin();
					this.code = this.getParameterByName("code");
				}else{
					this.$http.post('/PcApi',{name:'pc.Login.getInfo',code:this.code},{emulateJSON:true}).then((res)=>{
						if(res.body.code === 1000){
							if(res.body.data.first_login === '1'){
								this.$router.push('/edit');
							}else{
								this.getUserMsg(res.body.data.user_id);
							}
						}
					}).catch((error)=>{
						console.log(error);
					})
				};
			},
			getUserMsg(id){
				this.$http.post('/PcApi',{name:'pc.Login.getInfoById',id:id},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
						let infos = res.body.data;
						this.$store.commit('UPDATE_USER',infos);
						this.$router.push('/');
					}
				}).catch((error)=>{
					console.log(error);
				})
			},
			wxLogin(){
				location.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8387437705240b54&redirect_uri=http://www.dashengxiji.xyz/WxMsg/getCode&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`);
			}
		}
	}
</script>