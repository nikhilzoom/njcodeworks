var Calculate = require('./cal.js');
var readline = require('readline-sync');
	
var reaDo = true;
do{
	var getNum1 = readline.question("Please enter a number: ");
	var getNum2 = readline.question("\nPlease enter another number: ");
	var calc = new Calculate(getNum1, getNum2);
	var getOperator = readline.question("\nPlease enter an operator (+, - , / , * ): ");
	switch(getOperator){
		case "+": 
		calc.add();
		reaDo = false;
		break;
		case "-": 
		calc.substract();
		reaDo = false;
		break;
		case "*": 
		calc.multiply();
		reaDo = false;
		break;
		case "/": 
		calc.divide();
		reaDo = false;
		break;
		default : 
		console.log("Wrong operation, select correct operation.");
		reaDo = true;
		break;
	}

} while(reaDo);
