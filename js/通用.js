var changeCity = document.getElementsByClassName("changeCity")[0];
var popCity = document.getElementsByClassName("pop-city")[0];
var close = document.getElementsByClassName("close")[0];
//单击切换城市，显示城市列表
changeCity.onclick = function(){
	popCity.style.display="block";
}
//单击关闭，关闭城市列表
close.onclick = function(){
	popCity.style.display="none";
}