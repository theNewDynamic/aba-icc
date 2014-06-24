{% comment %}A simple scroll effect for our splash image{% endcomment %}
$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.splash').css('top',-(scrolled*0.2)+'px');
}
