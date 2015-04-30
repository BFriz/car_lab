function Car(make, model, year, color, state, passengers, previousOwners, currentOwner){
  this.year = year;
  this.state = state;
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = passengers;
  this.color = color;
}

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner)
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = 'Blue';

};
Car.prototype.start = function(){
 this.state = "on";
}
Car.prototype.off = function(){
 this.state = "off";
}
Car.prototype.pickUp = function(passengerName){
  if (this.state === 'on') {
    this.passengers.push(passengerName);
  }
}
Car.prototype.dropOff = function(passengerName){
  if (this.state === 'on') {
    this.passengers = [];
  }
}

module.exports=Car;