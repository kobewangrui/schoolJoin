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
		border: .02rem solid #cfcfcf;
		border-radius: .2rem;
		padding: .05rem .1rem;
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
                <li  v-for="i in listData" :key="i.id" @click="getDetail(i.activity_id)">
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
                </li>
            </ul>
        </div>
</template>
<script>
	export default{
		data(){
			return{
				model_type:'',
			}
		},
		methods:{
			getDetail(id){
				this.$http.post('/PcApi',{name:'pc.ActivityView',activity_id:id},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
						this.model_type = res.body.data.ActivityView.model_type;
                        if(this.model_type==='1'){
							this.$router.push({path:'/detailOne',query:{id:id}});
                        }else if(this.model_type==='2'){
							this.$router.push({path:'/detailTwo',query:{id:id}});
                        }else if(this.model_type==='3'){
							this.$router.push({path:'/detailThree',query:{id:id}});
                        }else if(this.model_type==='4'){
							this.$router.push({path:'/detailFour',query:{id:id}});
                        }if(this.model_type==='5'){
							this.$router.push({path:'/detailFive',query:{id:id}});
                        }
					}
				}).catch((error)=>{
					console.log(error);
				})
            },
		},
		props:[
			'listData'
		]
	}
</script>