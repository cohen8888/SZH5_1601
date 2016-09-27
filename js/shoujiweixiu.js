window.onload = function(){

	var error_li = document.getElementsByClassName("error_li");
	var error_detail_li = document.getElementsByClassName("error_detail_li");
	for(var i =0;i<error_li.length;i++){
		error_li[i].index = i;
		error_li[i].onmouseover = function(){
			error_detail_li[this.index].style.display = "block";
		}
		error_li[i].onmouseout = function(){
			error_detail_li[this.index].style.display = "none";
		}
	}

	var nav_pre = document.getElementById("nav_pre");
	var nav_next = document.getElementById("nav_next");
	var post_nav_ul = document.getElementById("post_nav_ul");
	nav_pre.onclick = function(){
		if(post_nav_ul.offsetLeft !== 0){
			post_nav_ul.style.left = "0px"
		}
	}
	nav_next.onclick = function(){
		if(post_nav_ul.offsetLeft == 0){
			post_nav_ul.style.left = "-940px"
		}
	}



	var header = document.getElementById("header");
	var i =1;
	setInterval(function(){
		i++;
		if(i>3){
			i=1;
		}
		header.style.background = "url('images/shoujiweixiu/header-"+i+".jpg') no-repeat center";
	},3000)

}