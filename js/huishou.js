// banner的图片每5秒换一张
var pic1 = document.getElementsByClassName("lb_pic1")[0];
setInterval(function(){
	if(pic1.style.marginLeft == ""){
		pic1.style.marginLeft = "-1349px";
	}else if(pic1.style.marginLeft == "-1349px" ){
		pic1.style.marginLeft = "0px";
	}else{
		pic1.style.marginLeft = "-1349px";
	}
},5000);