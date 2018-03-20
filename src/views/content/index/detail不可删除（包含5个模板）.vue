<style lang="css" scoped>
    .detail{
        padding: .3rem .2rem;
        box-sizing: border-box;
    }
    .oneContent img{
        width: 7rem!important;
    }
    .header .img img{
        width: 7.5rem;
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
        background: #d8d8d8;
        color: #fff;
        position: fixed;
        bottom: 0;
        text-align: center;
    }
    .JoinGameActive{
        background: #F9C84E;
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
            <div>
                <p class="img">
                    <img :src="views.path">
                </p>
                <p class="titleT">{{views.activity_name}}</p>
                <div class="price">
                    <p class="sign">
                        <span v-for="i in views.label.split(',')" v-if="views.label!==''">{{i}}</span>
                    </p>
                    <p>￥{{views.price}}</p>
                </div>
            </div>
            <ul class="dates">
                <li v-for="(i,index) in views.mtschedule">
                    <input :id="'d'+index" v-model="timeGame" :value="i.starttime" type="radio" name="date">
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
                        <input id="work" type="checkbox" name="work" v-model="is_volunteer" value="1">
                        <label for="work"></label>
                    </p>
                </div>
                <p class="filters">1.级别要求</p>
                <!-- {{views.basicYQ}}  {{views.basicBC_YQ}}  -->
                <p class="filters">2.志愿者要求</p>
            </div>
        </div>
       <!-- <p class="detailBegin">活动详情</p> -->
        <div class="detail" :class="{'first':model_type==='1','second':model_type==='2','third':model_type==='3','four':model_type==='4','five':model_type==='5'}">
            <div v-html="notice1" class="oneContent"></div>
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
                    <span class="titleColor" v-if="notice2!==null">【{{Math.ceil(Object.keys(notice2).length/3)}}天{{Math.ceil(Object.keys(notice2).length/3-1)}}晚】</span>
                </p>
                <p class="bgTitle" v-if="model_type === '3'">
                    <img :src="require('assets/image/template3-flag.png')" class="bgImg">
                    <span class="haveBG">日程安排</span>
                    <span class="titleColor" v-if="notice2!==null">【{{Math.ceil(Object.keys(notice2).length/3)}}天{{Math.ceil(Object.keys(notice2).length/3-1)}}晚】</span>
                </p>
                <div class="bgTitle" v-if="model_type === '5'">
                    <p class="haveBG">日程安排</p>
                    <p class="titleColor" v-if="notice2!==null">【{{Math.ceil(Object.keys(notice2).length/3)}}天{{Math.ceil(Object.keys(notice2).length/3-1)}}晚】</p>
                </div>
                <template v-if="notice2 !== null">
                    <!-- 方案一行程安排 -->
                    <div class="dayTravel" v-if="model_type==='1'">
                        <table>
                            <div v-for="(i,index) in notice2" :key="i.id">
                                <tr class="titleColor" v-if="index%3===0">
                                    <td>Day{{(index/3)+1}}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td v-if="i.length>0">
                                        <img :src="i['0']">
                                        <p>{{i.content}}</p>
                                    </td>
                                </tr>
                            </div>
                        </table>
                    </div>
                    <!-- 方案二行程安排 -->
                    <div class="dayTravel" v-if="model_type==='2'">
                        <div class="days" v-for="(i,index) in notice2" :key="i.id">
                            <ul v-if="i.length>0">
                                <li class="content"><span></span>{{i.content}}<img :src="i[0]"></li>
                            </ul>
                            <p v-if="index%3===0">{{index+1}}</p>
                        </div>
                    </div>
                    <!-- 方案三行程安排 -->
                    <div class="dayTravel" v-if="model_type==='3'">
                        <div v-for="(i,index) in notice2" :key="i.id">
                            <p class="title" v-if="index%3===0">Day{{index+1}} 带上锦囊去淘金</p>
                            <div class="inner" v-if="i.length>0">
                                <img :src="i[0]">
                                <p class="travelText">{{i.content}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- 方案四行程安排 -->
                    <div class="dayTravel" v-if="model_type==='4'">
                        <div v-for="(i,index) in notice2" :key="i.id">
                            <div class="number">
                                <p class="title" v-if="index%3===0">Day{{index+1}}</p>
                            </div>
                            <div class="inner" v-if="i.length>0">
                                <img :src="i[0]">
                                <p class="travelText">{{i.content}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- 方案五行程安排 -->
                    <div class="dayTravel" v-if="model_type==='5'">
                        <div v-for="(i,index) in notice2" :key="i.id">
                            <p class="travelTitle" v-if="index%3===0">
                                <span>Day{{index+1}}</span>
                                <span>带上锦囊ƒ去淘金</span>
                            </p>
                            <ul>
                                <li v-if="i.length>0">
                                    <span></span>
                                    <span><img :src="i[0]">{{i.content}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </div>
            <div>
                <p class="bgTitle" v-if="model_type === '1' || model_type === '2'|| model_type === '4'">
                    <span class="haveBG">报名须知</span>
                </p>
                <p class="bgTitle" v-if="model_type === '3'">
                    <img :src="require('assets/image/template3-flag.png')" class="bgImg">
                    <span class="haveBG">报名须知</span>
                </p>
                <div v-if="model_type === '5'" class="bgTitleFiveOuter">
                    <p class="bgTitleFive">
                        报名须知<span></span>
                    </p> 
                </div>
                <div v-if="model_type!=='4'">
                    <p class="titleColor">活动费用：{{views.price}}/人</p>
                    <table>
                        <tr v-for="i in notice3" v-if="notice3!==null">
                            <td>{{i[0]}}</td>
                            <td>{{i[1]}}</td>
                        </tr>
                    </table>
                </div>
                <div class="join" v-if="model_type==='4'">
                    <p class="titleColor">活动费用：{{views.price}}/人</p>
                    <div class="joinIntro" v-for="i in notice3" v-if="notice3!==null">
                        <p class="tit"><span>{{i[0]}}</span><span></span></p>
                        <template v-if="i.smallTitle!==undefined || i.smallTitle===[]">
                            <p>{{i[1]}}</p>
                            <p>{{i.smallTitle[0]}}: {{i.smallTitle[1]}}</p>
                        </template>
                    </div>
                </div>
                <template v-if="model_type!=='4'">
                    <div v-for="i in notice3" :key="i.id" v-if="notice3!==null">
                        <p class="titleColor">{{i[0]}}：{{i[1]}}</p>
                        <table>
                            <template v-if="i.smallTitle!==undefined || i.smallTitle===[]">
                                <tr>
                                    <td>{{i.smallTitle[0]}}：</td>
                                    <td>{{i.smallTitle[1]}}</td>
                                </tr>
                            </template>
                        </table>
                    </div>
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
                <div v-if="model_type === '5'" class="bgTitleFiveOuter">
                        <p class="bgTitleFive">
                            服务保障<span></span>
                        </p> 
                    </div>
                <div v-for="i in notice4" :key="i.id" v-if="notice4!==null">
                    <p class="blockTitle">{{i[0]}}：</p>
                    <p class="content">{{i[1]}}</p>
                </div>
            </div>
            <p class="footer"><span></span>主办方：{{sponsor}}</p>
        </div>
        <p :class="{'JoinGameActive':joinActive}" class="joinGame" @click="goOrder">立即报名</p>
   </div>
</template>
<script>
    export default{
        data(){
            return{
                notice1:'',
                notice2:[],
                notice3:'',
                notice4:'',
                model_type:'',
                sponsor:'',
                views:'',
                timeGame:'',
                joinActive:true,
                is_volunteer:0,
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
                        let noticesJson = JSON.parse(res.body.data.ActivityView.notice2);
                        let arr = Object.keys(noticesJson);
                        for(let i=0; i<arr.length; i++){
                            let key = arr[i];
                            this.notice2.push(noticesJson[key]);
                        }
						this.notice3 = JSON.parse(res.body.data.ActivityView.notice3);
						this.notice4 = JSON.parse(res.body.data.ActivityView.notice4);
						this.model_type = res.body.data.ActivityView.model_type;
                        this.sponsor = res.body.data.ActivityView.Sponsor;
                        this.views = res.body.data.ActivityView;

					}
				}).catch((error)=>{
					console.log(error);
				})
            },
            goOrder(){
                if(this.joinActive){
                    localStorage.setItem('title',this.views.activity_name);
                    localStorage.address = this.views.activity_address;
                    localStorage.contacts = this.views.contacts===undefined?'':this.views.contacts;
                    localStorage.tel = this.views.tel===undefined?'':this.views.contacts;
                    localStorage.children_price = this.views.children_price;
                    localStorage.parent_price = this.views.parent_price;
                    localStorage.date = this.timeGame;
                    localStorage.path = this.views.path;
                    localStorage.activity_id = this.views.activity_id;
                    localStorage.is_pre_price = this.views.is_pre_price;
                    localStorage.pre_price = this.views.pre_price;
                    localStorage.is_volunteer = this.is_volunteer;
                    this.$router.push('/createOrder')
                }
            }
        }
    }
</script>