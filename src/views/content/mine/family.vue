<style lang="css" scoped>
    input[type='checkbox']{
        display: none;
    }
    .list{
        background: #fff;
        padding: .3rem;
        margin-bottom: 1.5rem;
    }
    .list div{
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;
    }
    .list div label.check{
        display: inline-block;
        width: .34rem;
        height: .34rem;
        line-height: .34rem;
        color: #fff;
        border-radius: 50%;
        font-size: .3rem;
        text-align: center;
        margin-top: .1rem;
        border: .01rem solid #F9C84E;
    }
    .list div input[type='checkbox']:checked+label{
        background: #F9C84E;
    }
    .list div .name{
        display: inline-block;
        width: 2rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .list div .delete{
        display: inline-block;
        width: .3rem;
        height: .3rem;
        line-height: .3rem;
        border: .01rem solid #93887F;
        border-radius: 50%;
        margin-top: .1rem;
        text-align: center;
        color: #93887F;
        font-size: .3rem;
        background: #fff;
    }
    .addPerson{
        height: 1rem;
        line-height: 1rem;
        color: #fff;
        font-size: .34rem;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #F9C84E;
    }
</style>
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