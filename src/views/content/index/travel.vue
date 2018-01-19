<style lang="css" src="assets/css/menu.css" scoped></style>
<template>
    <div class="outer">
        <ul class="menu">
            <li>
                <p class="icon">
                    <img :src="require('assets/image/baby.png')">
                </p>
                <p>大绳宝贝</p>
            </li>
            <li>
                <p class="icon">
                    <img :src="require('assets/image/children.png')">
                </p>
                <p>大绳学童</p>
            </li>
            <li>
                <p class="icon">
                    <img :src="require('assets/image/teenager.png')">
                </p>
                <p>大绳的希冀</p>
            </li>
            <li>
                <p class="icon">
                    <img :src="require('assets/image/course.png')">
                </p>
                <p>研学课程</p>
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