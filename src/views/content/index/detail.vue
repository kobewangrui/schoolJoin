<style lang="css" scoped>
    .detail{
        padding: .3rem .2rem;
        box-sizing: border-box;
    }
</style>
<style lang="css" src="assets/css/firstDetail.css" scoped></style>
<style lang="css" src="assets/css/secondDetai.css" scoped></style>
<style lang="css" src="assets/css/thirdDetail.css" scoped></style>
<template>
    <div class="detail second">
        <div class="banner">
            <img :src="require('assets/image/pic.jpg')">
        </div>
        <p class="title">遂昌番薯饼、黄米果年糕制作</p>
        <p class="content">当爸爸妈妈、爷爷奶奶吃着我们亲手制作的香香糯糯新春点心，萌娃有颗感恩的心，今年春节的餐桌一定特别的欢欢喜喜，热热闹闹，红红火火。</p>
        <div>
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
                <p class="spicial">锦囊妙计</p>
            </div>
            <p class="content">爸爸妈妈总想将我们最好的呵护起来，开营仪式上，妈妈给的小锦囊，用在“江湖危难”之时。小小学童可知“锦囊妙计”的典故源自何处？</p>
        </div>
        <div>
            <p class="bgTitle">
                <span class="haveBG">日程安排</span>
                <span class="titleColor">【2天1夜】</span>
            </p>
            <!-- 方案一行程安排 -->
            <div class="dayTravel" v-if="false">
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
                <div class="dayTravel" v-if="true">
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
        <div>
            <p class="bgTitle">
                <span class="haveBG">报名须知</span>
            </p>
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
        </div>
        <div>
            <p class="bgTitle">
                <span class="haveBG">服务保障</span>
            </p>
            <div>
                <p class="blockTitle">住宿保障</p>
                <p class="content">指定住宿指定住宿指定住宿指定住宿指定住宿指定住宿</p>
            </div>
            <div>
                <p class="blockTitle">餐饮保障</p>
                <p class="content">指定住宿指定住宿指定住宿指定住宿指定住宿指定住宿指定住宿</p>
            </div>
            <div>
                <p class="blockTitle">活动配比</p>
                <p class="content">指定住宿指定住宿指定住宿指定住宿指定住宿指定住宿</p>
            </div>
            <div>
                <p class="blockTitle">医疗保障</p>
                <p class="content">指定指定住宿指定住宿指定住宿指定住宿指定住宿指定住宿指定住宿指定住宿指定住宿住宿</p>
            </div>
            <div>
                <p class="blockTitle">保险保障</p>
                <p class="content">指定住指定住宿指定住宿指定住宿指定住宿指定住宿指定住宿宿</p>
            </div>
            <div>
                <p class="blockTitle">住宿保障</p>
                <p class="content">指定指定住宿指定住宿指定住宿指定住宿指定住宿住宿</p>
            </div>
            <div>
                <p class="blockTitle">住宿保障</p>
                <p class="content">指定住指定住宿指定住宿指定住宿指定住宿宿</p>
            </div>
        </div>
        <p class="footer"><span></span>主办方：腰果平台，承办大绳的希冀</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                detail:'',
            }
        },
        created(){
            this.getDetail();
        },
        methods:{
            getDetail(){
				this.$http.post('/api',{name:'pc.ActivityView',activity_id:this.$route.query.id},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
						this.detail = res.body.data;
					}
				}).catch((error)=>{
					console.log(error);
				})
            }
        }
    }
</script>