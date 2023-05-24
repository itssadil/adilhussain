


jQuery(document).ready(function () {


// Smooth scroll behavior

      $('.smooth-scroll').on('click', function(event) {
        event.preventDefault();
        var targetSection = $($(this).attr('href'));
        $('html, body').animate({
          scrollTop: targetSection.offset().top
        }, 1000);
      });


	/*--/ Copyright year /--*/

	var currentYear = new Date().getFullYear();

	$("#currentYear").text(currentYear);



	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}


	/*--/ Progress bar /--*/

	$('.circle').circleProgress({
	    size: 80,
	    fill: {
	      gradient: ["red", "orange"]
	    }
	});

	/*--/ Wow Animate /--*/

	$('.hover-portfolio').hover(
    function() {
      $(this).find('.hidden-content').css('display', 'block');
    },
    function() {
      $(this).find('.hidden-content').css('display', 'none');
    }
  );
	
	/*--/ Wow Animate /--*/

	new WOW().init();
	


	/*--/ Counter /--*/

	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});


	


	/*---- Scroll To Top ----*/
	  
	jQuery(".scrolltotop").click(function(){
	
		jQuery("html").animate({'scrollTop' : '0'}, 1000);
		
		return false;
	});
	
	
	jQuery(window).scroll(function(){
		
		
	
		var navbar = jQuery(".main-menu").outerHeight();
		
		
		
		
		var utd = jQuery(window).scrollTop();
		
		if(utd > navbar){
			jQuery(".main-menu").addClass("fixed");
		}
		else {
			jQuery(".main-menu").removeClass("fixed");
		}
		


		if(utd > navbar){
			jQuery("nav").removeClass("nav-color").removeClass("p-4").addClass("p-3");
		}
		else {
			jQuery("nav").addClass("nav-color").addClass("p-4").removeClass("p-3");
		}
		
		
		if(utd > 200){
			jQuery(".scrolltotop").show();
		}
		else {
			jQuery(".scrolltotop").hide();
		}
		
		
	});


});

