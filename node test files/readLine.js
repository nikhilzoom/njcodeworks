// Simple node calculator exercise to use npm readline for taking input from user.

// 
var reaDo = true;
do{
	var readline = require('readline-sync');
	var getNum1 = readline.question("Please enter a number: ");
	var getNum2 = readline.question("\nPlease enter another number: ");
	var getOperator = readline.question("\nPlease enter an operator (+, - , / , * ): ");
	switch(getOperator){
		case "+": 
		console.log("Sum of the numbers is: " + (parseInt(getNum1) + parseInt(getNum2)));
		reaDo = false;
		break;
		case "-": 
		console.log("Substraction of the numbers is: " + (parseInt(getNum1) - parseInt(getNum2)));
		reaDo = false;
		break;
		case "*": 
		console.log("multiplication of the numbers is: " + (parseInt(getNum1) * parseInt(getNum2)));
		reaDo = false;
		break;
		case "/": 
		console.log("Division of the numbers is: " + (parseInt(getNum1) / parseInt(getNum2)));
		reaDo = false;
		break;
		default : 
		console.log("Wrong operation, select correct operation.");
		reaDo = true;
		break;
	}

} while(reaDo);
