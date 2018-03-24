<style lang="css" scoped src="assets/css/detail.css"></style>
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
                            <input :id="'d'+index" v-model="timeGame" :value="i.files_id" type="radio" name="date">
                            <label :for="'d'+index">
                                <p>起：{{i.starttime | dateTime}}</p>
                                <p>止：{{i.endtime | dateTime}}</p>
                            </label>
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
                <div class="bgTitle" v-if="model_type === '5'">
                    <p class="haveBG">日程安排</p>
                    <p class="titleColor" v-if="notice2!==null">【{{Math.ceil(notice2.length)}}天{{Math.ceil(notice2.length-1)}}晚】</p>
                </div>
            <div class="dayTravel">
                <div v-for="(i,index) in notice2" :key="i.id">
                    <p class="travelTitle">
                        <span>Day{{index+1}}</span>
                        <span>{{i.day}}</span>
                    </p>
                    <ul>
                        <img :src="i.image" v-if="i.image !==undefined">
                        <li v-if="i.morning !==undefined">
                            <span></span>
                            <span>{{i.morning}}</span>
                        </li>                        
                        <li v-if="i.noon !==undefined">
                            <span></span>
                            <span>{{i.noon}}</span>
                        </li>                        
                        <li v-if="i.night !==undefined">
                            <span></span>
                            <span>{{i.night}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 报名须知 -->
            <div>
                <div class="bgTitleFiveOuter">
                    <p class="bgTitleFive">
                        报名须知<span></span>
                    </p> 
                </div>
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
            </div>
            <!-- 服务保障 -->
            <div class="service">
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
                is_volunteer:['0']
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
                        if(this.model_type==='1'){
                            this.$router.push("{path:'/detailOne',query:{id:this.$route.query.id}}");
                        }else if(this.model_type==='2'){
                            this.$router.push("{path:'/detailTwo',query:{id:this.$route.query.id}}");
                        }else if(this.model_type==='3'){
                            this.$router.push("{path:'/detailThree',query:{id:this.$route.query.id}}");
                        }else if(this.model_type==='4'){
                            this.$router.push("{path:'/detailFour',query:{id:this.$route.query.id}}");
                        }if(this.model_type==='5'){
                            this.$router.push("{path:'/detailFive',query:{id:this.$route.query.id}}");
                        }
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