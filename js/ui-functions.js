
// back to top
	jQuery(document).ready(function() {
				var offset = 220;
				var duration = 500;
				jQuery(window).scroll(function() {
					if (jQuery(this).scrollTop() > offset) {
						jQuery('.back-to-top').fadeIn(duration);
					} else {
						jQuery('.back-to-top').fadeOut(duration);
					}
				});

				jQuery('.back-to-top').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
			});
	//switch site view
	$(document).ready(function ()
		{
			//sends users to the full version
			$('#escapeMobile').bind('click', function() {
				setCookie("escapeMobile","true",7);
				location.reload();
				$('#responsiveStyle').remove();
				$('#returnMobile').css('display', 'inline-block');
			});
			 
			//the user decided they want to switch back to the mobile site
			//remove the cookie and reload the page again as mobile
			$('#returnMobile').bind('click', function() {
				setCookie("escapeMobile","false",7);
				location.reload();
			});
			 
			//remember a users preference, and give them the full site if they want it
			if(getCookie("escapeMobile") == "true")
			{
				$('#responsiveStyle').remove();
				$('#returnMobile').css('display', 'inline-block');
			}
		})
		 
		//functions to handle cookies
		function setCookie(c_name,value,exdays)
		{
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + exdays);
			var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
			document.cookie=c_name + "=" + c_value;
		}
		 
		function getCookie(c_name)
		{
			var i,x,y,ARRcookies=document.cookie.split(";");
			for (i=0;i<ARRcookies.length;i++)
			{
				x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
				y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
				x=x.replace(/^\s+|\s+$/g,"");
				if (x==c_name)
				{
					return unescape(y);
				}
			}
		}


// add & remove classes
$('p.view-change > span').on('click', function(){	
    $('span.current-view').removeClass('current-view');
    $(this).addClass('current-view');	
});

// mobile menu
$(function(){
	// onclick mobile menu
	$(".mobile-menu").click(function (e) {	
		$('ul.main-menu').slideToggle();
		$('.mobile-menu').toggleClass("active"); //you can list several class names 
      e.preventDefault();
	});
	
});

// resize window

    $(function(){
      // When the window is resized, check the size to determine your classes
      $(window).resize(function(){
         // When the width and height meet your specific requirements or lower
         if (($(window).width() <= 744) && ($(window).height() <= 300)){
               // If it is smaller or equal to 1024x768, apply your class
              $(".normal").removeClass('normal').addClass('smaller');
         }
         else{
              // Otherwise, reverse the classes
              $(".smaller").removeClass('smaller').addClass('normal');
         }
      });
    });
	
	(function($){
  //detect the width on page load
  $(document).ready(function(){
    var current_width = $(window).width();
     //do something with the width value here!
    if(current_width < 790){
	  //$('body.probably-desktop').removeClass('probably-desktop');
      jQuery('body').addClass("probably-mobile");
    }
	else{
		//$('body.probably-mobile').removeClass('probably-mobile');
		//jQuery('body').addClass("probably-desktop");
	}
  });

  //update the width value when the browser is resized (useful for devices which switch from portrait to landscape)
  $(window).resize(function(){
    var current_width = $(window).width();
   //do something with the width value here!
    if(current_width < 790){
      //$('body.probably-desktop').removeClass('probably-desktop');
      jQuery('body').addClass("probably-mobile");
    }
	else{
		//jQuery('body').addClass("probably-desktop");
	}
  });

})(jQuery);

// resize class
(function( $ ){
 
  $(document).ready(function(){
 
    var current_width = $(window).width();
    //do something with the width value here!
    if(current_width < 481)
      $('html').addClass("m320").removeClass("m768").removeClass("desktop").removeClass("m480");
 
    else if(current_width < 739)
      $('html').addClass("m768").removeClass("desktop").removeClass("m320").removeClass("tablet");
 
    else if (current_width < 970)
      $('html').addClass("tablet").removeClass("desktop").removeClass("m320").removeClass("m768");
 
    else if (current_width > 971)
      $('html').addClass("desktop").removeClass("m320").removeClass("m768").removeClass("tablet");
 
    if(current_width < 650)
      $('html').addClass("mobi-menu").removeClass("desktop-menu");
 
    if(current_width > 651)
      $('html').addClass("desktop-menu").removeClass("mobi-menu");
 
  });
 
  //update the width value when the browser is resized (useful for devices which switch from portrait to landscape)
  $(window).resize(function(){
    var current_width = $(window).width();
    //do something with the width value here!
    if(current_width < 481)
      $('html').addClass("m320").removeClass("m768").removeClass("desktop").removeClass("tablet");
 
    else if(current_width < 669)
      $('html').addClass("m768").removeClass("desktop").removeClass("m320").removeClass("tablet");
 
    else if (current_width < 970)
      $('html').addClass("tablet").removeClass("desktop").removeClass("m320").removeClass("m768");
 
    else if (current_width > 971)
      $('html').addClass("desktop").removeClass("m320").removeClass("m768").removeClass("tablet");
 
    if(current_width < 650)
      $('html').addClass("mobi-menu").removeClass("desktop-menu");
 
    if(current_width > 651)
      $('html').addClass("desktop-menu").removeClass("mobi-menu");
 
  });
 
})( jQuery );

// push menu
$(document).ready(function() {
	$menuLeft = $('.pushmenu-left');
	$nav_list = $('#nav_list');

	$nav_list.click(function() {
		$(this).toggleClass('active');
		$('.pushmenu-push').toggleClass('pushmenu-push-toright');
		$menuLeft.toggleClass('pushmenu-open');
	});
});
   
// dropdown
$(document).ready(function () {    
    
    $('.top-bar nav > ul > li.dropdown').hover(
        function () {
            //show its submenu
            $('ul', this).stop().slideDown(200);

        }, 
        function () {
            //hide its submenu
            $('ul', this).stop().slideUp(250);            
        }
		
    );
    
}); 

// less or more
$('.more-panel').readmore({speed: 500});

// new functions