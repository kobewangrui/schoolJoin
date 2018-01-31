<style lang="css">
    .yd-datetime-head>a{
        font-size: .34rem!important;
    }
    .yd-datetime-head>a:last-child{
        color: #F9C84E!important;
    }
    .yd-datetime-content .yd-datetime-item{
        font-size: .34rem;
    }
    .yd-datetime-input{
        width: 4.34rem!important;
        display: inline-block;
        padding-bottom: .15rem;
        color: #929292;
    }
</style>
<style lang="css" scoped>
    .outer{
        box-sizing: border-box;
        padding: 0 1.15rem;
        margin-top: 1.6rem;
    }
    .outer p.underLine{
        margin-top: .2rem;
        padding: 0 .1rem;
        border-bottom: .02rem solid #C9BAAE;
    }
    .outer input{
        width: 4.34rem;
        height: .8rem;
        font-size: .34rem;
        color: #929292;
        background: #f7f7f7;
    }
    .outer .title input{
        width: 100%;
    }
    .outer img{
        width: 0.46rem;
        height: 0.36rem;
    }
    .outer input,
    .outer img{
        vertical-align: middle;
    }
    .outer .signOuter .sign{
        display: inline-block;
        padding: .08rem .24rem;
        border: .02rem solid #eee;
        font-size: .32rem;
        color: #93887F;
        border-radius: .12rem;
    }
    .outer .signOuter{
        margin: .1rem 0;
    }
    .button{
        text-align: center;
    }
    .button button{
        margin: 1.2rem 0 0;
        width: 3.9rem;
        height: .86rem;
        border-radius: .42rem;
        color: #fff;
        background: #F9C84E;
        font-size: .34rem;
    }
</style>
<template>
    <div class="outer">
        <p class="title underLine">
            <input type="text" placeholder="大绳活动的主题名字">
        </p>
        <p class="underLine">
            <yd-datetime v-model="start_time" :yearFormat="yearFormat" :month-format="monthFormat" :day-format="dayFormat" type="date" slot="right"></yd-datetime>
            <img :src="require('assets/image/datepicker.png')">
        </p>
        <p class="underLine">
            <yd-datetime v-model="end_time" :yearFormat="yearFormat" :month-format="monthFormat" :day-format="dayFormat" type="date" slot="right"></yd-datetime>
            <img :src="require('assets/image/datepicker.png')">
        </p>
        <p class="underLine">
            <input type="text" placeholder="地点">
        </p>
        <p v-for="i in 3" :key="i.id" class="signOuter">
            <span class="sign">杭州</span>
        </p>
        <p class="button">
            <router-link tag="button" to="/searchResult">搜索</router-link>
        </p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                start_time: this.defaultDate(),
                end_time: this.defaultDate('end'),
                yearFormat: "{value}",
                monthFormat: "{value}",
                dayFormat: "{value}"
            }
        },
        methods:{
            defaultDate(i){
                let d = new Date(),
                    Y = d.getFullYear(),
                    M = d.getMonth()+1,
                    D = d.getDate(),
                    HH = d.getHours(),
                    MM = d.getMinutes();
                    if(i==='end'){
                        HH+=1;
                    };
                    M = M<10 ? '0'+M : M
                    D = D<10 ? '0'+D : D
                    HH = HH<10 ? '0'+HH : HH
                    MM = MM<10 ? '0'+MM : MM
                return `${Y}-${M}-${D} ${HH}:${MM}`;
            }
        }
    }
</script>