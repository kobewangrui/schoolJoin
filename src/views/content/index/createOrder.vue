<style lang="css" scoped>
    .img img{
        width: 100%;
        height: 4rem;
    }
    .order{
        padding: .3rem;
        box-sizing: border-box;
    }









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
    .person{
        margin: .3rem 0;
    }
    .person label{
        color: #93887F;
        font-size: .32rem;
        margin-right: .2rem;
    }
    .person input{
        font-size: .32rem;
        background: #f7f7f7;
    }
    .priceShow{
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;
    }
    .priceShow .people{
        color: #93887F;
        font-size: .32rem;
    }
    .priceShow .add{
        width: 2.1rem;
        height: .52rem;
        line-height: .52rem;
        background: #F9C84E;
        color: #fff;
        border-radius: .26rem;
        text-align: center;
    }
    .join{
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 1rem;
        line-height: 1rem;
        background: #fff;
        position: fixed;
        bottom: 0;
    }
    .join .price{
        font-size: .3rem;
        color: #2F2B27;
    }
    .join .price span{
        color: #2F2B27;
        font-size: .46rem;
    }
    .join .talk{
        color: #93887F;
        font-size: .26rem;
    }
    .join .pay{
        background: #F9C84E;
        color: #fff;
        width: 2.3rem;
        text-align: center;
    }
</style>
<template>
    <div>
        <p class="img">
            <img src="" alt="">
        </p>
        <div class="order">
            <div>
                <p>title</p>
                <p>场次：2011-01-11</p>
                <p>地点：地区</p>
            </div>
            <div class="person">
                <p>
                    <label for="">联系人</label>
                    <input type="text">
                </p>
                <p>
                    <label for="">手机号</label>
                    <input type="text">
                </p>
            </div>
            <div class="priceShow">
                <div class="people">
                    <div>儿童：0/￥2000</div>
                    <div>成人：0/￥4000</div>
                </div>
                <p class="add">
                    添加参与人
                </p>
            </div>
            <div class="list">
                <div v-for="(i,index) in 5" :key="i.id">
                    <input type="checkbox" name="person" :id="'person'+index">
                    <label class="check" :for="'person'+index">✓</label>
                    <span class="name">王睿龙</span>
                    <span>【学生】</span>
                    <!-- <span v-if="i.type ==='2'">【家长】</span>
                    <span v-if="i.type ==='3'">【教师】</span>
                    <span v-if="i.type ==='4'">【其他】</span> -->
                    <span class="delete" @click="deleteFri(i.id)">-</span>
                </div>
            </div>
        </div>
        <div class="join">
            <p class="price">本次支付：<span>￥980</span></p>
            <p class="talk">余款沟通后缴纳</p>
            <p class="pay">立即报名</p>
        </div>
    </div>
</template>
<script>
    export default{
        created(){
            this.$http.post('http://www.dashengxiji.xyz/WxMsg/getCode',{emulateJSON:true}).then((res)=>{
                if(res.body.code === 1000){
                    this.lists = res.body.data.activity_list;
                }
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
</script>