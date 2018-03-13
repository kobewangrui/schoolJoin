/*baidu异步统计*/

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?9cd3ccb8703c70e5c24d85000584039c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

/*顶部广告*/

/* function wechat(){
document.writeln("<img src=\"https://www.huceo.com/zb_users/upload/IMG/wxdh.png\" alt=\"点击进入微信创业者导航网站\" title=\"点击进入微信创业者导航网站\"/>");
}  */

function wechat(){
 var curIndex=0;
 //时间间隔 单位毫秒
 var timeInterval=6000;
 var arrurl=new Array();
 var arrimg=new Array();
 arrurl[0]="https://www.tianapi.com/";
 arrurl[1]="http://dh.tianapi.com/";
 arrimg[0]="https://www.huceo.com/zb_users/upload/IMG/tianapi-ad.png";
 arrimg[1]="https://www.huceo.com/zb_users/upload/IMG/wxdh.png";
setInterval(changeImg,timeInterval);
function changeImg()
{
	var url=document.getElementById("href");
    var obj=document.getElementById("blogad");
    if (curIndex==arrimg.length-1) 
    {
        curIndex=0;
    }
    else
    {
        curIndex+=1;
    }
    obj.src=arrimg[curIndex];
	url.setAttribute("href",arrurl[curIndex]);
}
document.writeln("<a id=\"href\" target=\"_blank\" href=\"http://dh.tianapi.com\"><img src=\"https://www.huceo.com/zb_users/upload/IMG/wxdh.png\" id=\"blogad\" alt=\"点击进入自媒体导航或扫描关注微信公众号\" title=\"点击进入自媒体导航或扫描关注微信公众号\"/></a>");
}

/*版权保护*/

window.onload=function(){
document.body.addEventListener('copy', function (e) {
    if (window.getSelection().toString() && window.getSelection().toString().length > 60) {
        setClipboardText(e);
  //    alert('文本已成功复制，请联系作者获得授权或注明出处，谢谢。');
    }
}); 

function setClipboardText(event) {
    var clipboardData = event.clipboardData || window.clipboardData;
    if (clipboardData) {
        event.preventDefault();
        var htmlData = ''
		    + window.getSelection().toString()
            + '<br/>\r\n作者:宇天行，链接:' + window.location.href
        var textData = ''
		    + window.getSelection().toString()
            + '<br/>\r\n作者:宇天行，链接:' + window.location.href

        clipboardData.setData('text/html', htmlData);
        clipboardData.setData('text/plain',textData);
    }
}
}

