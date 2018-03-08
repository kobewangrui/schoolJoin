<style lang="css" src="assets/css/menu.css" scoped></style>

<template>
    <div class="outer">
        <ul class="menu">
            <li @click="filterListData(8)">
                <p class="icons">
                    <img :src="require('assets/image/green_protecting.png')">
                </p>
                <p>大绳护绿</p>
            </li>
            <li @click="filterListData(9)">
                <p class="icons">
                    <img :src="require('assets/image/wildlife_protection.png')">
                </p>
                <p>野生动物保护</p>
            </li>
            <li @click="filterListData(10)">
                <p class="icons">
                    <img :src="require('assets/image/library.png')">
                </p>
                <p>大绳图书馆</p>
            </li>
            <li @click="filterListData(12)">
                <p class="icons">
                    <img :src="require('assets/image/qualification.png')">
                </p>
                <p>义工资质认证</p>
            </li>
            <li @click="filterListData(13)">
                <p class="icons">
                    <img :src="require('assets/image/love.png')">
                </p>
                <p>大绳爱心</p>
            </li>
        </ul>
		<List :listData="lists"></List>
    </div>
</template>
<script>
	export default{
		data(){
			return{
                types:'PubWelfare',
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