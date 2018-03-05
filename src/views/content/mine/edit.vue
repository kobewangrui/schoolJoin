<style scoped lang="css">
    .change{
        padding: 0 .3rem;
        box-sizing: border-box;
    }
    .list{
        display: flex;
        justify-content: space-between;
        font-size: .34rem;
        align-items: center;
        border-bottom: 1px solid #dcdcdc;
        padding: .3rem 0;
        box-sizing: border-box;
    }
    .spicialList{
        display: flex;
        justify-content: space-between;
        font-size: .34rem;
        align-items: center;
        border-bottom: 1px solid #dcdcdc;
        box-sizing: border-box;
    }
    .list .more img{
        width: 1.2rem;
        height: 1.2rem;
        border-radius: .08rem;
        margin-right: .1rem;
    }
    .list span.right{
        display: inline-block;
        color: #757575;
        transform: scale(.8,1.8);
    }
    .rightChange{
        color: #FFAE4E;
    }
    .PhoneText{
        margin-left: .4rem;
        color: #93887F;
    }
    .list .more img,
    .list .more .right{
        vertical-align: middle;
    }
    .list textarea{
        width: 100%;
        height: 2rem;
        font-size: .34rem;
        resize: none;
        background: #f7f7f7;
    }
    .saveBtn{
        margin: .3rem 0 1.5rem;
        text-align: center;
    }
    .saveBtn .save{
        width: 3.9rem;
        height: .86rem;
        color: #fff;
        border-radius: .42rem;
        background: #d8d8d8;
    }
    .saveBtn .active{
        background: #F9C84E;
    }
    .ipt{
        background: #f7f7f7;
        font-size: .34rem;
    }
</style>
<style lang="css">
    .change .yd-btn-block{
        background: #f7f7f7;
        color: #333;
        margin-top: 0;
        height: auto;
    }
    .change .yd-datetime-input{
        padding: .3rem 0;
    }
    .change .yd-cell{
        position: inherit;
    }
    .change .yd-cell-box{
        margin-bottom: 0;
    }
    .change .yd-cell-item{
        background: #f7f7f7;
        padding: 0;
        height: 1.2rem;
    }
    .change .yd-cell-right{
        min-height: .4rem;
    }
    .change .yd-cell-right input[type="text"]{
        height: .4rem;
        max-height: .4rem;
    }
    .change .yd-cell-icon{
        display: none;
    }
    .change .yd-cell-left{
        font-size: .34rem;
    }
    .change .yd-cell-item .yd-datetime-input{
        font-size: .34rem;
        color: #93887F;
        margin-left: .5rem;
    }
    .change .yd-cell-arrow:after {
        margin: 0;
        content: "";
    }
</style>
<template>
    <div class="change">
        <div class="list">
            <span>头像</span>
            <div class="more">
                <img :src="require('assets/image/pic.jpg')">
                <span class="right"> > </span>
            </div>
        </div>
        <div class="list">
            <label for="name">姓名</label>
            <input id="name" type="text" v-model="real_name" class="ipt">
        </div>
        <yd-button @click.native="show1 = true" size="large" type="warning" class="list">性别
            <div>
                <yd-actionsheet :items="myItems2" v-model="show1"></yd-actionsheet>
            </div>
            <span>{{this.gender}}</span>
            <span class="right"> > </span>
        </yd-button>
        <yd-cell-group class="spicialList">
            <yd-cell-item arrow>
                <span slot="left">生日</span>
                <yd-datetime v-model="dateTime" :yearFormat="yearFormat" :month-format="monthFormat" :day-format="dayFormat" type="date" slot="right">
                </yd-datetime>
            </yd-cell-item>
        </yd-cell-group>
        <div class="list">
            <label for="school">学校</label>
            <input id="school" type="text" v-model="school" class="ipt">
            <span class="right"> > </span>
        </div>
        <div class="list">
            <span>手机 <span class="PhoneText">17749268844</span></span>
            <router-link to="/changePhone" tag="span" class="rightChange"> 修改 </router-link>
        </div>
        <div class="list">
            <span>城市</span>
            <yd-cell-group>
                <yd-cell-item>
                    <input slot="right" type="text" @click.stop="show2 = true" v-model="model2" readonly placeholder="请选择地址">
                </yd-cell-item>
                </yd-cell-group>
            <yd-cityselect v-model="show2" ref="cityselectDemo" :callback="result2" provance="浙江" city="杭州市" area="滨江区" :items="district"></yd-cityselect>
            <span class="right"> > </span>
        </div>
        <div class="list">
            <textarea placeholder="详细地址"></textarea>
        </div>
        <div class="saveBtn">
            <button class="save" @click="editMsg" :class="{'active':$vuerify.check()}">保存</button>
        </div>
    </div>
</template>
<script>
    import District from 'ydui-district/dist/jd_province_city_area_id';
    export default {
        data() {
            return {
                show1: false,
                myItems2: [
                    {
                        label: '男',
                        callback: () => {
                            this.gender = '男'
                        }
                    },
                    {
                        label: '女',
                        callback: () => {
                            this.gender = '女'
                        }
                    }
                ],
                dateTime: this.defaultDate('end'),
                yearFormat: "{value}",
                monthFormat: "{value}",
                dayFormat: "{value}",
                show2: false,
                model2: '浙江 杭州市 滨江区',
                district: District,
                real_name:'',
                gender:'',
                school:'',
                address:'',
            }
        },
        created(){
            this.defaultDate('end');
        },
        vuerify:{
            real_name:['required'],
            gender:['required'],
            school:['required'],
            model2:['required'],
            dateTime:['required'],
        },
        methods:{
            editMsg(){
                if(this.$vuerify.check()){
                    let d = new Date(this.dateTime);
                    let dt = d.getTime();
                    this.$http.post('/api',{name:'pc.Login.editInfo',real_name:this.real_name,gender:this.gender,birthday:dt,school:this.school,city:this.model2,address:this.address},{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            this.lists = res.body.data.Activitylist;
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            },
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
            },
            result2(ret){
                this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3; 
            }
        }
    }
</script>