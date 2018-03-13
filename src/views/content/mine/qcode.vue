<style lang="css" scoped>
    .outer{
        padding: .3rem;
    }
    .header{
        display:flex;
        justify-content: flex-start;
    }
    .header img{
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        margin-right: .3rem;
    }
    .header .name p:first-child{
        font-size: .42rem;
        color: #2F2B27;
        font-weight: bold;
    }
    .header .name p:last-child{
        margin-top: .15rem;
        font-size: .34rem;
        color: #2f2b27;
    }
    .middle{
        text-align: right;
        margin-top: 2.5rem;
        font-size: .36rem;
        padding-right: .7rem;
    }
    .share{
        text-align: right;
        margin: 1.5rem .1rem 0 0;
    }
    .share p{
        font-size:.32rem;
    }
    .share p:first-child{
        padding-right: 1rem;
    }    
    #canvas{
    width:200rem;
    height:2rem;
    }
</style>
<template>
    <div class="outer">
        <div class="header">
            <p>
                <img :src="$store.state.user.image">
            </p>
            <div class="name">
                <p>{{$store.state.user.name}}</p>
                <p>快来成为我的大绳好友</p>
            </div>
        </div>
        <div class="middle">
            <p>大绳的希冀致力于学生</p>
            <p>研学公益社会实践活动</p>
        </div>
        <div class="share">
            <div>
                <canvas id="canvas"></canvas>
            </div>
            <p>扫描二维码</p>
            <p>成为我的大绳好友</p>
        </div>
    </div>
</template>
<script>
    import QRCode from 'qrcode'
    export default{
        data(){
            return{
                qrcode:''
            }
        },
        created(){
            this.getCode();
        },
        mounted(){
            this.useqrcode();
        },
        methods:{
            getCode(){
                this.$http.post('/PcApi',{name:'pc.Login.getTicket'},{emulateJSON:true}).then((res)=>{
					if(res.body.code === 1000){
                        this.qrcode = res.data.qrcode;
					}
				}).catch((error)=>{
					console.log(error);
				})
            },
            useqrcode(){
                var canvas = document.getElementById('canvas')
                QRCode.toCanvas(canvas, this.qrcode, function(error){
                if (error) console.error(error)
                console.log('success!');
                })
            }
        }
    }
</script>