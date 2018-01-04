(function(){
  'use strict';

  module.exports = function(){
    var Base = require('./../base');
    var base = new Base();
    var jsBtn = element(by.id('js-btn'));
    var phpBtn = element(by.id('php-btn'));
    var rbBtn = element(by.id('rb-btn'));
    var el, endVCount, startVCount;

    this.get = function(){
      browser.get(this.url);
    };
    this.randomVote = function(){
      var num = Math.floor(Math.random() * 3);
      // console.log('random number:', num);
      if(num === 0){
        phpBtn.click();
      } else if(num === 1){
        rbBtn.click();
      } else {
        jsBtn.click();
      }
    };
    this.verifyCount = function(count, item){
      el = element.all(by.css(item));
      el.count().then(function(count){
        expect(count).toBe(count);
      });
    };
    this.verifyLegend = function(id, txt){
      el = element.all(by.css('.highcharts-legend-item')).get(id);
      el.getText().then(function(text){
        expect(text).toContain(txt);
      });
    };
    this.vote = function(id, who){
      el = element.all(by.css('tspan')).get(id);
      el.getText().then(function(text){
        startVCount = text;
        // console.log('startVCount', startVCount);
      });
      who();
      browser.sleep(100);
      el = element.all(by.css('tspan')).get(id);
      el.getText().then(function(text){
        endVCount = text;
        // console.log('endVCount', endVCount);
        expect(Number(endVCount)).toEqual(Number(startVCount) + 1);
      });
    };
    this.voteJS = function(){
      jsBtn.click();
    };
    this.votePHP = function(){
      phpBtn.click();
    };
    this.voteRB = function(){
      rbBtn.click();
    };
    this.url = base.url + '#/favLang';
  };
})();
