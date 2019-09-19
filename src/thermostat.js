const MIN_TEMPERATURE = 10
const MAX_TEMPERATURE = 32
const POWER_SAVE_MAX = 25
const DEFAULT_TEMPERATURE = 20

function Thermostat(){
  this.temperature = DEFAULT_TEMPERATURE;
  this.powerSavingMode = 'on';
};

Thermostat.prototype.up = function(){
  this.temperature += 1;
  if (this.powerSavingMode == 'on' && this.temperature > POWER_SAVE_MAX) {
    this.temperature = POWER_SAVE_MAX
  };
  if (this.powerSavingMode == 'off' && this.temperature > MAX_TEMPERATURE) {
    this.temperature = MAX_TEMPERATURE
  };
};

Thermostat.prototype.down = function(){
  this.temperature -= 1;
  if (this.temperature < MIN_TEMPERATURE) { this.temperature = MIN_TEMPERATURE};
};

Thermostat.prototype.powerSaving = function(mode){
  this.powerSavingMode = mode;
};

Thermostat.prototype.reset = function(){
  this.temperature = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.usage = function(){
  return 'low';
};
