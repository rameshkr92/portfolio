(function(){
  'use strict';

  angular.module('AppPortfolio')
    .animation('.photo', function(){
      var animate = {};

      animate.addClass = function(element, className, done) {
        // Get margin-left. Can't use `auto` with jQuery .animate()
        var marg = getMargin(element);

        if(className !== 'active'){
          return;
        }

        // CSS `location` before animation
        element.css({
          position: 'absolute',
          top: 1500,
          marginLeft: marg,  // Using the retrieved margin
          display: 'block'
        });

        // Animate to this `location`. Using jQuery animate()
        jQuery(element).animate({
          top: 0
        },
        {
          duration: 1000
        }, done);

        return function(cancel){
          if(cancel){
            element.stop();
          }
        };
      };

      animate.removeClass = function(element, className, done) {
        var marg = getMargin(element);

        if(className !== 'active'){
          return;
        }

        element.css({
          position: 'absolute',
          marginLeft: marg,
          top: 0
        });

        jQuery(element).animate({
          top: -750
        },
        {
          duration: 1000
        }, done);

        return function(cancel){
          if(cancel){
            element.stop();
          }
        };
      };

      // Private functions
      function getMargin(elem){
        var parentWidth = elem.parent().width();
        var elemWidth = elem.width();
        return ((parentWidth - elemWidth)/2);
      }

      return animate;
    });
})();
