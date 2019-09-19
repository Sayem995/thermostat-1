const MIN_TEMPERATURE = 10
const MAX_TEMPERATURE = 25
function Thermostat(){
  this.temperature = 20
};

Thermostat.prototype.up = function(){
  this.temperature += 1;
  if (this.powerSavingMode == "on" && this.temperature > MAX_TEMPERATURE) {this.temperature = MAX_TEMPERATURE};
};

Thermostat.prototype.down = function(){
  this.temperature -= 1;
  if (this.temperature < MIN_TEMPERATURE) { this.temperature = MIN_TEMPERATURE};
};

Thermostat.prototype.powerSaving = function(mode){
  this.powerSavingMode = mode;

};
