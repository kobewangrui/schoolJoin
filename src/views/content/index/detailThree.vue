<style lang="css" scoped src="assets/css/detail.css"></style>
<style lang="css" src="assets/css/thirdDetail.css" scoped></style>
<template>
    <div>
        <div class="header">
                <p class="img">
                    <img :src="views.path">
                </p>
                <div class="headerMsg">
                    <p class="titleT"><span class="orangeColor">活动主题：</span>{{views.activity_name}}</p>
                    <div class="price">
                        <p class="sign">
                            <span v-for="i in views.label.split(',')" v-if="views.label!==''">{{i}}</span>
                        </p>
                        <p>￥{{views.price}}</p>
                    </div>
                </div>
                <div class="dates">
                    <p class="titleT orangeColor">活动档期</p>
                    <ul>
                        <li v-for="(i,index) in views.mtschedule">{{isVolunteer}}
                            <input :id="'d'+index" v-model="timeGame" :value="{'date':i.starttime,'files_id':i.files_id}" type="radio" name="date">
                            <label :for="'d'+index">
                                <p>起：{{i.starttime | dateTime}}</p>
                                <p>止：{{i.endtime | dateTime}}</p>
                            </label>
                        </li>
                    </ul>
                    <div class="personCount">
                        <p v-if="views.Tq_Enroll_Day>0">请提前{{views.Tq_Enroll_Day}}天报名</p>
                        <!-- <p>已报名700人</p> -->
                    </div>
                </div>
            <div class="volunteer" v-if="views.volunteer==='1'">
                <div class="volunteerJoin">
                    <p class="orangeColor">我要当义工</p>
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
                    <p class="basicContent" v-html="views.basicBC_YQ.replace(/\s/g,'').replace(/\|/g,'</br>')"></p>
                </div>
                <div class="cover" v-if="popToggle" @click="popToggle=false"></div>
            </div>
        </div>
        <div class="detail detailWRL" :class="{'first':model_type==='1','second':model_type==='2','third':model_type==='3','four':model_type==='4','five':model_type==='5'}">
            <div v-html="notice1" class="firstContent"></div>
            <!-- 日程安排 -->
            <p class="bgTitle" v-if="model_type === '3'">
                <img :src="require('assets/image/template3-flag.png')" class="bgImg">
                <span class="haveBG">日程安排</span>
                <!-- <span class="titleColor" v-if="notice2!==null">【{{Math.ceil(notice2.length)}}天{{Math.ceil(notice2.length-1)}}晚】</span> -->
                <span class="titleColor" v-if="notice2!==null">【{{views.activity_time}}】</span>
            </p>
            <div class="dayTravel">
                <div class="dayTravels" v-if="notice2!==null">
                    <div v-for="(i,index) in notice2" :key="i.id">
                        <p class="title">Day{{index+1}} {{i.day}}</p>
                        <div class="inner">
                            <img :src="i.image" v-if="i.image !==undefined">
                            <p class="travelText" v-if="i.morning!==undefined">{{i.morning}}</p>
                            <p class="travelText" v-if="i.noon!==undefined">{{i.noon}}</p>
                            <p class="travelText" v-if="i.night!==undefined">{{i.night}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 报名须知 -->
            <div>
                <p class="bgTitle">
                    <img :src="require('assets/image/template3-flag.png')" class="bgImg">
                    <span class="haveBG">报名须知</span>
                </p>
                <div>
                    <table>
                        <tr v-for="i in notice3" v-if="notice3!==null">
                            <td>{{i[0]}}</td>
                            <td v-html="i[1].replace(/\s/g,'').replace(/\|/g,'</br>')"></td>
                        </tr>
                    </table>
                </div>
                <template v-for="i in notice3" v-if="notice3!==null">
                    <template v-if="i.smallTitle!==undefined">
                        <div v-for="(j,idx) in (i.smallTitle.length/2)" :key="i.id">
                            <table>
                                <template v-if="j!==undefined || j===[]">
                                    <tr>
                                        <td>{{i.smallTitle[2*idx]}}：</td>
                                        <td v-html="i.smallTitle[2*idx+1].replace(/\s/g,'').replace(/\|/g,'</br>')"></td>
                                    </tr>
                                </template>
                            </table>
                        </div>
                    </template>
                </template>
            </div>
            <!-- 服务保障 -->
            <div class="service">
                <p class="bgTitle">
                    <img :src="require('assets/image/template3-flag.png')" class="bgImg">
                    <span class="haveBG">服务保障</span>
                </p>
                <div v-for="i in notice4" :key="i.id" v-if="notice4!==null">
                    <p class="blockTitle">{{i[0]}}：</p>
                    <p class="content">{{i[1]}}</p>
                </div>
            </div>
            <p class="footer"><span></span>主办方：{{sponsor}}</p>
        </div>
        <p :class="{'JoinGameActive':timeGame!=='' && (timeGame.date-(views.Tq_Enroll_Day*60*60*24) > nowDate)}" class="joinGame" @click="goOrder" v-if="is_volunteer[0]!=='1'">立即报名</p>
        <p :class="{'JoinGameActive':timeGame!=='' && (timeGame.date-(views.Tq_Enroll_Day*60*60*24) > nowDate) && ($store.state.user.level>=views.basicYQ)}" class="joinGame" @click="goOrder" v-if="is_volunteer[0]==='1'">义工报名</p>
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
                is_volunteer:[],
                nowDate:(new Date().getTime())/1000,
                rule:false                
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
                if(this.is_volunteer[0]==='1'){
                   this.rule =  this.timeGame!=='' && (this.timeGame.date-(this.views.Tq_Enroll_Day*60*60*24) > this.nowDate) && (this.$store.state.user.level>=this.views.basicYQ);
                }else{
                    this.rule = this.timeGame!=='' && (this.timeGame.date-(this.views.Tq_Enroll_Day*60*60*24) > this.nowDate);
                }
                if(this.rule){
                    localStorage.setItem('title',this.views.activity_name);
                    localStorage.address = this.views.activity_address;
                    localStorage.contacts = this.views.contacts===undefined?'':this.views.contacts;
                    localStorage.tel = this.views.tel===undefined?'':this.views.contacts;
                    localStorage.children_price = this.views.children_price;
                    localStorage.parent_price = this.views.parent_price;
                    localStorage.timeGame = JSON.stringify(this.timeGame);
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