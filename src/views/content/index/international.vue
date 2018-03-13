<style lang="css" src="assets/css/menu.css" scoped>
</style>
<style lang="css" scoped>
    .menu{
        display: flex;
        justify-content: space-between;
        text-align: center;
        box-sizing: border-box;
        padding: .4rem .5rem;
        background: #fff;
        border: .01rem solid #ebebeb;
        margin-bottom: .2rem;
    }
</style>
<template>
    <div class="outer">
        <ul class="menu">
            <li @click="filterListData(5)">
                <p class="icon">
                    <img :src="require('assets/image/earth.png')">
                </p>
                <p>大绳之翼</p>
            </li>
            <li @click="filterListData(6)">
                <p class="icon">
                    <img :src="require('assets/image/athletics.png')">
                </p>
                <p>国际竞技</p>
            </li>
            <li @click="filterListData(7)">
                <p class="icon">
                    <img :src="require('assets/image/classroom.png')">
                </p>
                <p>美式课堂</p>
            </li>
            <li @click="filterListData(11)">
                <p class="icon">
                    <img :src="require('assets/image/model_united_nations.png')">
                </p>
                <p>模拟联合国</p>
            </li>
        </ul>
		<List :listData="lists"></List>
    </div>
</template>
<script>
	export default{
		data(){
			return{
                types:'IetExchange',
                lists:'',
                smallType:'',
			}
		},
        created(){
            this.getList();
        },
        methods:{
			getList(){
				this.$http.post('/PcApi',{name:'pc.TypeAct',up_type:this.types,type_id:this.smallType,page:'1'},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.lists = res.body.data.Activitylist;
                    }
				}).catch((error)=>{
					console.log(error);
				})
            },
            filterListData(type){
                this.smallType = type;
                this.getList();
            },
        },
		components:{
			List:require('assets/components/list.vue')
		}
	}
</script>