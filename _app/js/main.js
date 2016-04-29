$(document).ready(function() {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}

var menuToggle = $('#js-mobile-menu').unbind();
$('#js-navigation-menu').removeClass("show");

menuToggle.on('click', function(e) {
  e.preventDefault();
  $('#js-navigation-menu').slideToggle(function(){
    if($('#js-navigation-menu').is(':hidden')) {
      $('#js-navigation-menu').removeAttr('style');
    }
  });
});


var sidebarToggle = $('#js-mobile-menu-sidebar').unbind();
$('#js-navigation-menu').removeClass("show");

menuToggle.on('click', function(e) {
  e.preventDefault();
  $('#js-navigation-menu-sidebar').slideToggle(function(){
    if($('#js-navigation-menu-sidebar').is(':hidden')) {
      $('#js-navigation-menu-sidebar').removeAttr('style');
    }
  });
});



  $('.sliding-panel-button').on('click touchstart',function (e) {
    $('.sliding-panel-content, .content, .open, .close').toggleClass('is-visible');
    e.preventDefault();
    console.log('working');
  });





$('.js-accordion-trigger').bind('click', function(e){
jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
jQuery(this).parent().toggleClass('is-expanded');
e.preventDefault();
});

$('.js-accordion-trigger-footnotes').bind('click', function(e){
jQuery(this).parent().find('.footnotes').slideToggle('fast');  // apply the toggle to the ul
jQuery(this).parent().toggleClass('is-expanded');
e.preventDefault();
});


//
// $('#tipue_search_input').tipuesearch({
// highlightEveryTerm: true,
// descriptiveWords: 100
// });
 $('a:not([href^="http://www.aba-icc.org/"]):not([href^="#"]):not([href^="/"])').attr("target","_blank");


// if the menu is hidden, then show it = if display none, then display block. Or  = if display block, none.

//   If it's not hidden then hide it
