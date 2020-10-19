var mySwiper = new Swiper(".swiper-container",{
		loop:true,
        speed:500, //延迟时间
        mode:'horizontal',//mode:"vertical"
		//scrollbar: '.swiper-scrollbar',
	    autoplay:2000,
		pagination: '.pagination',
        paginationClickable: true
 })

window.onresize=window.onload=function(){
			//alert("sss")
	var h=document.getElementById("banner-img").height;
			//alert(h)
	  document.getElementById("banner").style.height=h+"px";
	  document.getElementById("swiper-container").style.height=h+"px";
	  document.getElementById("swiper-slide").style.height=h+"px";
		/*底部菜单初始化*/	
	var w=$(document).width();
	if(w<1000){
		//alert(w)
		$(".main ul").css("display","none").prev("span").css("background","url(img/ioc1.png)").css("background-repeat","no-repeat").css("background-position","right center");
	}else{
		$(".main ul").css("display","block")//.prev("span").css("background","none");//底部菜单放大缩小隐藏
		$(".main span").css("background","none");
	}
	
	var h=document.getElementById("banner-img").height;
			//alert(h)
	  document.getElementById("banner").style.height=h+"px";
	  document.getElementById("swiper-container").style.height=h+"px";
	  document.getElementById("swiper-slide").style.height=h+"px";
			
	
}

