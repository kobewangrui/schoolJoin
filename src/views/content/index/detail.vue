<style lang="css" scoped>
    .detail{
        padding: .3rem .2rem;
        box-sizing: border-box;
    }
    .oneContent img{
        width: 7rem;
    }
    .header .img img{
        width: 100%;
        height: 4rem;
    }
    .header .titleT{
        font-size: .34rem;
        color: #000;
    }
    .header .price{
        display: flex;
        justify-content: space-between;
    }
    .header .price .sign span{
        display: inline-block;
        border: .02rem solid rgb(161, 151, 151);
        border-radius: .28rem;
        font-size: .26rem;
        padding: .03rem .15rem;
        margin-left: .05rem;
    }
    .header .price p:last-child{
        color: #D01D06;
        font-size: .32rem;
    }
    .header ul.dates{
        display: flex;
        justify-content: flex-start;
        margin: .3rem 0;
    }
    .header .dates li{
        margin-left: .1rem;
    }
    .header .dates li label{
        display: inline-block;
        width: 2.12rem;
        height: 1.32rem;
        text-align: center;
        line-height: 1.32rem;
        border: .02rem solid #EEEEEE;
        font-size: .26rem;
        border-radius: .08rem;
    }
    .header .dates li  input[type="radio"]{
        display: none;
    }
    .header .dates li  input[type="radio"]:checked+label{
        color: #FFAE4E;
        border: .02rem solid #FFAE4E;
    }
    .header .personCount{
        display: flex;
        justify-content: space-between;
    }
    .header .personCount p:first-child{
        color: #B8AFA6;
        font-size: .26rem;
    }
    .header .personCount p:last-child{
        color: #2F2B27;
        font-size: .26rem;
    }
    .header .reduce{
        margin: .3rem 0;
    }
    .header .reduce div{
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;
    }
    .header .reduce div p:first-child{
        color: #2F2B27;
        font-size: .32rem;
    }
    .header .reduce div p:last-child label{
        display: inline-block;
        width: .38rem;
        height: .38rem;
        border-radius: 50%;
        border: .02rem solid gray;
    }
    .header .reduce div p:last-child input[type="checkbox"]{
        display: none;
    }
    .header .reduce div p:last-child input[type="checkbox"]:checked+label{
        border: .02rem solid #FFAE4E;
    }
    .header .reduce .filters{
        font-size: .32rem;
        color:#93887F;
        text-indent: .4rem;
    }
    .detailBegin{
        height: .9rem;
        line-height: .9rem;
        color: #FFAE4E;
        text-align: center;
        border-bottom: .02rem solid rgba(0,0,0,0.10);
    }
    .joinGame{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #F9C84E;
        color: #fff;
        position: fixed;
        bottom: 0;
        text-align: center;
    }
</style>
<style lang="css" src="assets/css/firstDetail.css" scoped></style>
<style lang="css" src="assets/css/secondDetai.css" scoped></style>
<style lang="css" src="assets/css/thirdDetail.css" scoped></style>
<style lang="css" src="assets/css/fourDetail.css" scoped></style>
<style lang="css" src="assets/css/fiveDetail.css" scoped></style>
<template>
   <div>
       <div class="header detail">
            <div class="">
                <p class="img">
                    <img :src="views.path">
                </p>
                <p class="titleT">{{views.activity_name}}</p>
                <div class="price">
                    <p class="sign">
                        <span v-for="i in views.label.split(',')">{{i}}</span>
                    </p>
                    <p>￥{{views.price}}</p>
                </div>
            </div>
            <ul class="dates">
                <li v-for="(i,index) in views.mtschedule">
                    <input :id="'d'+index" type="radio" name="date">
                    <label :for="'d'+index">{{i.starttime | dateTime}}</label>
                </li>
            </ul>
            <div class="personCount">
                <p>请提前{{views.Tq_Enroll_Day}}天报名</p>    
                <p>已报名700人</p>    
            </div>
            <div class="reduce" v-if="views.volunteer==='1'">
                <div>
                    <p>我要当义工</p>
                    <p>
                        <input id="work" type="checkbox" name="work">
                        <label for="work"></label>
                    </p>
                </div>
                <p class="filters">1.级别要求</p>
                <p class="filters">2.志愿者要求</p>
            </div>
       </div>
       <p class="detailBegin">活动详情</p>
        <div class="detail" :class="{'first':model_type==='1','second':model_type==='2','third':model_type==='3','four':model_type==='4','five':model_type==='5'}">
            <div v-html="notice1" class="oneContent">
            </div>
            <!-- <div class="banner">
                <img :src="require('assets/image/pic.jpg')">
            </div>
            <p class="title">遂昌番薯饼、黄米果年糕制作</p>
            <p class="content">当爸爸妈妈、爷爷奶奶吃着我们亲手制作的香香糯糯新春点心，萌娃有颗感恩的心，今年春节的餐桌一定特别的欢欢喜喜，热热闹闹，红红火火。</p>
            <div class="header">
                <div class="flexImg">
                    <p class="normal blockTitle">
                        孔庙<span class="circle"></span><span></span>仁孝之调
                    </p>
                    <p class="imgs">
                        <img :src="require('assets/image/pic.jpg')">
                    </p>
                </div>
                <p class="content">小小学童要学习新知，更要懂得感恩知孝~~爱好学习接近智慧，努力行善接近仁德。</p>
            </div>
            <div>
                <div class="flexImg">
                    <p class="imgs">
                            <img :src="require('assets/image/pic.jpg')">
                    </p>
                    <p class="spicial blockTitle"> 锦囊妙计 </p>
                </div>
                <p class="content">爸爸妈妈总想将我们最好的呵护起来，开营仪式上，妈妈给的小锦囊，用在“江湖危难”之时。小小学童可知“锦囊妙计”的典故源自何处？</p>
            </div> -->
            <div>
                <p class="bgTitle" v-if="model_type === '1' || model_type === '2'|| model_type === '4'">
                    <span class="haveBG">日程安排</span>
                    <span class="titleColor">【{{Object.keys(notice2).length/3}}天{{Object.keys(notice2).length/3-1}}晚】</span>
                </p>
                <p class="bgTitle" v-if="model_type === '3'">
                    <img :src="require('assets/image/template3-flag.png')" class="bgImg">
                    <span class="haveBG">日程安排</span>
                    <span class="titleColor">【{{Object.keys(notice2).length/3}}天{{Object.keys(notice2).length/3-1}}晚】</span>
                </p>
                <!-- 方案一行程安排 -->
                <div class="dayTravel" v-if="model_type==='1'">

                    <table>
                        <tr class="titleColor">
                            <td>Day1</td>
                            <td>带上锦囊去淘金</td>
                        </tr>
                        <tr>
                            <td>上午</td>
                            <td>带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金</td>
                        </tr>
                        <tr>
                            <td>下午</td>
                            <td>带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金</td>
                        </tr>
                        <tr class="titleColor">
                            <td>Day2</td>
                            <td>步步研学步步挑战的日子</td>
                        </tr>
                        <tr>
                            <td>上午</td>
                            <td>带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金</td>
                        </tr>
                        <tr>
                            <td>下午</td>
                            <td>带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金</td>
                        </tr>
                        <tr>
                            <td>晚上</td>
                            <td>带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金带上锦囊去淘金</td>
                        </tr>
                    </table>
                </div>
                <!-- 方案二行程安排 -->
                <div class="dayTravel" v-if="model_type==='2'">
                        <div class="days" v-for="i in 2" :key="i.id">
                            <ul>
                                <li class="content"><span></span>杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。</li>
                                <li class="content"><span></span>杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。</li>
                                <li class="content"><span></span>杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。</li>
                                <li class="content"><span></span>杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。</li>
                                <li class="content"><span></span>杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。</li>
                                <li class="content"><span></span>杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。</li>
                            </ul>
                            <p>{{i}}</p>
                        </div>
                    </div>
                </div>
                <!-- 方案三行程安排 -->
                <div class="dayTravel" v-if="model_type==='3'">
                    <div v-for="i in 3" :key="i.id">
                        <p class="title">Day{{i}} 带上锦囊去淘金</p>
                        <div class="inner">
                            <img :src="require('assets/image/pic.jpg')">
                            <p class="travelText">杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。</p>
                        </div>
                    </div>
                </div>
                <!-- 方案四行程安排 -->
                <div class="dayTravel" v-if="model_type==='4'">
                    <div v-for="i in 3" :key="i.id">
                        <div class="number">
                            <p class="title">Day{{i}}</p>
                        </div>
                        <div class="inner">
                            <img :src="require('assets/image/pic.jpg')">
                            <p class="travelText">杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。杭州孔庙集合，“赚取人生的第一桶金”开营。</p>
                        </div>
                    </div>
                </div>
            <div>
                <p class="bgTitle" v-if="model_type === '1' || model_type === '2'|| model_type === '4'">
                    <span class="haveBG">报名须知</span>
                </p>
                <p class="bgTitle" v-if="model_type === '3'">
                    <img :src="require('assets/image/template3-flag.png')" class="bgImg">
                    <span class="haveBG">报名须知</span>
                </p>
                <div v-if="model_type!=='4'">
                    <p class="titleColor">活动费用：2188/人</p>
                    <p class="priceReduce">优惠活动2选1：</p>
                    <table>
                        <tr>
                            <td>活动一：</td>
                            <td>朋友圈集齐88个赞，即减50元。</td>
                        </tr>
                        <tr>
                            <td>活动二：</td>
                            <td>
                                <p>朋友圈集齐88个赞，即减50元。</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>朋友圈集齐88个赞，即减50元。</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>朋友圈集齐88个赞，即减50元。</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="join" v-if="model_type==='4'">
                    <div class="joinIntro" v-for="i in 5">
                        <p class="tit"><span>活动费用</span><span></span></p>
                        <p>2188元/人</p>
                    </div>
                </div>
                <template v-if="model_type!=='4'">
                    <table>
                            <tr>
                                <td class="tableTitle">费用包含：</td>
                                <td>行程内景区门票、各活动项目课时费材料费、行程内的住宿费、餐费和交通费、保险费、随队老师的工作补贴、营服、公共物资、学习资料。</td>
                            </tr>
                            <tr>
                                <td class="tableTitle">费用不含：</td>
                                <td>其他个人消费</td>
                            </tr>
                        </table>
                        <p class="titleColor">适宜年龄：08-15周岁</p>
                        <table>
                                <tr>
                                    <td>活动时长：</td>
                                    <td>3天2晚</td>
                                </tr>
                                <tr>
                                    <td>营期人数：</td>
                                    <td>第1期2018年2月01日-2月03日</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>第2期2018年2月04日-2月06日满35人，开营。</td>
                                </tr>
                        </table>
                </template>
            </div>
            <div class="service">
                <p class="bgTitle" v-if="model_type === '1' || model_type === '2' || model_type === '4'">
                    <span class="haveBG">服务保障</span>
                </p>
                <p class="bgTitle" v-if="model_type === '3'">
                    <img :src="require('assets/image/template3-flag.png')" class="bgImg">
                    <span class="haveBG">服务保障</span>
                </p>
                <div v-for="i in notice4" :key="i.id">
                    <p class="blockTitle">{{i[0]}}：</p>
                    <p class="content">{{i[1]}}</p>
                </div>
            </div>
            <p class="footer"><span></span>主办方：{{sponsor}}</p>
        </div>
        <router-link to="/createOrder" tag="p" class="joinGame">立即报名</router-link>
   </div>

</template>
<script>
    export default{
        data(){
            return{
                notice1:'',
                notice2:'',
                notice3:'',
                notice4:'',
                model_type:'2',
                sponsor:'',
                views:''
            }
        },
        created(){
            this.getDetail();
        },
        methods:{
            getDetail(){
				this.$http.post('/PcApi',{name:'pc.ActivityView',activity_id:this.$route.query.id},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
						this.notice1 = res.body.data.ActivityView.notice1;
						this.notice2 = JSON.parse(res.body.data.ActivityView.notice2);
						this.notice3 = JSON.parse(res.body.data.ActivityView.notice3);
						this.notice4 = JSON.parse(res.body.data.ActivityView.notice4);
						// this.model_type = res.body.data.ActivityView.model_type;
                        this.sponsor = res.body.data.ActivityView.Sponsor;
                        this.views = res.body.data.ActivityView;
					}
				}).catch((error)=>{
					console.log(error);
				})
            }
        }
    }
</script>