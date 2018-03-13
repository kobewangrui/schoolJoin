//侧栏跟随特效
lastScrollY=0;
function heartBeat(){
var diffY;
var kdnum;
if (document.documentElement && document.documentElement.scrollTop && document.documentElement.scrollWidth){
diffY = document.documentElement.scrollTop;
kdnum = document.documentElement.scrollWidth;
}else if (document.body){
diffY = document.body.scrollTop;
kdnum = document.body.scrollWidth;
}else{/*Netscape stuff*/}
percent=.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.getElementById("full").style.top=parseInt(document.getElementById("full").style.top)+percent+"px";
lastScrollY=lastScrollY+percent;
if(diffY > 200 && kdnum > 960){document.getElementById("full").style.display = "block"}
else{
document.getElementById("full").style.display = "none"}
}

suspendcode="<div id=\"full\" style='display:none; width:15px; height:57px; POSITION:absolute; left:50%; top:360px; margin-left:200px;  z-index:100; text-align:center;'><a href='#'><img src='../zb_users/theme/huceo/style/image/btn_top.gif' border=0 /></a><br><br><a href='#comment'><img src='../zb_users/theme/huceo/style/image/btn_comment.gif' border=0 /></a></div>"
document.write(suspendcode);
window.setInterval("heartBeat()",1);
function switchImage(imageId, imageUrl, linkId, linkUrl, preview, title, alt) {
	if(imageId && imageUrl) {
		var image = $(imageId);
		image.src = imageUrl;

		if(title) {
			image.title = title;
		}
		if(alt) {
			image.alt = alt;
		}
	}

	if(linkId && linkUrl) {
		var link = $(linkId);
		link.href = linkUrl;
	}
}
//侧栏跟随特效
(function(){

    var oDiv=document.getElementById("float");
    var H=0,iE6;
    var Y=oDiv;
    while(Y){H+=Y.offsetTop;Y=Y.offsetParent};
    iE6=window.ActiveXObject&&!window.XMLHttpRequest;
    if(!iE6){
        window.onscroll=function()
        {
            var s=document.body.scrollTop||document.documentElement.scrollTop;
            if(s>H){oDiv.className="clgs clgs1";if(iE6){oDiv.style.top=(s-H)+"px";}}
            else{oDiv.className="clgs";}    
        };
    }

})();

//百度分享JS
document.writeln("<scr"+"ipt>window._bd_share_config={'common':{'bdSnsKey':{'tsina':'3747179402','tqq':'801071901','t163':'Qw52WzvcQ8qCTM2N','tsohu':'laTUF2hu2GQcUsiT'},'bdText':'','bdMini':'2','bdMiniList':false,'bdPic':'http://www.huceo.com/idxlogo.png','bdStyle':'0','bdSize':'32'},'share':[{'bdSize':16},{'tag':'share_1','bdSize':32,}],'image':{'viewList':['tsina','tqq','qzone','renren','weixin'],'viewText':'分享到：','viewSize':'24'}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='https://www.huceo.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</sc"+"ript>");

//百度推送
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

//360推送
(function(){
var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?43c748cbff470bd4fa2ac0b4b5c43b13":"https://jspassport.ssl.qhimg.com/11.0.1.js?43c748cbff470bd4fa2ac0b4b5c43b13";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();