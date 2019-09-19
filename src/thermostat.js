const MIN_TEMPERATURE = 10

function Thermostat(){
  this.temperature = 20
};

Thermostat.prototype.up = function(){
  this.temperature += 1;
};

Thermostat.prototype.down = function(){
  this.temperature -= 1;
  if (this.temperature < MIN_TEMPERATURE) { this.temperature = MIN_TEMPERATURE};
};
