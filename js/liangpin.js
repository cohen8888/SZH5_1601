window.onload = function(){

//banner图轮转
	var btn_ul = document.getElementById("btn_ul");
	var show_ul = document.getElementById("show_ul");
	var btn_li = btn_ul.getElementsByTagName("li");
	for(var i =0;i<btn_li.length;i++){
		btn_li[i].index = i;
		btn_li[i].onclick = function(){
			for(var j =0;j<btn_li.length;j++){
				btn_li[j].className = " ";
			}
			this.className = "btn_hover";
			show_ul.style.left = this.index*-900 + "px";
		}
	}









}