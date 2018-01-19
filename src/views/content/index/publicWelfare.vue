<style lang="css" src="assets/css/menu.css" scoped>
    
</style>
<template>
    <div class="outer">
        <ul class="menu">
            <li>
                <p class="icons">
                    <img :src="require('assets/image/green_protecting.png')">
                </p>
                <p>大绳护绿</p>
            </li>
            <li>
                <p class="icons">
                    <img :src="require('assets/image/wildlife_protection.png')">
                </p>
                <p>野生动物保护</p>
            </li>
            <li>
                <p class="icons">
                    <img :src="require('assets/image/library.png')">
                </p>
                <p>大绳图书馆</p>
            </li>
            <li>
                <p class="icons">
                    <img :src="require('assets/image/qualification.png')">
                </p>
                <p>义工资质认证</p>
            </li>
            <li>
                <p class="icons">
                    <img :src="require('assets/image/love.png')">
                </p>
                <p>大绳爱心</p>
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