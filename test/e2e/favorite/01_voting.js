(function(){
  'use strict';

  var Favorite = require('./../page-objects/favorite/favorite');
  var favorite = new Favorite();

  /* Protractor specs for end-to-end testing */
  describe('FavoriteLanguageApp:', function(){
    describe('Voting', function(){
      it('should increment the JS count when voted for.', function(){
        favorite.vote(2, favorite.voteJS);
      });
      it('should increment the Ruby count when voted for.', function(){
        favorite.vote(1, favorite.voteRB);
      });
      it('should increment the PHP count when voted for.', function(){
        favorite.vote(0, favorite.votePHP);
      });
    });
    describe('Voting with reduced width screen', function(){
      it('should reduce the screen width then vote again.', function(){
        // Doing this inside an arbitrary test to control when the resize occurs
        // then continue testing.
        browser.driver.manage().window().getSize().then(function(size){
          browser.driver.manage().window().setSize(450, size.height);
          browser.sleep(300);
          browser.driver.manage().window().getSize().then(function(newSize){
            expect(newSize).toEqual({height: size.height, width: 450});
          });
        });
      });
      it('should increment the JS count when voted for.', function(){
        favorite.vote(2, favorite.voteJS);
      });
      it('should increment the Ruby count when voted for.', function(){
        favorite.vote(1, favorite.voteRB);
      });
      it('should increment the PHP count when voted for.', function(){
        favorite.vote(0, favorite.votePHP);
      });
    });
  });
})();
