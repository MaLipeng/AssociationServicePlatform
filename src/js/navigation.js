
/*
根据switcher指定的id，导航到具体的页面
*/
function navigate(switcher){
	var url = "";
	switch(switcher){
		case 'mList':url='memberMgr/mList.html';
		break;
		case 'architecture':url="memberMgr/architecture.html";
		break;
		case 'myDetail':url="memberMgr/myDetail.html";
		break;
		case 'resetPassword':url="memberMgr/resetPassword.html";
		break;
		case 'memberReviewed':url="memberMgr/memberReviewed.html";
		break;
		case 'sendBox':url="documentMgr/sendBox.html";
		break;
		case 'recieveBox':url="documentMgr/recieveBox.html";
		break;
		case 'delBox':url="documentMgr/delBox.html";
		break;
	}
	$("#pageContent").load(url); 
}