import $ from 'jquery'
export default {
    state: {
    },
    mutations: {
		UPDATE_USER(state,user){
			Object.assign(state,user);
		}
    },
    actions: {
		SYNC_USER(context){
			// $.ajax({
			// 	type: "POST",
			// 	url: "/PcApi",
			// 	data: {name:'pc.Login.getInfoByOpenid',openid:this.$route.query.openid},
			// 	async: false,
			// 	success: (resp)=>{
			// 		// console.log(resp.data)
			// 		const {
			// 			info
			// 		} = resp.body.data;
			// 		context.commit('UPDATE_USER',info)
			// 	}
            // })
            // context.commit('UPDATE_USER',info)
        }
    }
}