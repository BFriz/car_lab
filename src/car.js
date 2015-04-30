function Car(make, model, year, color, state, previousOwners, currentOwner, passengers){
  this.year = year;
  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = [];
  this.color = color;
}

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner)
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = 'Blue';

};


module.exports=Car;