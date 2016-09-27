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
			this.className = "btn_click";
			show_ul.style.left = this.index*-1200 + "px";
		}
	}


// 左侧详细页
	var list_detail = document.getElementById("list_detail");
	var nav_list_ul = document.getElementById("nav_list_ul");
	var nav_detail_ul = document.getElementById("nav_detail_ul");
	var nav_list_li = nav_list_ul.getElementsByTagName("li");
	var nav_detail_li = nav_detail_ul.getElementsByTagName("li");
	var list_container = document.getElementById("list_container");
	for(var i =0;i<nav_list_li.length;i++){
		nav_list_li[i].index = i;
		nav_list_li[i].onmouseover = function(){
			list_detail.style.display = "block";
			for(var j =0;j<nav_detail_li.length;j++){
				nav_detail_li[j].style.display = "none";
			}
			nav_detail_li[this.index].style.display = "block";
		}
	}
	list_container.onmouseleave = function(){
		list_detail.style.display = "none";
	}

//回到顶部
	var back_top_btn = document.getElementById("back_top_btn");
	window.onscroll = function(){
		if(document.body.scrollTop > 200){
			back_top_btn.style.display = "block";
		}else{
			back_top_btn.style.display = "none";
		}
	}
	back_top_btn.onclick = function(){
		var top = document.body.scrollTop;
		var speed = top / 60;
		var id = setInterval(function(){
			if(document.body.scrollTop <= 0 ){
				clearInterval(id);
				document.body.scrollTop = 0;
			}else{
				document.body.scrollTop = document.body.scrollTop - speed;
			}
		},1);
	}


//地图
	var map_contianer =document.getElementById("map_contianer");
	var map_close = document.getElementById("map_close");
	var map_open = document.getElementById("main_left_head_map");
	map_contianer.style.width = document.documentElement.clientWidth + "px";
	map_contianer.style.height = document.documentElement.clientHeight + "px";
	map_open.onclick = function(){
		map_content.innerHTML = "";
		map_contianer.style.display = "block";
		var script = dc("script");
		script.src = "http://webapi.amap.com/maps?v=1.3&key=2974c58ceb4f2814a075707090fa7319&callback=init";
		map_content.appendChild(script);
	}
	map_close.onclick = function(){
		map_contianer.style.display = "none";
	}


//跨域获取商家信息
	var script = document.createElement("script");
	script.src="http://localhost:8080/tcb/data/1.json";
	document.body.appendChild(script);
	

//window.onload结束	
}

//封装document.createElement()
function dc(type){
	return document.createElement(type);
}
//从服务器上拿到数据后进行处理
function getData(data){
	var item_container = document.getElementById("item_container");
	var page_container = document.getElementById("page_container");
	var page_container_ul = page_container.getElementsByTagName("ul")[0];
	var obj = data;
	shop_arr = obj.shop_data;
	current_arr = [];
	showData(shop_arr,0,4);
	for(var i =0;i<=4;i++){
		current_arr.push(shop_arr[i]);
	}
	var count = Math.ceil(shop_arr.length / 5);
	for(var i =1;i<=count;i++){
		var li = dc("li");
		li.index = i;
		li.innerText = i;
		page_container_ul.appendChild(li);
		li.onclick = showPage;
	}
	page_container_ul.getElementsByTagName("li")[0].className = "show";
	var pre_page = document.getElementById("pre_page");
	var next_page = document.getElementById("next_page");
	var index = 1;
	pre_page.onclick = function(){
		index--;
		if(index<1){
			index =1;
		}
		showPage();
	}
	next_page.onclick = function(){
		index++;
		if(index>count){
			index = count;
		}
		showPage();
	}
	
	function showPage(){
		var that = (this.tagName == "LI")?this:page_container_ul.getElementsByTagName("li")[index-1];
		for(var i =0;i<page_container_ul.getElementsByTagName("li").length;i++){
			page_container_ul.getElementsByTagName("li")[i].className = "";
		}
		index = that.index;
		that.className = "show";
		showData(shop_arr,(that.index-1)*5,(that.index-1)*5+4);
		current_arr = [];
		for(var i =(that.index-1)*5;i<=((that.index-1)*5+4);i++){
			current_arr.push(shop_arr[i]);
		}
	}





}
//分页显示商家
function showData(arr,start,end){
	item_container.innerHTML = "";
	shop_arr.forEach(function(elem,index){
		if(index>=start && index<=end){
			var content_item = dc("div");
			var pic = dc("div");
			var img = dc("img");
			var cont = dc("div");
			var cont_left = dc("div");
			var cont_right = dc("div");
			var enterBtn = dc("a");
			var cont_left_title = dc("h3");
			var cont_left_desc = dc("div");
			var cont_left_addr = dc("div");
			var cont_left_title_a = dc("a");
			var cont_left_title_div = dc("div");
			var cont_left_title_div_text = document.createTextNode("店铺等级：");
			var xxpf = dc("div");
			var tcbrz = dc("div");
			var rq = dc("div");
			var xxpf_span = dc("span");
			var tcbrz_span = dc("span");
			var xxpf_text = document.createTextNode("先行赔付");
			var tcbrz_text = document.createTextNode("同城帮认证");

			content_item.className = "content_item";
			pic.className = "pic";
			cont.className = "cont";
			cont_left.className = "cont_left";
			cont_right.className = "cont_right";
			enterBtn.className = "enterBtn";
			cont_left_title.className = "cont_left_title";
			cont_left_desc.className = "cont_left_desc";
			cont_left_addr.className = "cont_left_addr";
			cont_left_title_a.href = "###";
			xxpf.className = "xxpf";
			tcbrz.className = "tcbrz";
			rq.className = "rq";
			enterBtn.href="###";

			content_item.appendChild(pic);
			content_item.appendChild(cont);
			pic.appendChild(img);
			cont.appendChild(cont_left);
			cont.appendChild(cont_right);
			cont.appendChild(enterBtn);
			cont_left.appendChild(cont_left_title);
			cont_left.appendChild(cont_left_desc);
			cont_left.appendChild(cont_left_addr);
			cont_left_title.appendChild(cont_left_title_a);
			cont_left_title.appendChild(cont_left_title_div);
			cont_left_title_div.appendChild(cont_left_title_div_text);
			cont_right.appendChild(xxpf);
			cont_right.appendChild(tcbrz);
			cont_right.appendChild(rq);
			xxpf.appendChild(xxpf_span);
			xxpf.appendChild(xxpf_text);
			tcbrz.appendChild(tcbrz_span);
			tcbrz.appendChild(tcbrz_text);

			for(var i =0;i<parseFloat(elem.shop_score);i++){
				var span = dc("span");
				cont_left_title_div.appendChild(span);
			}


			enterBtn.innerText = "进入店铺";
			img.src = elem.shop_ico;
			cont_left_title_a.innerText = elem.shop_name;
			cont_left_desc.innerText = "主营："+elem.shop_desc;
			cont_left_addr.innerText = "地址："+elem.addr_detail;
			rq.innerText = "人气：" + elem.shop_visit+"次浏览";

			item_container.appendChild(content_item);
		}
	});
}
//初始化地图以及当前页商家对应的坐标
function init(){
    var map = new AMap.Map('map_content', {
        center:[116.397428, 39.90923],
        zoom: 12,
        animateEnable:true
    });
    map.plugin(["AMap.ToolBar"], function() {
        map.addControl(new AMap.ToolBar());
    });

    current_arr.forEach(function(elem){
    	(function(elem){
    		var infowindow = null;
    		var marker = new AMap.Marker({
	            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
	            position: [elem.map_longitude, elem.map_latitude]
	        });
	        marker.setMap(map);
	    	var clickHandle = AMap.event.addListener(marker, 'click', function(){
			    infowindow.open(map, marker.getPosition());
			});
	    	AMap.plugin('AMap.AdvancedInfoWindow',function(){
		       infowindow = new AMap.AdvancedInfoWindow({
		        content: "<div class='info_title'>"+elem.shop_name+"</div><div class='info_desc'>主营："+elem.shop_desc+"</div><div class='info_addr'>地址："+elem.addr_detail+"</div>",
		        offset: new AMap.Pixel(0, -30)
		    	})
		    });
    	})(elem);
    });
}