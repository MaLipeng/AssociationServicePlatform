
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
	}
	$("#pageContent").load(url); 
}