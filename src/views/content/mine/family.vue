<style lang="css" src="assets/css/family.css" scoped></style>
<template>
    <div>
        <div class="list">
            <div v-for="(i,index) in lists" :key="i.id">
                <input type="checkbox" name="person" :id="'person'+index">
                <label class="check" :for="'person'+index">✓</label>
                <span class="name">{{i.name}}</span>
                <span v-if="i.type ==='1'">【学生】</span>
                <span v-if="i.type ==='2'">【家长】</span>
                <span v-if="i.type ==='3'">【教师】</span>
                <span v-if="i.type ==='4'">【其他】</span>
                <span class="delete" @click="deleteFri(i.id)">-</span>
            </div>
        </div>
        <router-link tag="p" to="/addPerson" class="addPerson">添加成员</router-link>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                lists:[],
            }
        },
        created(){
            this.getFamilyList();
        },
        methods:{
            deleteFri(id){
                this.$http.post('/PcApi',{name:'pc.Family.delete',id:id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.getFamilyList();
                        console.log('删除成功');
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            getFamilyList(){
                this.$http.post('/PcApi',{name:'pc.Family.familyList'},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.lists = res.body.data;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
        }
    }
</script>