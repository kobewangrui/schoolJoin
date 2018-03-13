$(document).ready(function(){
	var s=document.location;
	$("#divNavBar a").each(function(){
		if(this.href==s.toString().split("#")[0]){$(this).addClass("on");return false;}
	});
	
});



function ReComment_CallBack(){for(var i=0;i<=ReComment_CallBack.list.length-1;i++){ReComment_CallBack.list[i]()}}
ReComment_CallBack.list=[];
ReComment_CallBack.add=function(s){ReComment_CallBack.list.push(s)};


//重写了common.js里的同名函数
function RevertComment(i){
	$("#inpRevID").val(i);
	var frm=$('#divCommentPost'),cancel=$("#cancel-reply"),temp = $('#temp-frm');


	var div = document.createElement('div');
	div.id = 'temp-frm';
	div.style.display = 'none';
	frm.before(div);


	$('#AjaxCommentEnd'+i).before(frm);

	frm.addClass("reply-frm");
	
	cancel.show();
	cancel.click(function(){
		$("#inpRevID").val(0);
		var temp = $('#temp-frm'), frm=$('#divCommentPost');
		if ( ! temp.length || ! frm.length )return;
		temp.before(frm);
		temp.remove();
		$(this).hide();
		frm.removeClass("reply-frm");
		ReComment_CallBack();
		return false;
	});
	try { $('#txaArticle').focus(); }
	catch(e) {}
	ReComment_CallBack();
	return false;
}

//重写GetComments，防止评论框消失
function GetComments(logid,page){
	$('span.commentspage').html("Waiting...");
	$.get(str00+"zb_system/cmd.asp?act=CommentGet&logid="+logid+"&page="+page, function(data){
		$("#cancel-reply").click();
		$('#AjaxCommentBegin').nextUntil('#AjaxCommentEnd').remove();
		$('#AjaxCommentEnd').before(data);
	});
}



//*********************************************************
// 目的：    输出UBB
//*********************************************************
function UBB4ZBPexportUbbFrame() {

		objActive="txaArticle";

		var sUbbFrame="";

		sUbbFrame=sUbbFrame+("<div id=\"UbbLabel\" style=\"display: block;position:absolute;margin-top: 146px;padding: 4px;\"><span style=\"float: right;margin: 0 0 0 10px;\"> [支持表情输入哦]</span><div onclick=\"$('#UbbFrame').hide().addClass('ubb-frame-hide');\" id=\"UbbFrame\" class=\"ubb-frame-hide\" style=\"display:none;position:absolute;z-index:540;width:620px;margin-top:46px;background: #F9F6F6;border: 2px solid #1a4d0b;border-radius: 6px;\"></div><span>");
		sUbbFrame=sUbbFrame+("<a onmouseover=\"if($('#UbbFrame').attr('class')=='ubb-frame-hide'){UBB4ZBPinsertUbbFace();$('#UbbFrame').fadeIn('normal').removeClass('ubb-frame-hide');}else{$('#UbbFrame').fadeOut('normal').addClass('ubb-frame-hide');}\" style=\"cursor:pointer;\"><img style=\"margin-top:-6px\" src=\""+bloghost+"zb_users/upload/IMG/auto.gif\"/></a>  ");
		sUbbFrame=sUbbFrame+("</span>");
		sUbbFrame=sUbbFrame+("</div>");

		$("#txaArticle").before(sUbbFrame);

		$("#txaArticle").focus(function(){$("#UbbLabel").fadeIn("normal");})

}

//*********************************************************


//*********************************************************
// 目的：    插入表情图片HTML代码
// 输入：    无
// 返回：    无
//*********************************************************
function UBB4ZBPinsertUbbFace() {


		var aryFileName="";
		var strFileName="";
		var strFaceHtml="";
    strFaceName = UBB4ZBPFaceList;
		aryFileName = strFaceName.split("|");

		for (var i=0;i<aryFileName.length;i++)
		{
			strFileName = aryFileName[i];
			strFaceHtml=strFaceHtml + "<img src=\""+bloghost+"zb_users/upload/expression/"+strFileName+".gif\" title=\""+strFileName+"\" alt=\""+strFileName+"\" onclick=\"InsertText(objActive,'[F]'+this.alt+'[/F]',false);\" style=\"padding:2px;cursor:pointer;\" />";
		}

		$("#UbbFrame").html(strFaceHtml);


}

function InsertText(objHTML,strText,bolReplace) {
	if(strText==""){return("")}
	var obj=document.getElementById(objHTML);
	if(document.selection){
		if (obj.currPos){
			if(bolReplace && (obj.value=="")){
				obj.currPos.text=strText;
			}
			else{
				obj.currPos.text+=strText;
			}
		}
		else{
			obj.value+=strText;
		}
	}
	else{
		if(bolReplace){
			obj.value=obj.value.slice(0,obj.selectionStart) + strText + obj.value.slice(obj.selectionEnd,obj.value.length);
		}
		else{
			obj.value=obj.value.slice(0,obj.selectionStart) + strText + obj.value.slice(obj.selectionStart,obj.value.length);
		}
	}
	//obj.focus();
}

function ReplaceText(objHTML,strPrevious,strNext) {
	var obj=document.getElementById(objHTML);
	var strText;
	if(document.selection && document.selection.type == "Text"){
		if (obj.currPos){
			var range = document.selection.createRange();
			range.text = strPrevious + range.text + strNext;
			return("");
		}
		else{
			strText=strPrevious + strNext;
			return(strText);
		}
	}
	else{
		if(obj.selectionStart || obj.selectionEnd){
			strText=strPrevious + obj.value.slice(obj.selectionStart,obj.selectionEnd) + strNext;
			return(strText);
		}
		else{
			strText=strPrevious + strNext;
			return(strText);
		}
	}
}


$(document).ready(function(){

UBB4ZBPexportUbbFrame();

$("#UbbFrame").bind("click", function(event) {
if (event && event.stopPropagation) {
event.stopPropagation();
} else {
event.cancelBubble = true;
}

}); 


$(document).bind("click", function(e){
var $target = $(e.target);
//console.log($target.attr("id"));
if ($target.parent().parent().parent().attr("id") != "UbbLabel") {
$('#UbbFrame').fadeOut('normal').addClass('ubb-frame-hide');
}
}); 


});
