<style lang="css" scoped>
    .outer{
        box-sizing: border-box;
        padding: .3rem;
    }
    .suggest{
        padding: .94rem .55rem .4rem;
        box-sizing: border-box;
        border: .01rem solid #F9C84E;
        border-radius: .08rem;
    }
    .title{
        color: #312D2A;
        font-size: .34rem;
        margin-bottom: .3rem;
    }
    textarea{
        width: 5.8rem;
        height: 2.74rem;
        border-radius: .08rem;
        border: .02rem solid #D3D3D3;
        box-sizing: border-box;
        padding: .2rem;
        font-size: .3rem;
    }
    .sign{
        font-size: .3rem;
        color: #CAA771;
    }
    .btn{
        text-align: center;
        margin-top: .4rem;
    }
    button{
        width: 3.9rem;
        height: .86rem;
        border-radius: .36rem;
        background: #D8D8D8;
        font-size: .32rem;
        color: #fff;
    }
    .active{
        background: #F9C84E;
    }
</style>
<template>
    <div class="outer">
        <div class="suggest">
            <p class="title">{{$route.query.title}}</p>
            <textarea v-model="contents" placeholder="请输入您的感受和建议"></textarea>
            <p class="sign">提交活动感受及建议奖励666积分</p>
            <p class="btn">
                <button @click="putSuggest" :class="{'active':$vuerify.check()}">提交</button>
            </p>
        </div>
    </div>
</template>
<script>
        export default {
            data() {
                return {
                    contents:''
                }
            },
            vuerify:{
                contents:['required']
            },
            methods:{
                putSuggest(){
                    if(this.$vuerify.check()){
                        this.$http.post('/PcApi',{name:'pc.AddActCon',activity_id:this.$route.query.id,contents:this.contents},{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            this.$router.push('/order');
                        }
                        }).catch((error)=>{
                            console.log(error);
                        })
                    }

                }
            }
        }
    </script>