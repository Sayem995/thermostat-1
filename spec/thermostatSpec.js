'use strict'

describe('Thermostat', function() {
  var thermostat;
  var i;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase temperature using up', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease temperature using down', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function(){
    for (i = 0; i < 20; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it('has a max temerature of 25 when power saving mode is on', function(){
    thermostat.powerSaving("on");
    for (i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it('has a max temperature of 32 when power saving mode is off', function(){
    thermostat.powerSaving("off");
    for (i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  });

  it('defaults to power saving mode', function(){
    expect(thermostat.powerSavingMode).toEqual('on');
  });

  it('resets the temperature to 20 degrees using a reset button', function(){
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('has low energy usage if temperature is < 18', function(){
    for (i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.usage()).toEqual('low');
  });
});
