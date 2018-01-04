(function(){
  'use strict';

  var Weather = require('./../page-objects/weather/weather');
  var weather = new Weather();
  var btn, item;

  describe('WeatherApp:', function(){
    beforeAll(function(){
      weather.get();
    });
    describe('Change Location', function(){
      it('should set the location.', function(){
        weather.toggle.click();
        weather.setLocation('San Fran');
        browser.sleep(250);
        btn = element.all(by.repeater('match in matches')).first();
        btn.click();
        browser.sleep(1000);
        weather.location.getText().then(function(txt){
          expect(txt).toEqual('San Francisco, CA');
        });
      });
      it('should have the current weather icon image displayed.', function(){
        expect(element(by.id('weatherIcon')).isDisplayed()).toBe(true);
      });
      it('should have the current temp displayed.', function(){
        expect(element(by.binding('weather.temp')).isDisplayed()).toBe(true);
      });
      it('should have the fahrenheit symbol displayed.', function(){
        expect(element(by.css('.fahrenheit-symbol')).isDisplayed()).toBe(true);
      });
      it('should have the forecast displayed.', function(){
        item = element.all(by.repeater('day in forecast'));
        // Check for 8 because of hidden on different size viewport
        expect(item.count()).toBe(8);
      });
      it('should have the weather icons for the forcasts displayed.', function(){
        item = element.all(by.css('.forecastIcon'));
        // Check for 8 because of hidden on different size viewport
        expect(item.count()).toBe(8);
      });
      it('should have the low temp for the forcasts displayed.', function(){
        item = element.all(by.binding('day.low.fahrenheit'));
        // Check for 8 because of hidden on different size viewport
        expect(item.count()).toBe(8);
      });
      it('should have the slash separator between the temps displayed.', function(){
        item = element.all(by.css('.slash'));
        // Check for 8 because of hidden on different size viewport
        expect(item.count()).toBe(8);
      });
      it('should have the high temp for the forcasts displayed.', function(){
        item = element.all(by.binding('day.high.fahrenheit'));
        // Check for 8 because of hidden on different size viewport
        expect(item.count()).toBe(8);
      });
      it('should have the day for the forcasts displayed.', function(){
        item = element.all(by.css('.day'));
        // Check for 8 because of hidden on different size viewport
        expect(item.count()).toBe(8);
      });
    });
  });
})();
