<style lang="css" scoped>
    input[type='checkbox']{
        display: none;
    }
    .list{
        background: #fff;
        padding: .3rem;
        margin-bottom: 1.5rem;
    }
    .list label{
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;
    }
    .list label label.check{
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
    .list label input[type='checkbox']:checked+label{
        background: #F9C84E;
    }
    .list label .delete{
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
    }
    .addPerson{
        height: 1rem;
        line-height: 1rem;
        color: #fff;
        font-size: .34rem;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #F9C84E;
    }
</style>
<template>
    <div>
        <div class="list">
            <label v-for="i in 10" :key="i.id" :for="'person'+i">
                <input type="checkbox" name="person" :id="'person'+i">
                <label class="check" :for="'person'+i">√</label>
                <span>王睿龙</span>
                <span>【家长】</span>
                <span class="delete">-</span>
            </label>
        </div>
        <router-link tag="p" to="/addPerson" class="addPerson">添加成员</router-link>
    </div>
</template>