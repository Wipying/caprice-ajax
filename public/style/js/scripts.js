/*-----------------------------------------------------------------------------------*/
/*	TOGGLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	loadToggles();
});

$(document).ajaxComplete(function(){
	loadToggles();
});

var loadToggles = function(){
	//Hide the tooglebox when page load
	$(".togglebox").hide();
	//slide up and down when click over heading 2
	$("h2").click(function(){
	// slide toggle effect set to slow you can set it to fast too.
	$(this).toggleClass("active").next(".togglebox").slideToggle("slow");
	return true;
	});
}

/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	//Default Action
	loadTabs();
});
$(document).ajaxComplete(function(){
	loadTabs();
});

var loadTabs = function(){
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});
}

/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu", 
	orientation: 'v', 
	classname: 'menu-v', 
	contentsource: "markup" 
});

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/
$(function() {
	loadImageHover();
});

$(document).ajaxComplete(function(){
	loadImageHover();
});

var loadImageHover = function(){
	$('.post a img, ul.works li a img, ul.popular-posts a img').css("opacity","1.0");	
	$('.post a img, ul.works li a img, ul.popular-posts a img').hover(function () {										  
	$(this).stop().animate({ opacity: 0.85 }, "fast"); },	
	function () {			
	$(this).stop().animate({ opacity: 1.0 }, "fast");
	});
}

/*-----------------------------------------------------------------------------------*/
/*	SIDEBAR HEIGHT
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
	var h = $(document).height();
	$('#sidebar').css({height: h+'px'});
});

/*-----------------------------------------------------------------------------------*/
/*	PRETTYPHOTO
/*-----------------------------------------------------------------------------------*/

$(document).ready(function(){
	loadPrettyPhoto();
});
$(document).ajaxComplete(function(){
	loadPrettyPhoto();
});

var loadPrettyPhoto = function(){
	$("a[rel^='prettyPhoto']").prettyPhoto({autoplay_slideshow: false, overlay_gallery: false, social_tools:false, deeplinking: false, theme:'pp_default', slideshow:5000});
};

/*-----------------------------------------------------------------------------------*/
/*	PORTFOLIO
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	loadMasonary();
});

$(document).ajaxComplete(function(data,context){
  loadMasonary();
});

var loadMasonary = function(){
  var 
        speed = 1000,   // animation speed
        $wall = $('#portfolio .items'),

        masonryOptions = {         // initial masonry options

          itemSelector: '.box:not(.invis)',
          animate: true,
          animationOptions: {
            duration: speed,
            queue: false
          }
        };
		
		$wall.imagesLoaded(function(){
			
			$wall.masonry(masonryOptions);
			
			// Create array of filters from link href
			var arrFilter = [];
			$('#filtering-nav a').each(function(){
				fhash = $(this).attr('href').replace('#','');
				if(fhash != 'all'){
					arrFilter.push(fhash);
				}
			});
			
			//  Get the parameter value after the # symbol
			var url=document.URL.split('#')[1];
			if(url == undefined || url ==''){
				url = 'all';
			}
			if($('#filtering-nav a.'+url) && $('#filtering-nav a.'+url).size()>0)
				$('#filtering-nav a.'+url).parent().addClass('active');
			
			if(jQuery.inArray(url, arrFilter) > '-1'){
				// set masonry options animate to false
				masonryOptions.animate = false;
				// hide boxes that don't match the filter class
				$wall.children().not('.'+url).toggleClass('invis').hide();
			}
		//	imageSetCss($(".box"));
			// run masonry again
			$wall.masonry(masonryOptions);
		//	imageFadeIn($(".box"));
		$wall.animate({opacity: 1},1000);
			
		});
		
		$('#filtering-nav a').click(function(e){
			var color = $(this).attr('class');
			filterClass = '.' + color;
			$('#filtering-nav li').removeClass('active');
			$(this).parent().addClass('active');
			
			if(filterClass=='.all') {
			  // show all hidden boxes
			  $wall.children('.invis').toggleClass('invis').fadeIn(speed);
			} else {
			  // hide visible boxes 
			  $wall.children().not(filterClass).not('.invis').toggleClass('invis').fadeOut(speed);
			  // show hidden boxes
			  $wall.children(filterClass+'.invis').toggleClass('invis').fadeIn(speed);
			}
			$wall.masonry({animate: true});
			// set hash in URL
			location.hash = color;
			e.preventDefault();
		});
}

$.fn.imagesLoaded = function(a) {
	var 
	b=this.find("img"),
	c=[],
	d=this,
	e=b.length;
	
	if(!b.length){
		a.call(this);
		return this
	}
	b.one("load error",function(){
		--e===0&&(e=b.length,b.one("load error",function(){
			--e===0&&a.call(d)}).each(function(){
				this.src=c.shift()
			})
		)}
	).each(function(){
		c.push(this.src),this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
	});
	return this
};

/*-----------------------------------------------------------------------------------*/
/*	HOVER
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	loadHover();
});
$(document).ajaxComplete(function(){
	loadHover();
});

var loadHover = function(){
  $('.items .box .image, .items .box .left-side, .carousel ul li').mouseenter(function(e) {
      $(this).children('a').children('span').fadeIn(200);
  }).mouseleave(function(e) {
      $(this).children('a').children('span').fadeOut(200);
  });
}

/*-----------------------------------------------------------------------------------*/
/*	SLIDER
/*-----------------------------------------------------------------------------------*/

$(window).load(function() {
	loadSlider();
});

$(document).ajaxComplete(function(){
	loadSlider();
});

var loadSlider = function(){
	$('.flexslider').flexslider({
		slideshowSpeed: 4000
	});
}


/*-----------------------------------------------------------------------------------*/
/*	FACEBOOK
/*-----------------------------------------------------------------------------------*/

$(function(){
	loadFacebook();
});

var loadFacebook = function(){
	(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}



/*-----------------------------------------------------------------------------------*/
/*	CORNER
/*-----------------------------------------------------------------------------------*/

$(function(){
	loadCorner();
});

$(document).ajaxComplete(function(){
	loadCorner();
});

var loadCorner = function(){
	if(jQuery.browser.msie)return;
	$('.carousel ul li img, #prev, #next, .jquery-slider-slide img, .col4 img, .items img, ul.popular-posts li img, .sidebox ul.popular-posts li img, .post img, a.button, .forms fieldset .btn-submit, #filtering-nav li a, .page-navi ul li a, .map iframe, .text-input, .text-area, .form-container .response, .overlay, ul#button_quotes button, ul.tabs li a, .tab_container, h2.trigger, .togglebox, pre, .download-box, .warning-box, .info-box, .note-box, .round, .jta-tweet-list-controls-button, .b-slider img, .e-showcase-navigation ul li, ul.works li img').corner("3px");
	$('.date').corner("75px");
}



/*-----------------------------------------------------------------------------------*/
/*	Clear Sidebar
/*-----------------------------------------------------------------------------------*/

$(document).ajaxComplete(function(){
	if($('.sidebar-for-blog').size()==0)$('#searchbox-wrapper-for-blog').html('');
});

