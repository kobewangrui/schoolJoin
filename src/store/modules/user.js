import $ from 'jquery'
export default {
    state: {
    },
    mutations: {
		UPDATE_USER(state,user){
			Object.assign(state,user)
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
            let info = { 
                "id" : "1", 
                "created_at" : "123345345", 
                "updated_at" : "123345345", 
                "mobile" : "", 
                "nickname" : "zh", 
                "image" : "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL3V7DT6DXRrwK59Jsl5ibT23KTxRBowjJ0THRsbp1MDoz8l1CFley7sH8gYyH4LGrUc8n5513M4zA/0", 
                "birthday" : "0", 
                "gender" : "0", 
                "name" : "王睿龙", 
                "school" : "", 
                "city" : "", 
                "address" : "", 
                "coin" : "0", 
                "level" : "1", 
                "exp" : "0", 
                "volume" : "20480", 
                "openid" : "123456789", 
                "ticket" : "", 
                "scene_id" : "0", 
                "pid" : "0" 
            }
            context.commit('UPDATE_USER',info)
        }
    }
}