var sections = $('.section'),
    links = $('.link'),
    lis = $('.links > li');

$(window).scroll(function() {
    var currentPosition = $(this).scrollTop();
    links.removeClass('selected');
    lis.removeClass('active-slide');
    
    sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).height();
        
        if (currentPosition >= top && currentPosition <= bottom) {
            var link = $('a[href="#' + this.id + '"]');
            link.addClass('selected');
            link.parent().addClass('active-slide');
        }
    });
    
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      if (target.length) {

        $('html,body').animate({scrollTop: target.offset().top}, 600);
        return false;
      

      }
    

    }



  });
});



//   var angle = 0;
  
//   $(".card").click(function(event) {
//     angle += 180;
//     var element = $(event.currentTarget); 
//     if ($.browser.webkit) {
//        element.css('webkitTransition', '-webkit-transform 1.0s cubic-bezier(0,.75,.25,1)');
//        element.css('webkitTransform', 'rotateY(' + angle + 'deg)');
//      } else if ($.browser.mozilla) {
//        element.css('MozTransform', '-moz-transform 1.0s cubic-bezier(0,.75,.25,1)');
//        element.css('MozTransform', 'rotateY(' + angle + 'deg)');
//      } else if ($.browser.msie) {
//        element.css('msTransform', '-ms-transform 1.0s cubic-bezier(0,.75,.25,1)');
//        element.css('msTransform', 'rotateY(' + angle + 'deg)');
//      } else if ($.browser.opera) {
//        element.css('oTransform', '-o-transform 1.0s cubic-bezier(0,.75,.25,1)');
//        element.css('oTransform', 'rotateY(' + angle + 'deg)');
//      }
//   });
  
