<style lang="css" scoped>
    .connect{
        box-shadow: 0 0 .05rem #f9c84e;
        margin: .3rem;
        border-radius: .08rem;
        box-sizing: border-box;
        padding: 1.1rem;
        color: #808080;
        background: #fff;
    }
    .connect p{
        margin-bottom: .4rem;
    }
    .connect p:last-child{
        margin-bottom: 0;
    }
    .connect .ipt{
        font-size: .3rem;
        border-bottom: .01rem solid #808080;
        padding: .05rem 0;
    }
    .connect .ipt input{
        width: 3.2rem;
        font-size: .32rem;
        margin-left: .1rem;
        color: #313d2a;
    }
    .connect .ipt span{
        display: inline-block;
        width: 1.28rem;
    }    
    .connect textarea{
        width: 100%;
        height: 2.2rem;
        font-size: .3rem;
        border: .02rem solid #d3d3d3;
        box-sizing: border-box;
        padding: .3rem;
        resize: none;
        border-radius: .08rem;
    }
    .connect button{
        border-radius: .36rem;
        background: #d8d8d8;
        height: .8rem;
        font-size: .32rem;
        color: #fff;
        width: 100%;
    }
    .connectPerson{
        color: #808080;
        font-size: .28rem;
        text-align: center;
    }
    .active{
        background: #F9C84E!important;
    }
</style>
<template>
    <div>
        <div class="connect">
            <p class="ipt">
                <span>姓名</span>
                <input type="text" v-model="dzname">
            </p>
            <p class="ipt">
                <span>联系方式</span>
                <input type="text" v-model="tel">
            </p>
            <p>
                <textarea placeholder="请简述您的意见与建议" v-model="content"></textarea>
            </p>
            <p>
                <button @click="postData" :class="{'active':$vuerify.check()}">发起留言</button>
            </p>
        </div>
        <p class="connectPerson">客服人员将主动与您联系</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                dzname:'',
                tel:'',
                content:''
            }
        },
        vuerify:{
            tel: ['required','phoneCheck'],
            dzname: ['required'],
            content: ['required'],
        },
        methods:{
            postData(){
                if(this.$vuerify.check()){
                    this.$http.post('/PcApi',{name:'pc.DsCustom',dzname:this.dzname,tel:this.tel,content:this.content},{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            alert(res.body.msg);
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            }
        }
    }
</script>