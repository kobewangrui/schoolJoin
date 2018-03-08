<style lang="css" scoped>
    input[type='radio']{
        display: none;
    }
    .outer{
        padding: .2rem .3rem;
        box-sizing: border-box;
    }
    .personDetail>div{
        margin-bottom: .2rem;
    }
    .personDetail>div span:first-child,
    .personDetail>div label{
        color: #93887F;
        font-size: .34rem;
        display: inline-block;
        width: 1.1rem;
    }
    .personDetail>div input{
        width: 4.7rem;
        height: .42rem;
        font-size: .34rem;
        background: #f7f7f7;
    }    
    .personDetail .type label{
        display: inline-block;
        width: 1.1rem;
        height: .64rem;
        line-height: .64rem;
        text-align: center;
        border-radius: .08rem;
        border: .01rem solid #E4DAD1;
        margin-right: .1rem;
    }
    .personDetail .type input[type='radio']:checked+label{
        border: .01rem solid #F9C84E;
        color: #F9C84E;
    }
    .personDetail .name .delete{
        display: inline-block;
        width: .3rem;
        height: .3rem;
        line-height: .3rem;
        background: #93887F;
        border-radius: 50%;
        color: #fff;
        font-size: .26rem;
        text-align: center;
    }
    .personDetail .card{
        color: #93887F;
        font-size: .3rem;
    }    
    ul.bottomTable{
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 0;
        height: 1rem;
        line-height: 1rem;
        font-size: .34rem;
        border-top: .01rem solid #E4DAD1;
    }
    ul.bottomTable li{
        text-align: center;
        width: 50%;
    }
    ul.bottomTable li:last-child{
        background: #d8d8d8;
        color: #fff;
    }
    ul.bottomTable li.active{
        background: #F9C84E;
    }
</style>
<template>
    <div class="outer">
        <div class="personDetail">
            <div class="type">
                <span>类别</span>
                <input type="radio" v-model="type" value="1" name="personType" id="student">
                <label for="student">学生</label>
                <input type="radio" v-model="type" value="2" name="personType" id="parent">
                <label for="parent">家长</label>
                <input type="radio" v-model="type" value="3" name="personType" id="teacher">
                <label for="teacher">教师</label>
                <input type="radio" v-model="type" value ="4" name="personType" id="other">
                <label for="other">其他</label>
            </div>
            <div class="name">
                <label for="name">姓名</label>
                <input v-model="name" id="name" type="text">
                <span class="delete" @click="clearName">×</span>
            </div>
            <div>
                <label for="sex">性别</label>
                <input id="sex" v-model="sex" type="text">
            </div>
            <div>
                <label for="age">年龄</label>
                <input id="age" v-model="age" type="text">
            </div>
            <div>
                <label for="school">学校</label>
                <input id="school" v-model="school" type="text">
            </div>
            <div>
                <label for="grade">年级</label>
                <input id="grade" v-model="grade" type="text">
            </div>
            <div class="card">
                <label for="card">身份证</label>
                <input id="card" v-model="card" type="text">
                <span>(选填)</span>
            </div>
        </div>
        <ul class="bottomTable">
            <router-link to="/family" tag="li">取消</router-link>
            <li :class="{'active':$vuerify.check()}" @click="addFamily">保存</li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                type:'1',
                name:'',
                sex:'',
                school:'',
                grade:'',
                card:'',
                age:''
            }
        },
        created(){
        },
        vuerify:{
            type:['required'],
            name:['required'],
            sex:['required'],
            school:['required'],
            grade:['required'],
            card:['onlyNumber'],
            age:['required','onlyNumber'],
        },
        methods:{
            addFamily(){
                let gender;
                if(this.sex ==='1'){
                    gender = '男';
                }else if(this.sex === '2'){
                    gender = '女';
                }else{
                    gender = '未知';
                }
                if(this.$vuerify.check()){
                    this.$http.post('/api',{name:'pc.Family.add',real_name:this.name,type:this.type,gender:gender,age:this.age,school:this.school,idcard:this.card},{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            console.log('添加成功');
                            this.$router.push('/family');
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            },
            clearName(){
                this.name = '';
            }
        }
    }
</script>