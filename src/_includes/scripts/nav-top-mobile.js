$(function() {
    var menu = $('#navigation-menu');
    
    var menuToggle = $('#js-mobile-menu');
    var body = $('body');//bpny

    $(menuToggle).on('click', function(e) {
      e.preventDefault();
      body.addClass(' black'); //bpny
      menu.slideToggle(function(){
        
        if(menu.is(':hidden')) {
          body.removeClass(' black');//bpny
          menu.removeAttr('style');
          
        }
      });
    });
  });