//Hamburger Menu
$(document).ready(function($) {
    if ($(window).width() < 900) {
      $('.nav-horizontal').hide();
    } else {
      $('.mobile-nav').hide();
    }
    $('.menu-btn').click(function() {
      $('.responsive-menu').toggleClass('expand')
    });
  });
  
  //Screen resize testing
  $(window).resize(function() {
    if ($(window).width() < 900) {
      $('.nav-horizontal').hide();
      $('.mobile-nav').show();
    } else {
      $('.mobile-nav').hide();
      $('.nav-horizontal').show();
    }
  });