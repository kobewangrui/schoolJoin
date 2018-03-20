<style lang="css" scoped>
    .menu{
        display: flex;
        justify-content: space-between;
        text-align: center;
        box-sizing: border-box;
        background: #fff;
        border: .01rem solid #ebebeb;
        margin-bottom: .2rem;
        padding: 0 .5rem;
    }
    .menu li{
        padding: .4rem 0;
    }
    .menu li .icon img{
        width: .6rem;
        height: .7rem;
    }
    .menu li p:last-child{
        font-size: .24rem;
        color: #312d2a;
    }
    .menu li .icons img{
        width: .64rem;
        height: .64rem;
    }
    .outer{
        margin-bottom: 1.5rem;
    }
    .menu li{
        border-bottom: .01rem solid #fff;
    }
    .menu li.active{
        border-bottom: .01rem solid #F9C84E;
    }
</style>
<template>
    <div class="outer">
        <ul class="menu">
            <li @click="filterListData(1)" :class="{'active':smallType===1}">
                <p class="icon">
                    <img :src="require('assets/image/baby.png')">
                </p>
                <p>大绳宝贝</p>
            </li>
            <li @click="filterListData(2)" :class="{'active':smallType===2}">
                <p class="icon">
                    <img :src="require('assets/image/children.png')">
                </p>
                <p>大绳学童</p>
            </li>
            <li @click="filterListData(3)" :class="{'active':smallType===3}">
                <p class="icon">
                    <img :src="require('assets/image/teenager.png')">
                </p>
                <p>大绳的希冀</p>
            </li>
            <li @click="filterListData(4)" :class="{'active':smallType===4}">
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