import Vue from 'vue'
Vue.filter('dateTime',(value,discount)=>{
        let values = parseInt(value*1000);
        let d = new Date(values),
            Y = d.getFullYear() + '-',
            M = (d.getMonth()+1 < 10 ? '0'+(d.getMonth()+1) : d.getMonth()+1) + '-',
            D = (d.getDate() < 10 ? '0'+d.getDate() : d.getDate());
        return Y+M+D;
})