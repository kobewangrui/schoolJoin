<style lang="css">
        .searchOuter .yd-datetime-head>a{
            font-size: .34rem!important;
        }
        .searchOuter .yd-datetime-head>a:last-child{
            color: #F9C84E!important;
        }
        .searchOuter .yd-datetime-content .yd-datetime-item{
            font-size: .34rem;
        }
        .searchOuter .yd-datetime-input{
            width: 4.34rem!important;
            display: inline-block;
            padding-bottom: .15rem;
            color: #929292;
        }
    </style>
    <style lang="css" scoped>
        .searchOuter{
            box-sizing: border-box;
            padding: 0 1.15rem;
            margin-top: 1.6rem;
        }
        .searchOuter p.underLine{
            margin-top: .2rem;
            padding: 0 .1rem;
            border-bottom: .02rem solid #C9BAAE;
        }
        .searchOuter input{
            width: 4.34rem;
            height: .8rem;
            font-size: .34rem;
            color: #929292;
            background: #f7f7f7;
        }
        .searchOuter .title input{
            width: 100%;
        }
        .searchOuter img{
            width: 0.46rem;
            height: 0.36rem;
        }
        .searchOuter input,
        .searchOuter img{
            vertical-align: middle;
        }
        .searchOuter .signOuter .sign{
            display: inline-block;
            padding: .08rem .24rem;
            border: .02rem solid #eee;
            font-size: .32rem;
            color: #93887F;
            border-radius: .12rem;
        }
        .searchOuter .signOuter{
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
        <div class="searchOuter">
            <p class="title underLine">
                <input type="text" placeholder="大绳活动的主题名字" v-model="theme">
            </p>
            <p class="underLine">
                <yd-datetime v-model="start_time" type="date" slot="right" :init-emit="false" placeholder="开始时间"></yd-datetime>
                <img :src="require('assets/image/datepicker.png')">
            </p>
            <p class="underLine">
                <yd-datetime v-model="end_time"  type="date" slot="right" :init-emit="false" placeholder="结束时间"></yd-datetime>
                <img :src="require('assets/image/datepicker.png')">
            </p>
            <p class="underLine">
                <input type="text" placeholder="地点" v-model="address">
            </p>
            <!-- <p v-for="i in 3" :key="i.id" class="signOuter">
                <span class="sign">杭州</span>
            </p> -->
            <p class="button">
                <router-link tag="button" :to="{path:'searchResult',query:{theme:theme,start:this.start_time,end:this.end_time,address:address}}">搜索</router-link>
            </p>
        </div>
    </template>
    <script>
        export default {
            data(){
                return {
                    start_time: '',
                    end_time: '',
                    lists:'',
                    theme:'',
                    address:'',
                }
            }
        }
    </script>