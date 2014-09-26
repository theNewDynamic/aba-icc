// $(function() {
//     var menu = $('#navigation-menu');

//     var menuToggle = $('#js-mobile-menu');
//     var body = $('body');//bpny

//     $(menuToggle).on('click', function(e) {
//       e.preventDefault();
//       body.addClass(' black'); //bpny
//       menu.slideToggle(function(){

//         if(menu.is(':hidden')) {
//           body.removeClass(' black');//bpny
//           menu.removeAttr('style');

//         }
//       });
//     });
//   });



  $('.js-menu-trigger').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  $('.js-menu-screen').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });

