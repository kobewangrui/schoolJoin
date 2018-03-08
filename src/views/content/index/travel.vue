<style lang="css" src="assets/css/menu.css" scoped></style>
<template>
    <div class="outer">
        <ul class="menu">
            <li @click="filterListData(1)">
                <p class="icon">
                    <img :src="require('assets/image/baby.png')">
                </p>
                <p>大绳宝贝</p>
            </li>
            <li @click="filterListData(2)">
                <p class="icon">
                    <img :src="require('assets/image/children.png')">
                </p>
                <p>大绳学童</p>
            </li>
            <li @click="filterListData(3)">
                <p class="icon">
                    <img :src="require('assets/image/teenager.png')">
                </p>
                <p>大绳的希冀</p>
            </li>
            <li @click="filterListData(4)">
                <p class="icon">
                    <img :src="require('assets/image/course.png')">
                </p>
                <p>研学课程</p>
            </li>
        </ul>
		<List :listData="lists"></List>
    </div>
</template>
<script>
	export default{
		data(){
			return{
                types:'StudyTravel',
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