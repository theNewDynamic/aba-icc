var options={valueNames:["name","tagline","last_name_sort","genre"],listClass:"list-filter",page:1e3};var countryList=new List("container-filter",options);jQuery(function(){window.idx=lunr(function(){this.field("id");this.field("title",{boost:10});this.field("collection");this.field("summary")});window.data=$.getJSON("/content.json");window.data.then(function(e){$.each(e,function(e,n){window.idx.add($.extend({id:e},n))})});$("#search_box").on("click",function(){$("#search_results").toggleClass("show")});$("#site_search").bind("keyup",function(){event.preventDefault();var n=$("#search_box").val();var t=window.idx.search(n);e(t)});function e(e){var n=$("#search_results");window.data.then(function(t){if(e.length){n.empty();e.forEach(function(e){var i=t[e.ref];var a="<li><small>"+i.collection+'</small><br /><a href="'+i.url+'">'+i.title+"</a></li>";n.append(a)})}else{n.html("<li><strong>No results found</strong></li>")}})}});$(document).ready(function(){if($("#js-parallax-window").length){parallax()}});$(window).scroll(function(e){if($("#js-parallax-window").length){parallax()}});function parallax(){if($("#js-parallax-window").length>0){var e=$("#js-parallax-background");var n=$("#js-parallax-window");var t=$(n).offset().top;var i=$(window).scrollTop();var a=t-i;var o=$(e).offset().top;var s=window.innerHeight;var l=o-i;var r=s-l;var c=.35;e.css("top",-(a*c)+"px")}}var menuToggle=$("#js-mobile-menu").unbind();$("#js-navigation-menu").removeClass("show");menuToggle.on("click",function(e){e.preventDefault();$("#js-navigation-menu").slideToggle(function(){if($("#js-navigation-menu").is(":hidden")){$("#js-navigation-menu").removeAttr("style")}})});var sidebarToggle=$("#js-mobile-menu-sidebar").unbind();$("#js-navigation-menu").removeClass("show");menuToggle.on("click",function(e){e.preventDefault();$("#js-navigation-menu-sidebar").slideToggle(function(){if($("#js-navigation-menu-sidebar").is(":hidden")){$("#js-navigation-menu-sidebar").removeAttr("style")}})});$(".sliding-panel-button").on("click touchstart",function(e){$(".sliding-panel-content, .content, .open, .close").toggleClass("is-visible");e.preventDefault();console.log("working")});$(".js-accordion-trigger").bind("click",function(e){jQuery(this).parent().find(".submenu").slideToggle("fast");jQuery(this).parent().toggleClass("is-expanded");e.preventDefault()});$(".js-accordion-trigger-footnotes").bind("click",function(e){jQuery(this).parent().find(".footnotes").slideToggle("fast");jQuery(this).parent().toggleClass("is-expanded");e.preventDefault()});$('a:not([href^="http://www.aba-icc.org/"]):not([href^="#"]):not([href^="/"])').attr("target","_blank");(function(e){e.mark={jump:function(n){var t={selector:".nav-link-internal a"};if(typeof n=="string"){t.selector=n}n=e.extend(t,n);return e(n.selector).click(function(n){var t=e(this);var i=t.attr("href");var a=1e3;var o=e(i).offset().top;e("html,body").animate({scrollTop:o},a,"swing");n.preventDefault()})}}})(jQuery);jQuery(function(){jQuery.mark.jump()});var sticky=new Waypoint.Sticky({element:$(".fixed-nav")[0]});jQuery(document).ready(function(e){e("#main").waypoint(function(n){if(n==="down"){e(".fixed-list").toggleClass("stuck")}else{e(".fixed-list").removeClass("stuck")}},{offset:"65%"})});