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
        margin-left: .9rem;
    }
    .list .more img,
    .list .more .right{
        vertical-align: middle;
    }
    .change .list textarea{
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
        font-size: .34rem;
    }
    .saveBtn .active{
        background: #F9C84E;
    }
    .ipt{
        background: #f7f7f7;
        font-size: .34rem;
    }
    .nameIpt{
        margin-right: 1.25rem;
        min-width: 3.9rem;
    }
</style>
<style lang="css">
    .change .yd-btn-block{
        background: #f7f7f7;
        color: #333;
        margin-top: 0;
        height: auto;
    }
    .change .yd-cell-right .yd-datetime-input{
        padding: .3rem 0;
        color: #333;
        font-size: .34rem;
        margin-left: 1rem;
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
        padding-left: .36rem;
        color: #333!important；
    }
    .change .yd-cell-icon{
        display: none;
    }
    .change .yd-cell:after{
        width:0;
    }
    .change .yd-cell-left{
        font-size: .34rem;
    }
    .change .yd-cell-arrow:after {
        margin: 0;
        content: "";
    }
    .change .yd-btn-warning span:nth-child(2){
        margin-right: 3.9rem
    }
</style>
<template>
    <div class="change">
        <div class="list">
            <span>头像</span>
            <div class="more">
                <img :src="userMsg.image">
                <span class="right"> > </span>
            </div>
        </div>
        <div class="list">
            <label for="name">姓名</label>
            <input id="name" type="text" v-model="real_name" class="ipt nameIpt">
        </div>        
        <div class="list">
            <label for="iccard">身份证</label>
            <input id="iccard" type="text" v-model="idcard" class="ipt nameIpt" placeholder="请填写身份证号">
        </div>
        <yd-button @click.native="show1 = true" size="large" type="warning" class="list">性别
            <div>
                <yd-actionsheet :items="myItems2" v-model="show1"></yd-actionsheet>
            </div>
            <span>{{gender | sexFilter}}</span>
            <span class="right"> > </span>
        </yd-button>
        <yd-cell-group class="spicialList">
            <yd-cell-item arrow>
                <span slot="left">生日</span>
                <yd-datetime start-date="1900-01-01" end-date="2099-01-01" v-model="dateTime" type="date" slot="right">
                </yd-datetime>
            </yd-cell-item>
        </yd-cell-group>
        <div class="list">
            <label for="school">学校</label>
            <input id="school" type="text" v-model="school" class="ipt">
            <span class="right"> > </span>
        </div>
        <div class="list">
            <span>手机 <span class="PhoneText">{{userMsg.mobile}}</span></span>
            <router-link to="/changePhone" tag="span" class="rightChange"> 修改 </router-link>
        </div>
        <div class="list">
            <span>城市</span>
            <yd-cell-group>
                <yd-cell-item>
                    <input slot="right" type="text" @click.stop="show2 = true" v-model="model2" readonly placeholder="请选择地址">
                </yd-cell-item>
                </yd-cell-group>
            <yd-cityselect v-model="show2" ref="cityselectDemo" :callback="result2" :items="district"></yd-cityselect>
            <span class="right"> > </span>
        </div>
        <div class="list">
            <textarea placeholder="详细地址" v-model="address"></textarea>
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
                            this.gender = '1'
                        }
                    },
                    {
                        label: '女',
                        callback: () => {
                            this.gender = '2'
                        }
                    }
                ],
                dateTime: '',
                show2: false,
                model2: '',
                district: District,
                real_name: '',
                gender: '',
                school: '',
                address: '',
                idcard:'',
                userMsg:'',
            }
        },
        created(){
            this.getUserMsg();
        },
        vuerify:{
            real_name:['required'],
            gender:['required'],
            school:['required'],
            model2:['required'],
            dateTime:['required'],
            idcard:['required','cardNumber'],
        },
        filters:{
            sexFilter:function(value){
                if (value === '1'){
                    return '男';
                }else if(value === '2'){
                    return '女';
                }else if(value === '男'){
                    return '男';
                }else if(value === '女'){
                    return '女';
                }else{
                    return '未知';
                }
            }
        },
        methods:{
            fomartDate(timestamp){
                let date = new Date(parseInt(timestamp)*1000);
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                let D = date.getDate()+1 < 10 ? '0'+ date.getDate() : date.getDate();
                return Y+M+D;
            },
            editMsg(){
                if(this.$vuerify.check()){
                    let ds = new Date(this.dateTime);
                    let dt = ds.getTime()/1000;
                    this.$http.post('/PcApi',{name:'pc.Login.editInfo',idcard:this.idcard,real_name:this.real_name,gender:this.gender,birthday:dt,school:this.school,city:this.model2,address:this.address},{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            this.getUserMsg();
                            this.$router.push("/mine");
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            },
            result2(ret){
                this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3; 
            },
            getUserMsg(){
                this.$http.post('/PcApi',{name:'pc.Login.getInfoById',id:this.$store.state.user.id},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.userMsg = res.body.data;
                        this.model2 = res.body.data.city;
                        this.real_name = res.body.data.name
                        this.school = res.body.data.school;
                        this.address = res.body.data.address;
                        this.gender = res.body.data.gender;
                        this.idcard = res.body.data.idcard;
                        this.dateTime= this.fomartDate(res.body.data.birthday);
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>