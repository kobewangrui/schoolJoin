<style lang="css" scoped>
    .img img{
        width: 100%;
        height: 4rem;
    }
    .order{
        padding: .3rem;
        box-sizing: border-box;
    }
        input[type='checkbox']{
        display: none;
    }
    .list{
        background: #fff;
        padding: .3rem;
        margin-bottom: 1.5rem;
    }
    .list div{
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;
    }
    .list div label.check{
        display: inline-block;
        width: .34rem;
        height: .34rem;
        line-height: .34rem;
        color: #fff;
        border-radius: 50%;
        font-size: .3rem;
        text-align: center;
        margin-top: .1rem;
        border: .01rem solid #F9C84E;
    }
    .list div input[type='checkbox']:checked+label{
        background: #F9C84E;
    }
    .list div .name{
        display: inline-block;
        width: 2rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .list div .delete{
        display: inline-block;
        width: .3rem;
        height: .3rem;
        line-height: .3rem;
        border: .01rem solid #93887F;
        border-radius: 50%;
        margin-top: .1rem;
        text-align: center;
        color: #93887F;
        font-size: .3rem;
        background: #fff;
    }
    .person{
        margin: .3rem 0;
    }
    .person label{
        color: #93887F;
        font-size: .32rem;
        margin-right: .2rem;
    }
    .person input{
        font-size: .32rem;
        background: #f7f7f7;
    }
    .priceShow{
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;
    }
    .priceShow .people{
        color: #93887F;
        font-size: .32rem;
    }
    .priceShow .add{
        width: 2.1rem;
        height: .52rem;
        line-height: .52rem;
        background: #F9C84E;
        color: #fff;
        border-radius: .26rem;
        text-align: center;
    }
    .join{
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 1rem;
        line-height: 1rem;
        background: #fff;
        position: fixed;
        bottom: 0;
    }
    .join .price{
        font-size: .3rem;
        color: #2F2B27;
    }
    .join .price span{
        color: #2F2B27;
        font-size: .46rem;
    }
    .join .talk{
        color: #93887F;
        font-size: .26rem;
    }
    .join .pay{
        background: #F9C84E;
        color: #fff;
        width: 2.3rem;
        text-align: center;
    }
    input[type='radio']{
        display: none;
    }
    .outer{
        padding: .2rem .3rem;
        box-sizing: border-box;
    }
    .personDetail>div{
        margin-bottom: .2rem;
    }
    .personDetail>div span:first-child,
    .personDetail>div label{
        color: #93887F;
        font-size: .34rem;
        display: inline-block;
        width: 1.1rem;
    }
    .personDetail>div input{
        width: 4.7rem;
        height: .42rem;
        font-size: .34rem;
        background: #f7f7f7;
    }    
    .personDetail .type label{
        display: inline-block;
        width: 1.1rem;
        height: .64rem;
        line-height: .64rem;
        text-align: center;
        border-radius: .08rem;
        border: .01rem solid #E4DAD1;
        margin-right: .1rem;
    }
    .personDetail .type input[type='radio']:checked+label{
        border: .01rem solid #F9C84E;
        color: #F9C84E;
    }
    .personDetail .name .delete{
        display: inline-block;
        width: .3rem;
        height: .3rem;
        line-height: .3rem;
        background: #93887F;
        border-radius: 50%;
        color: #fff;
        font-size: .26rem;
        text-align: center;
    }
    .personDetail .card{
        color: #93887F;
        font-size: .3rem;
    }    
    ul.bottomTable{
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 0;
        height: 1rem;
        line-height: 1rem;
        font-size: .34rem;
        border-top: .01rem solid #E4DAD1;
    }
    ul.bottomTable li{
        text-align: center;
        width: 50%;
    }
    ul.bottomTable li:last-child{
        background: #d8d8d8;
        color: #fff;
    }
    ul.bottomTable li.active{
        background: #F9C84E;
    }
</style>
<template>
    <div>
        <div v-if="!toggle">
            <div class="outer">
                <div class="personDetail">
                    <div class="type">
                        <span>类别</span>
                        <input type="radio" v-model="type" value="1" name="personType" id="student">
                        <label for="student">学生</label>
                        <input type="radio" v-model="type" value="2" name="personType" id="parent">
                        <label for="parent">家长</label>
                        <input type="radio" v-model="type" value="3" name="personType" id="teacher">
                        <label for="teacher">教师</label>
                        <input type="radio" v-model="type" value ="4" name="personType" id="other">
                        <label for="other">其他</label>
                    </div>
                    <div class="name">
                        <label for="name">姓名</label>
                        <input v-model="name" id="name" type="text">
                        <span class="delete" @click="clearName">×</span>
                    </div>
                    <div>
                        <label for="sex">性别</label>
                        <input id="sex" v-model="sex" type="text">
                    </div>
                    <div>
                        <label for="age">年龄</label>
                        <input id="age" v-model="age" type="text">
                    </div>
                    <div>
                        <label for="school">学校</label>
                        <input id="school" v-model="school" type="text">
                    </div>
                    <div>
                        <label for="grade">年级</label>
                        <input id="grade" v-model="grade" type="text">
                    </div>
                    <div class="card">
                        <label for="card">身份证</label>
                        <input id="card" v-model="card" type="text">
                        <span>(选填)</span>
                    </div>
                </div>
                <ul class="bottomTable">
                    <li @click="cancelAdd">取消</li>
                    <li :class="{'active':$vuerify.check()}" @click="addFamily">保存</li>
                </ul>
            </div>
        </div>
        <div v-if="toggle">
            <p class="img">
                <img :src="path">
            </p>
            <div class="order">
                <div>
                    <p>场次：{{date | dateTime}}</p>
                    <p>地点：{{address}}</p>
                </div>
                <div class="person">
                    <p>
                        <label for="connect">联系人</label>
                        <input id="connect" type="text" v-model="contacts">
                    </p>
                    <p>
                        <label for="phone">手机号</label>
                        <input id="phone" type="text" v-model="tel">
                    </p>
                </div>
                <div class="priceShow">
                    <div class="people">
                        <div>儿童：{{childNumber.length}}/￥{{parent_price}}</div>
                        <div>成人：{{adultNumber.length}}/￥{{children_price}}</div>
                    </div>
                    <p class="add" @click="toggle=false">添加参与人</p>
                </div>
                <div class="list">
                    <div v-for="(i,index) in lists" :key="i.id" v-if="lists.length>0">
                        <input type="checkbox" name="person" :id="'person'+index">
                        <label class="check" :for="'person'+index">✓</label>
                        <span class="name">{{i.real_name}}</span>
                        <span v-if="i.type ==='1'">【学生】</span>
                        <span v-if="i.type ==='2'">【家长】</span>
                        <span v-if="i.type ==='3'">【教师】</span>
                        <span v-if="i.type ==='4'">【其他】</span>
                        <span class="delete" @click="deleteFri(index)">-</span>
                    </div>
                    <p v-if="lists.length<=0">请添加至少一位联系人</p>
                </div>
            </div>
            <div class="join">
                <p class="price">本次支付：<span>￥{{money}}</span></p>
                <p class="talk">余款沟通后缴纳</p>
                <p class="pay" @click="order">立即报名</p>
            </div>
        </div>
        
    </div>
</template>
<script>
    import wx from 'weixin-js-sdk'
    export default{
        data(){
            return{
                title:'',
                address:'',
                contacts:'',
                tel:'',
                children_price:'',
                parent_price:'',
                date:'',
                is_pre_price:'',
                pre_price:'',
                is_volunteer:'',
                toggle:true,
                path:'',
                type:'1',
                name:'',
                sex:'',
                school:'',
                grade:'',
                card:'',
                age:'',
                lists:[],
                dscoin:'',
                money:'',
                childNumber:[],
                adultNumber:[],
                arr:[]
            }
        },
        created(){
            this.title = localStorage.getItem('title');
            this.address = localStorage.getItem('address');
            this.contacts = localStorage.getItem('contacts');
            this.tel = localStorage.getItem('tel');
            this.children_price = localStorage.getItem('children_price');
            this.parent_price = localStorage.getItem('parent_price');
            this.date = localStorage.getItem('date');
            this.path = localStorage.getItem('path');
            this.is_pre_price = localStorage.getItem('is_pre_price');
            this.pre_price = localStorage.getItem('pre_price');
            this.is_volunteer = localStorage.getItem('is_volunteer');
            this.getCoins();
            this.money = (this.parent_price*(this.childNumber.length) + this.children_price*(this.adultNumber.length))-this.dscoin;
            this.pay();
        },        
        vuerify:{
            type:['required'],
            name:['required'],
            sex:['required'],
            school:['required'],
            grade:['required'],
            card:['onlyNumber'],
            age:['required','onlyNumber'],
        },
        methods:{
            addFamily(){
                let gender;
                if(this.sex ==='1'){
                    gender = '男';
                }else if(this.sex === '2'){
                    gender = '女';
                }else{
                    gender = '未知';
                }
                if(this.$vuerify.check()){
                    this.lists.push({
                        real_name : this.name,
                        type : this.type
                    })
                    this.toggle = true;
                    this.name = '';
                    this. sex = '';
                    this.school = '';
                    this.grade = '';
                    this.card = '';
                    this.age = '';
                }
            },
            clearName(){
                this.name = '';
            },
            cancelAdd(){
                this.toggle = true;
                this.name = '';
                this. sex = '';
                this.school = '';
                this.grade = '';
                this.card = '';
                this.age = '';
            },
            deleteFri(index){
                this.lists.splice(index,1);;
            },
            order(){
                let balances;
                if(this.is_pre_price==='1'){
                    balances = this.money - this.pre_price
                }
                let data = {
                    name: 'pc.ActOrder',
                    activity_id: localStorage.getItem('activity_id'),
                    files_id: this.date,
                    contacts: this.contacts,
                    tel: this.tel,
                    is_pre_price: this.is_pre_price,
                    pre_price: this.pre_price,
                    family_id: this.arr.join(','),
                    is_volunteer: this.is_volunteer,
                    ds_coin: this.dscoin,
                    balance: balances,
                    ds_coin:this.dscoin,
                    money:this.money
                }
                if(
                    data.contacts === '' ||
                    data.tel === '' ||
                    data.family_id === '' ||
                    data.money <= 0
                ){
                    alert('请完整填写信息');
                }else{
                    this.$http.post('/PcApi',data,{emulateJSON:true}).then((res)=>{
                        if(res.body.code === 1000){
                            this.payPrice(res.body.data.order_number);
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            },
            pay(){
                this.$http.post('/PcApi',{name:'pc.wxpay.getWxSign',url:location.href},{emulateJSON:true}).then((res)=>{
                    wx.config({
                        debug:true,
                        appId:'wx8387437705240b54',
                        timestamp:res.body.data.timestamp,
                        nonceStr: res.body.data.nonceStr,
                        signature: res.body.data.signature,
                        jsApiList:['chooseWXPay']
                    })
                    this.isJsSDKSet = true;
                }).catch((error)=>{
                    console.log(error);
                })
            },
            wxpay({timestamp,nonceStr,package_wx,signType,paySign}){
                return new Promise((resolve,reject)=>{
                    try{
                    wx.chooseWXPay({
                       timestamp,nonceStr,package:package_wx,signType,paySign,
                       success:()=>resolve(),
                       fail:()=>reject()
                    })
                    }catch(err){
                        console.log(err.stack);
                    }
                })
            },
            payPrice(order){
                this.$http.post('/PcApi',{name:'pc.WXpay.unifiedOrder',order_number:order},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        let datas = res.body.data;
                        this.wxpay({timestamp:datas.timestamp_pay,nonceStr:datas.nonceStr_pay,package:datas.package,paySign:datas.sing_pay});
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            },
            getCoins(){
                this.$http.post('/PcApi',{name:'pc.UserCoin'},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
                        this.dscoin = res.body.data.Coin.coin_pr;
					}
				}).catch((error)=>{
					console.log(error);
				})
            }
        },
        watch:{
            'lists':function(){
                for(let i=0; i<this.lists.length; i++){
                    if(this.lists[i].type === '1'){
                       this.childNumber.push(this.lists[i]);
                    }else{
                        this.adultNumber.push(this.lists[i]);
                    }
                    this.arr.push(this.lists[i].real_name);
                }
            },
            'childNumber':function(){
                if(this.is_pre_price==='1'){
                    this.money = (this.parent_price*(this.childNumber.length) + this.children_price*(this.adultNumber.length))-this.dscoin;
                }else{
                    this.money = (this.parent_price*(this.childNumber.length) + this.children_price*(this.adultNumber.length))-this.dscoin;
                }
            },
            'adultNumber':function(){
                if(this.is_pre_price==='1'){
                    this.money = (this.parent_price*(this.childNumber.length) + this.children_price*(this.adultNumber.length))-this.dscoin-this.pre_price;
                }else{
                    this.money = (this.parent_price*(this.childNumber.length) + this.children_price*(this.adultNumber.length))-this.dscoin-this.pre_price;
                }            
            }
        }
    }
</script>