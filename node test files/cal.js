//Create a calculator objetc
var Calculate = function(num1, num2){
	var self = this;
	this.number1 = parseInt(num1);
	this.number2 = parseInt(num2);
	this.add = function(){
		console.log("SUM: " + (self.number1 + self.number2));
	};
	this.substract = function(){
		console.log("SUBSTRACTION: " +  (self.number1 - self.number2));
	};
	this.multiply = function(){
		console.log("MULTIPLICATION: " +  (self.number1 * self.number2));
	};
	this.divide = function(){
		console.log("DIVISION: " +  (self.number1 / self.number2));
	};
};

module.exports = Calculate;