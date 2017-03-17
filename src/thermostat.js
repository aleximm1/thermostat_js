'use strict';

function Thermostat() {
  this.MINIMUMTEMP = 10;
  this.PSMAXIMUMTEMP = 25;
  this.MAXIMUMTEMP = 32;
  this.DEFAULTTEMP = 20;
  this.currentTemp = this.DEFAULTTEMP;
  this.currentMode = true;
}

Thermostat.prototype.mode = function() {
  return this.currentMode;
};

Thermostat.prototype.changeMode = function() {
   this.currentMode = !this.currentMode;
   if(this.getTemp() > this.PSMAXIMUMTEMP ) {
     this.currentTemp = this.PSMAXIMUMTEMP
     this.currentTemp = this.PSMAXIMUMTEMP;
   }
};

Thermostat.prototype.getTemp = function () {
  return this.currentTemp;
};

Thermostat.prototype.up = function () {
  var max;
  if(this.mode() === false) {
    max = this.MAXIMUMTEMP;
  } else {
    max = this.PSMAXIMUMTEMP;
  }
  if(this.getTemp() === max) {
  throw new Error("Temperature is at maximum");
}
  this.currentTemp += 1;
};

Thermostat.prototype.down = function() {
  if(this.getTemp() === this.MINIMUMTEMP) {
  throw new Error("Temperature is at minimum");
}
  this.currentTemp -= 1;
};

Thermostat.prototype.reset = function() {
  this.currentTemp = this.DEFAULTTEMP;
};

Thermostat.prototype.checkUsage = function() {
  var usage;
  if (this.getTemp() < 18) {
    usage = "Low-usage";
  } else if (this.getTemp() < 25){
    usage = "Medium-usage";
  } else {
    usage = "High-usage";
  }
  return usage;
};

Thermostat.prototype.getPercentage = function() {
  var percent;
  percent = this.getTemp() * 3
  percent = 100 - percent
  return percent
};

Thermostat.prototype.getPSColour = function() {
  if (this.currentMode === true) {
    return 'greenyellow'
  } else {
    return 'red'
  }
}

Thermostat.prototype.getUsageColour = function() {
  if (this.checkUsage() === "Low-usage") {
    return 'green'
  } else if (this.checkUsage() === "Medium-usage") {
    return 'black'
  } else if (this.checkUsage() === "High-usage") {
    return 'darkred'
  }
}
