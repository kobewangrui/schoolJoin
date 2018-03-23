<style lang="css">
    .detailWRL .firstContent img{
        max-width: 7rem;
        max-height: 4.2rem;
    }
    .detailWRL .dayTravels img{
        max-width: 5rem;
        max-height: 3rem;
        border-radius: .08rem;
    }
    .detailWRL table{
        max-width: 7.3rem;
        font-size: .2rem;
    }
</style>
<style lang="css" scoped>
    .detail{
        padding: .3rem .2rem;
        box-sizing: border-box;
        background: #fff;
    }
    .header .img img{
        width:7.5rem;;
        height: 4rem;
    }
    .header .headerMsg{
        padding: .3rem .3rem;
        box-sizing: border-box;
        background: #fff;
    }
    .header .headerMsg .titleT{
        font-size: .34rem;
        color: #000;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;
        margin-bottom: .2rem;
    }
    .header .price{
        display: flex;
        justify-content: space-between;
    }
    .header .price .sign span{
        display: inline-block;
        border: .02rem solid #cfcfcf;
        border-radius: .28rem;
        font-size: .24rem;
        padding: .03rem .15rem;
        margin-left: .2rem;
        color: rgb(186,171,111);
        box-sizing: border-box;
    }
    .header .price p:last-child{
        color: #D01D06;
        font-size: .32rem;
    }
    .header .dates{
        margin: .3rem 0;
        background: #fff;
        padding: .3rem;
        box-sizing: border-box;
    }
    .header .titleT{
        margin-bottom:.2rem;
    }
    .header .dates ul{
        display: flex;
        justify-content: flex-start;
        margin-bottom: .2rem;
    }
    .header .dates ul li{
        margin-left: .1rem;
    }
    .header .dates ul li label{
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
    .header .volunteer{
        margin: .3rem 0;
        background: #fff;
        padding: .3rem;
    }
    .header .volunteer .volunteerJoin{
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;
    }
    .header .volunteer .volunteerJoin p:first-child{
        color: #2F2B27;
        font-size: .32rem;
    }
    .header .volunteer .volunteerJoin p:last-child label{
        display: inline-block;
        width: .38rem;
        height: .38rem;
        border-radius: 50%;
        border: .02rem solid gray;
    }
    .header .volunteer .volunteerSign{
        color: #D01D06;
    }
    .header .volunteer .indentSpace{
        padding-left: .15rem;
    }
    .header .volunteer div p:last-child input[type="checkbox"]{
        display: none;
    }
    .header .volunteer div p:last-child input[type="checkbox"]:checked+label{
        border: .02rem solid #FFAE4E;
    }
    .header .volunteer .filters{
        font-size: .32rem;
        color:#93887F;
        text-indent: .4rem;
        margin-bottom: .1rem;
    }
    .header .volunteer .filters .levelImg{
        width: .4rem;
        height: .4rem;
    }
    .header .volunteer .filters .volunteerSign,
    .header .volunteer .filters .levelImg{
        vertical-align: middle;
    }    
    .volunteer .filters .showVolunteer{
        color: #F9C84E;
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
    .cover{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .pops{
        font-size: .32rem;
        width: 5rem;
        height: 8rem;
        background: #fff;
        border-radius: .08rem;
        position: absolute;
        z-index: 2;
        margin: 0 auto;
        top: 35%;
        left: 55%;
        margin-left: -2.95rem;
        margin-top: -2.85rem;
        text-align: center;
        padding: .3rem;
        box-sizing: border-box;
        transition: all .2s;
        transform: scale(0,0);
        overflow-y: scroll;
    }
    .pops p:first-child{
        font-size: .36rem;
        margin-bottom: .3rem;
    }
    .pops p.basicContent{
        font-size: .36rem;
        margin-bottom: .3rem;
        font-size: .3rem;
        text-align: left;
        text-indent: .6rem;
    }
    .popShow{
        transform: scale(1,1);
    }
    .closePop{
        position: absolute;
        right: .1rem;
        top: .1rem;
    }
</style>
<style lang="css" src="assets/css/firstDetail.css" scoped></style>
<style lang="css" src="assets/css/secondDetai.css" scoped></style>
<style lang="css" src="assets/css/thirdDetail.css" scoped></style>
<style lang="css" src="assets/css/fourDetail.css" scoped></style>
<style lang="css" src="assets/css/fiveDetail.css" scoped></style>
<template>
    <div>
        <div class="header">
                <p class="img">
                    <img :src="views.path">
                </p>
                <div class="headerMsg">
                    <p class="titleT">活动主题：{{views.activity_name}}</p>
                    <div class="price">
                        <p class="sign">
                            <span v-for="i in views.label.split(',')" v-if="views.label!==''">{{i}}</span>
                        </p>
                        <p>￥{{views.price}}</p>
                    </div>
                </div>
                <div class="dates">
                    <p class="titleT">活动档期</p>
                    <ul>
                        <li v-for="(i,index) in views.mtschedule">{{isVolunteer}}
                            <input :id="'d'+index" v-model="timeGame" :value="i.starttime" type="radio" name="date">
                            <label :for="'d'+index">{{i.starttime | dateTime}}</label>
                        </li>
                    </ul>
                    <div class="personCount">
                        <p>请提前{{views.Tq_Enroll_Day}}天报名</p>
                        <!-- <p>已报名700人</p> -->
                    </div>
                </div>
            <div class="volunteer" v-if="views.volunteer==='1'">
                <div class="volunteerJoin">
                    <p>我要当义工</p>
                    <p>
                        <input id="work" type="checkbox" name="work" v-model="is_volunteer" value="1">
                        <label for="work"></label>
                    </p>
                </div>
                <p class="filters">
                    <span class="volunteerSign">*</span>1.级别要求
                    <span v-if="views.basicYQ==='1'">（一级）</span>
                    <span v-if="views.basicYQ==='2'">（二级）</span>
                    <span v-if="views.basicYQ==='3'">（三级）</span>
                    <span v-if="views.basicYQ==='4'">（四级）</span>
                    <span v-if="views.basicYQ==='5'">（五级）</span>
                    <img class="levelImg" v-if="views.basicYQ==='1'" :src="require('assets/image/stair.png')">
                    <img class="levelImg" v-if="views.basicYQ==='2'" :src="require('assets/image/second-level.png')">
                    <img class="levelImg" v-if="views.basicYQ==='3'" :src="require('assets/image/three-level.png')">
                    <img class="levelImg" v-if="views.basicYQ==='4'" :src="require('assets/image/level-Four.png')">
                    <img class="levelImg" v-if="views.basicYQ==='5'" :src="require('assets/image/five-levels.png')">
                </p>
                <p class="filters indentSpace" >2.志愿者要求    
                    <span @click="showVolunteer" class="showVolunteer">（点击查看）</span>
                </p>
                <div class="pops" :class="{'popShow':popToggle}">
                    <p>志愿者要求<span class="closePop" @click="popToggle=false">×</span></p>
                    <p class="basicContent">{{views.basicBC_YQ}}</p>
                </div>
                <div class="cover" v-if="popToggle" @click="popToggle=false"></div>
            </div>
        </div>
        <div class="detail detailWRL" :class="{'first':model_type==='1','second':model_type==='2','third':model_type==='3','four':model_type==='4','five':model_type==='5'}">
            <div v-html="notice1" class="firstContent"></div>
            <!-- 日程安排 -->
            <div class="dayTravel">
                <p class="bgTitle">
                    <span class="haveBG">日程安排</span>
                    <span class="titleColor" v-if="notice2!==null">【{{Math.ceil(notice2.length)}}天{{Math.ceil(notice2.length-1)}}晚】</span>
                </p>
                <div class="dayTravels" v-if="notice2!==null">
                    <table>
                        <div v-for="(i,index) in notice2" :key="i.id">
                            <tr class="titleColor">
                                <td>Day{{index+1}}</td>
                                <td>{{i.day}}</td>
                            </tr>
                            <tr v-if="i.morning!==undefined">
                                <td>上午</td>
                                <td>
                                    <p>{{i.morning}}</p>
                                    <img :src="i.image">
                                </td>
                            </tr>
                            <tr v-if="i.noon!==undefined">
                                <td>中午</td>
                                <td>
                                    <p>{{i.noon}}</p>
                                </td>
                            </tr>
                            <tr v-if="i.night!==undefined">
                                <td>晚上</td>
                                <td>
                                    <p>{{i.night}}</p>
                                </td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
            <!-- 报名须知 -->
            <div>
                <p class="bgTitle">
                    <span class="haveBG">报名须知</span>
                </p>
                <div>
                    <table>
                        <tr v-for="i in notice3" v-if="notice3!==null">
                            <td>{{i[0]}}</td>
                            <td>{{i[1]}}</td>
                        </tr>
                    </table>
                </div>
                <template>
                    <div v-for="i in notice3" :key="i.id" v-if="notice3!==null">
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
            <!-- 服务保障 -->
            <div class="service">
                <p class="bgTitle">
                    <span class="haveBG">服务保障</span>
                </p>
                <div v-for="i in notice4" :key="i.id" v-if="notice4!==null">
                    <p class="blockTitle">{{i[0]}}：</p>
                    <p class="content">{{i[1]}}</p>
                </div>
            </div>
            <p class="footer"><span></span>主办方：{{sponsor}}</p>
        </div>
        <p :class="{'JoinGameActive':timeGame!==0}" class="joinGame" @click="goOrder" v-if="is_volunteer[0]!=='1'">立即报名</p>
        <p :class="{'JoinGameActive':timeGame!==0}" class="joinGame" @click="goOrder" v-if="is_volunteer[0]==='1'">义工报名</p>
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
                model_type:'1',
                sponsor:'',
                views:'',
                timeGame:"",
                popToggle:false,
                is_volunteer:[]
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
						this.model_type = res.body.data.ActivityView.model_type;
                        this.sponsor = res.body.data.ActivityView.Sponsor;
                        this.views = res.body.data.ActivityView;
					}
				}).catch((error)=>{
					console.log(error);
				})
            },
            showVolunteer(){
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                this.popToggle=true;
            },
            goOrder(){
                if(this.timeGame!==0){
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
                    localStorage.basic_price = this.views.basic_price;
                    localStorage.is_volunteer = this.is_volunteer[0];
                    this.$router.push('/createOrder')
                }
            }
        }
    }
</script>