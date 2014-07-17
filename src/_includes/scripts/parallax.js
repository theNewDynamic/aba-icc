// A simple scroll effect for our splash image
$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.splash').css('70px',-(scrolled*0.2)+'px');
}