---
layout: null
---
{% include scripts/jquery.min.js %}




jQuery(document).ready(function($){
  var $timeline_block = $('.cd-timeline-block');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    }
  });

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });
});



{% include scripts/listjs/dist/list.min.js %}

{% include scripts/listjs-situations.js %}

// EVENTS PRESENTATION
	{% include scripts/moment/min/moment.min.js %}
	{% include scripts/underscore/underscore.js %}
	{% include scripts/events.js %}

// Mobile nav button/dropdown
{% include scripts/nav-top-mobile.js %}
{% include scripts/links-new-window.js %}

// Utility to show hidden items after js has loaded
$(function () {
     $('.script-only').removeClass('hidden-js');
 });

$(".entry-content img").each(function() {
  var imageCaption = $(this).attr("alt");
  var imageSource = $(this).attr("src");

  if (imageCaption != '') {
    var imgWidth = $(this).width();
    var imgHeight = $(this).height();
    var position = $(this).position();
    var positionTop = (position.top + imgHeight - 26)
  //$("<figure>").insertBefore(this);
  $("<caption>"+imageCaption+"</caption>").css({"margin-bottom":"2em", "top":positionTop+"px", "left":"0", "width":100 +"%", "clear":"both", "display": "block"}).insertAfter(this);}
});

// BOARD PAGE CARDS WITH BIO ON BACK
$('.flip').click(function(){
        $(this).find('.card-flush').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });

// News filters
  var options = {
      valueNames: [ 'category', 'date'],
      listClass: 'list-filter',
      page: 2000 // how many items should first show up on the page - affects performance
      // add tagline, or option for it?
  };

  var newsList = new List('container-filter', options);

if (document.getElementById("filter-news")) {
  document.getElementById("filter-news").onclick=function(){
          newsList.filter(function(item) {
             if (item.values().category == "news" ) {
               return true;
               } else {
               return false;
            }
        });
      };
    }

if (document.getElementById("filter-event")) {
  document.getElementById("filter-event").onclick=function(){
          newsList.filter(function(item) {
             if (item.values().category == "event" ) {
               return true;
               } else {
               return false;
            }
        });
      };
    }



//and clear the filters
if (document.getElementById("filter-clear")) {
   document.getElementById("filter-clear").onclick=function(){
       newsList.filter();
      };
    }







{% comment %} //== NOT USING THE FOLLOWING
{% include scripts/parallax.js %}
// Nice Scrolling
{% include scripts/smooth-scroll.js %}

// FULL SCREEN IMAGES
{% include scripts/jquery.backstretch.min.js %}

{% capture splash_image %}{{ page.splash_image }}{% endcapture %}
$("aside.sidebar-right").backstretch("/assets/img/document.write=(splash_image);",{fade:'fast'});
{% include scripts/jquery.backstretch.local.html splash_image="ff" %}

$(".splash").backstretch("/assets/img/splash_image;",{fade:'fast'});

		// we may need the full screen images script to be pulled individually
			// <script type="text/javascript" src="/assets/js/jquery.cycle2.min.js"></script>
			// <script type="text/javascript" src="/assets/js/jquery.cycle2.carousel.min.js"></script>
			// <script type="text/javascript">{% include scripts/jquery.backstretch.local.html %}</script>






// SLIDESHOW
{% include scripts/jquery_cycle/jquery.cycle2.min.js %}
{% include scripts/jquery_cycle/jquery.cycle2.carousel.min.js %}



// OPTIONAL
// {% include scripts/widow-control.js %}
// {% include scripts/d3.min.js %}




{% endcomment %}
