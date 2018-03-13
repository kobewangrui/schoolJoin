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
        font-size: .34rem;
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
                <img :src="$store.state.user.image">
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
            <span>手机 <span class="PhoneText">{{$store.state.user.mobile}}</span></span>
            <router-link to="/changePhone" tag="span" class="rightChange"> 修改 </router-link>
        </div>
        <div class="list">
            <span>城市</span>
            <yd-cell-group>
                <yd-cell-item>
                    <input slot="right" type="text" @click.stop="show2 = true" v-model="model2" readonly placeholder="请选择地址">
                </yd-cell-item>
                </yd-cell-group>
            <yd-cityselect v-model="show2" ref="cityselectDemo" :callback="result2" :provance="this.$store.state.user.city" city="杭州市" area="滨江区" :items="district"></yd-cityselect>
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
            }
        },
        created(){
                this.model2 = this.$store.state.user.name;
                this.real_name = this.$store.state.user.name
                this.school = this.$store.state.user.school;
                this.address = this.$store.state.user.address;
                this.gender = this.$store.state.user.gender;
                this.dateTime= this.fomartDate(this.$store.state.user.birthday);
        },
        vuerify:{
            real_name:['required'],
            gender:['required'],
            school:['required'],
            model2:['required'],
            dateTime:['required'],
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

                let date = new Date(parseInt(timestamp));
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                let D = date.getDate()+1 < 10 ? '0'+ date.getDate() : date.getDate();
                return Y+M+D;
            },
            editMsg(){
                if(this.$vuerify.check()){
                    let d = new Date(this.dateTime);
                    let dt = d.getTime();
                    this.$http.post('/PcApi',{name:'pc.Login.editInfo',real_name:this.real_name,gender:this.gender,birthday:dt,school:this.school,city:this.model2,address:this.address},{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            this.$router.push("/mine");
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            },
            result2(ret){
                this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3; 
            }
        }
    }
</script>