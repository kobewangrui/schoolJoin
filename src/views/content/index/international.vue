<style lang="css" src="assets/css/menu.css" scoped>
</style>
<template>
    <div class="outer">
        <ul class="menu">
            <li>
                <p class="icon">
                    <img :src="require('assets/image/earth.png')">
                </p>
                <p>大绳之翼</p>
            </li>
            <li>
                <p class="icon">
                    <img :src="require('assets/image/athletics.png')">
                </p>
                <p>国际竞技</p>
            </li>
            <li>
                <p class="icon">
                    <img :src="require('assets/image/classroom.png')">
                </p>
                <p>美式课堂</p>
            </li>
            <li>
                <p class="icon">
                    <img :src="require('assets/image/model_united_nations.png')">
                </p>
                <p>模拟联合国</p>
            </li>
        </ul>
		<List v-for="i in [1,2,3]" :key="i.id"></List>
    </div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		components:{
			List:require('assets/components/list.vue')
		}
	}
</script>