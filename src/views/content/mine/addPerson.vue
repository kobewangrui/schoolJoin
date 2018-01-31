<style lang="css" scoped>
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
        width: 1.2rem;
    }
    .personDetail>div input{
        width: 4.7rem;
        height: .42rem;
        font-size: .34rem;
        background: #f7f7f7;
    }    
    .personDetail .type label{
        display: inline-block;
        width: 1.2rem;
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
        background: #F9C84E;
        color: #fff;
    }
</style>
<template>
    <div class="outer">
        <div class="personDetail">
            <div class="type">
                <span>类别</span>
                <input type="radio" name="personType" id="student">
                <label for="student">学生</label>
                <input type="radio" name="personType" id="parent">
                <label for="parent">家长</label>
                <input type="radio" name="personType" id="teacher">
                <label for="teacher">教师</label>
                <input type="radio" name="personType" id="other">
                <label for="other">其他</label>
            </div>
            <div class="name">
                <label for="name">姓名</label>
                <input id="name" type="text">
                <span class="delete">×</span>
            </div>
            <div>
                <label for="sex">性别</label>
                <input id="sex" type="text">
            </div>
            <div>
                <label for="age">年龄</label>
                <input id="age" type="text">
            </div>
            <div>
                <label for="school">学校</label>
                <input id="school" type="text">
            </div>
            <div>
                <label for="grade">年级</label>
                <input id="grade" type="text">
            </div>
            <div class="card">
                <label for="card">身份证</label>
                <input id="card" type="text">
                <span>(选填)</span>
            </div>
        </div>
        <ul class="bottomTable">
            <router-link to="/family" tag="li">取消</router-link>
            <li>保存</li>
        </ul>
    </div>
</template>