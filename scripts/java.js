"use strict";

var calculationNumbers = "^";
var calculationEquals = 0;
var components = [];
var component = 0;
var operator = "";

var currentDigit = 0;
var currentDigitSave = 0;
var currentNumber = 0;
var currentOperation = "";
var accumulator = 0;

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
}

function calculate(operation) {
		if(currentOperation !== ""){
		switch(currentOperation){
			case ",":
				currentDigitSave = currentDigit;
				break;
			case ("+" || "-" || "/" || "*"):
				accumulator *= 10 ^ currentDigitSave;
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

function plus() {
	calculationNumbers = calculationNumbers + "+";
	output.innerHTML = calculationNumbers;
}

function minus(){
	calculationNumbers = calculationNumbers + "-";
	output.innerHTML = calculationNumbers;
}

function multiply() {
	calculationNumbers = calculationNumbers + "*";
	output.innerHTML = calculationNumbers;
}

function divide() {
	calculationNumbers = calculationNumbers + "/";
	output.innerHTML = calculationNumbers;
}

function numblock7() {
	calculationNumbers = calculationNumbers + "7";
	output.innerHTML = calculationNumbers;
}

function numblock8() {
	calculationNumbers = calculationNumbers + "8";
	output.innerHTML = calculationNumbers;
}

function numblock9() {
	calculationNumbers = calculationNumbers + "9";
	output.innerHTML = calculationNumbers;
}


function numblock4() {
	calculationNumbers = calculationNumbers + "4";
	output.innerHTML = calculationNumbers;
}


function numblock5() {
	calculationNumbers = calculationNumbers + "5";
	output.innerHTML = calculationNumbers;
}


function numblock6() {
	calculationNumbers = calculationNumbers + "6";
	output.innerHTML = calculationNumbers;
}


function numblock1() {
	calculationNumbers = calculationNumbers + "1";
	output.innerHTML = calculationNumbers;
}


function numblock2() {
	calculationNumbers = calculationNumbers + "2";
	output.innerHTML = calculationNumbers;
}


function numblock3() {
	calculationNumbers = calculationNumbers + "3";
	output.innerHTML = calculationNumbers;
}

function numblock0() {
	calculationNumbers = calculationNumbers + "0";
	output.innerHTML = calculationNumbers;
}