<style lang="css" scoped>
    .outer{
        padding: .2rem .3rem;
    }
    .jump{
        color: #F8C74E;
        font-size: .28rem;
        text-align: right;
        margin-bottom: 1.4rem;
    }
    .number{
        font-size: .34rem;
        color: #93887F;
        padding: .2rem;
        border-bottom: .01rem solid #E4DAD1;
    }
    .number label{
        margin-right: .1rem;
    }
    .number input{
        font-size: .34rem;
        background: #f7f7f7;
    }
    .number .codeIpt{
        width: 3rem;
    }
    .number .validateCode{
        display: inline-block;
        text-align: center;
        width: 2.1rem;
        line-height: .68rem;
        background: #D8D8D8;
        color: #fff;
        border-radius: .08rem;
        font-size: .28rem;
    }
    .next{
        width: 5.84rem;
        height: .8rem;
        background: #d8d8d8;
        font-size: .34rem;
        color: #fff;
        border-radius: .08rem;
    }
    .btn{
        margin-top: 1.4rem;
        text-align: center;
    }
    .active{
        background: #F9C84E!important;
    }
</style>
<template>
    <div class="outer">
        <router-link to="/edit" tag="p" class="jump">跳过</router-link>
        <div>
            <p class="number">
                <label for="phoneNumber">手机号</label>
                <input id="phoneNumber" v-model="phoneNumber" type="text">
            </p>
            <p class="number">
                <label for="checkCode">验证码</label>
                <input type="text" v-model="checkCode" class="codeIpt">
                <span class="validateCode" :class="{'active':isActive}" @click="getCode">{{codeText}}</span>
            </p>
            <p class="btn">
                <button class="next" :class="{'active':$vuerify.check()}">下一步</button>
            </p>
    </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                phoneNumber: '',
                checkCode: '',
                codeText:'获取验证码',
                isActive: true
            }
        },
        vuerify:{
            phoneNumber: ['required','phoneCheck'],
            checkCode: ['required','onlyNumber']
        },
        methods:{
            getCode(){
                if(this.codeText === '获取验证码'){
                    this.isActive = false;
                    this.codeText = 60;
                    let cleartime = setInterval(()=>{
                        this.codeText-=1;
                        if(this.codeText<1){
                            this.codeText = '获取验证码'
                            window.clearInterval(cleartime);
                            this.isActive = true;
                        }else{

                        }
                    },1000);
                }
            },
            sendCode(){
                this.$http.post('/PcApi',{name:'pc.Login.editInfo',name:'pc.Sms.RegSendMsg',mobile:this.phoneNumber},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.lists = res.body.data.Activitylist;
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>
