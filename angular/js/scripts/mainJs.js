(function(){
  'use strict';

  $(document).ready(function(){
    $(window).resize(function(){
      navbarBackground();
    });

    $(window).scroll(function(){
      navbarBackground();
    });

    $(document).on('click', '#nbtoggle', function(){
      navbarBackground();
    });

    $(document).on('click', '.nbatag', function(){
      if($('#nbtoggle').is(':visible')){
        // console.log('toggle dropdown button is visible!');
        $('.navbar-toggle').click();
      }
    });

    $(document).on('click', '.nbbutton', function(){
      if($('#nbtoggle').is(':visible')){
        // console.log('toggle dropdown button is visible!');
        $('.navbar-toggle').click();
      }
    });

    // Private functions
    function navbarBackground(){
      if($(window).width() < 851 || $(window).scrollTop() > 10){
        // console.log('width:', $(window).width());
        $('.navbar').css('opacity', 1);
        // console.log('opacity:', $('.navbar').css('opacity'));
      } else {
        $('.navbar').css('opacity', 0.8);
        // console.log('else.......opacity:', $('.navbar').css('opacity'));
      }
    }
  });
})();
