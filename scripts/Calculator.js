"use strict";

var calculationNumbers = calculationNumbers;
var calculationEquals = 0;
var currentDigit = 0;
var currentDigitSave = 0;
var currentNumber = 0;
var currentOperation = "";
var accumulator = 0;
var historyDigit = 0;
var calculationHistory = [];

reset();

function equal(){
	output.innerHTML = "";
	accumulator = 0;
	for(var i = 0; i < calculationNumbers.length; i++){
		if('0' <= calculationNumbers[i] && calculationNumbers[i] <= '9'){
			currentDigit = calculationNumbers[i] - '0';
			currentNumber = currentNumber * 10 + currentDigit;
		} else if (calculationNumbers[i] === "+" || calculationNumbers[i] === "-"|| calculationNumbers[i] === "/" || calculationNumbers[i] === "*") {
			calculate(calculationNumbers[i]);
			currentNumber = 0;
		}
	}
	calculate('');
	currentNumber = 0;
	Ergebnis.innerHTML = accumulator;
	storeHistory(calculationNumbers + "=" + accumulator);
}

function calculate(operation) {
		if(currentOperation !== ""){
		switch(currentOperation){
			case ",":
				currentDigitSave = currentDigit;
				break;
			case "+":
				accumulator += currentNumber;
				break;
			case "-":
				accumulator -= currentNumber;
				break;
			case "*":
				accumulator *= currentNumber;
				break;
			case "/":
				accumulator /= currentNumber;
				break;
	   }
	} else {
		accumulator = currentNumber;
	}
	currentOperation = operation;
}

function reset() {
	calculationEquals = 0;
	calculationNumbers = "^";
	accumulator = 0;
	currentNumber = 0;
	output.innerHTML = calculationNumbers;
	Ergebnis.innerHTML = "";
}
