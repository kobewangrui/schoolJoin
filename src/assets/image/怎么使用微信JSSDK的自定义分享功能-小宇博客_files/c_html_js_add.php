var zbp = new ZBP({
	bloghost: "https://www.huceo.com/",
	ajaxurl: "https://www.huceo.com/zb_system/cmd.php?act=ajax&src=",
	cookiepath: "/",
	lang: {
		error: {
			72: "名称不能为空或格式不正确",
			29: "邮箱格式不正确，可能过长或为空",
			46: "评论内容不能为空或过长"
		}
	}
});

var bloghost = zbp.options.bloghost;
var cookiespath = zbp.options.cookiepath;
var ajaxurl = zbp.options.ajaxurl;
var lang_comment_name_error = zbp.options.lang.error[72];
var lang_comment_email_error = zbp.options.lang.error[29];
var lang_comment_content_error = zbp.options.lang.error[46];

$(function () {

	zbp.cookie.set("timezone", (new Date().getTimezoneOffset()/60)*(-1));
	var $cpLogin = $(".cp-login").find("a");
	var $cpVrs = $(".cp-vrs").find("a");
	var $addinfo = zbp.cookie.get("addinfo");
	if (!$addinfo){
		zbp.userinfo.output();
		return ;
	}
	$addinfo = JSON.parse($addinfo);

	if ($addinfo.chkadmin){
		$(".cp-hello").html("欢迎 " + $addinfo.useralias + " (" + $addinfo.levelname  + ")");
		if ($cpLogin.length == 1 && $cpLogin.html().indexOf("[") > -1) {
			$cpLogin.html("[后台管理]");
		} else {
			$cpLogin.html("后台管理");
		}
	}

	if($addinfo.chkarticle){
		if ($cpLogin.length == 1 && $cpVrs.html().indexOf("[") > -1) {
			$cpVrs.html("[新建文章]");
		} else {
			$cpVrs.html("新建文章");
		}
		$cpVrs.attr("href", zbp.options.bloghost + "zb_system/cmd.php?act=ArticleEdt");
	}

});

document.writeln("<script src='https://www.huceo.com/zb_users/plugin/UEditor/third-party/prism/prism.js' type='text/javascript'></script><link rel='stylesheet' type='text/css' href='https://www.huceo.com/zb_users/plugin/UEditor/third-party/prism/prism.css'/>");$(function(){var compatibility={as3:"actionscript","c#":"csharp",delphi:"pascal",html:"markup",xml:"markup",vb:"basic",js:"javascript",plain:"markdown",pl:"perl",ps:"powershell"};var runFunction=function(doms,callback){doms.each(function(index,unwrappedDom){var dom=$(unwrappedDom);var codeDom=$("<code>");if(callback)callback(dom);var languageClass="prism-language-"+function(classObject){if(classObject===null)return"markdown";var className=classObject[1];return compatibility[className]?compatibility[className]:className}(dom.attr("class").match(/prism-language-([0-9a-zA-Z]+)/));codeDom.html(dom.html()).addClass("prism-line-numbers").addClass(languageClass);dom.html("").addClass(languageClass).append(codeDom)})};runFunction($("pre.prism-highlight"));runFunction($('pre[class*="brush:"]'),function(preDom){var original;if((original=preDom.attr("class").match(/brush:([a-zA-Z0-9\#]+);/))!==null){preDom.get(0).className="prism-highlight prism-language-"+original[1]}});Prism.highlightAll()});
UBB4ZBPFaceList = "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|82|84|85|86|87|88|89|90";