
/*添加群组*/
function btnAddGroup(){
	$('#btnAddGroup').bind("click", function(){
		var url = "documentMgr/addGroup.html";
		$("#pageContent").load(url); 
	})
}
/*执行初始化事件*/
$(document).ready(function () {
	btnAddGroup();
	bindTableRowDbClick();

});
