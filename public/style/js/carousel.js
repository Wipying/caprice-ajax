

function mycarousel_initCallback(carousel) {

    jQuery('#next').bind('click', function() {
        carousel.next();
        return false;
    });

    jQuery('#prev').bind('click', function() {
        carousel.prev();
        return false;
    });
    
    

        $('.carousel ul li').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(200);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(200);
        });
  
    
    
};
