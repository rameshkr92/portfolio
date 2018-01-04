// This is NOT a viable test, just using for simulation to create video of
// sockets in action using e2e test.
//
// (function(){
//   'use strict';
//
//   var Favorite = require('./../page-objects/favorite/favorite');
//   var favorite = new Favorite();
//
//   #<{(| Protractor specs for end-to-end testing |)}>#
//   describe('FavoriteLanguageApp: Creating Video', function(){
//     var originalTimeout;
//     console.log('default', jasmine.DEFAULT_TIMEOUT_INTERVAL);
//     beforeAll(function(){
//       originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//       jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
//       // On page load in these e2e tests The chart is not being displayed.
//       // Doing a vote then short sleep to get the chart to display, always
//       // shows up after.
//       favorite.get();
//       browser.driver.manage().window().setSize(400, 680);
//       browser.sleep(15000);
//       favorite.vote(2, favorite.voteJS);
//       browser.sleep(5000);
//     });
//     describe('Voting', function(){
//       for(var i = 0; i < 200; i++){
//         (function(){
//           it('should place random votes.', function(){
//             favorite.randomVote();
//             browser.sleep(300);
//             expect(true).toBe(true);
//           });
//         })();
//       }
//     });
//     afterAll(function(){
//       browser.sleep(15000);
//       jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//     });
//   });
// })();
