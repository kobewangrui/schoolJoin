import Vue from 'vue'
Vue.filter('dateTime',(value,discount)=>{
        value = parseInt(value);
        let d = new Date(value),
            y = d.getFullYear(),
            m = d.getMonth()+1;
        return `${y} - ${m}`;
})