"use strict";

var calculationNumbers = "^";
var calculationEquals = 0;
var components = [];
var component = 0;
var operator = "";

var currentDigit = 0;
var currentNumber = 0;
var currentOperation = "";
var accumulator = 0;

function equal(){
	for(var i = 0; i < calculationNumbers.length; i++){
		if('0' <= calculationNumbers[i] && calculationNumbers[i] <= '9'){
			currentDigit = calculationNumbers[i] - '0';
			currentNumber = currentNumber * 10 + currentDigit;
		} else if (calculationNumbers[i] === "+" || calculationNumbers[i] === "-") {
			calculate(calculationNumbers[i]);
			currentNumber = 0;
		}
	}
	calculate('');
	Ergebnis.innerHTML = accumulator;
}

function calculate(operation) {
		if(currentOperation !== ""){
		switch(currentOperation){
			case "+": 
				accumulator += currentNumber;
				break;

	   }
	} else {
		accumulator = currentDigit;
	}
	currentOperation = operation;
}

function reset() {
	calculationEquals = 0;
	calculationNumbers = "^";
	test.innerHTML = calculationNumbers;
}

function plus() {
	calculationNumbers = calculationNumbers + "+";
	test.innerHTML = calculationNumbers;
}

function minus(){
	calculationNumbers = calculationNumbers + "-"
	test.innerHTML = calculationNumbers;
}

function numblock7() {
	calculationNumbers = calculationNumbers + "7";
	test.innerHTML = calculationNumbers;
}

function numblock8() {
	calculationNumbers = calculationNumbers + "8";
	calculationEquals = calculationEquals + 8;
	test.innerHTML = calculationNumbers;
}

function numblock9() {
	calculationNumbers = calculationNumbers + "9";
	calculationEquals = calculationEquals + 9;
	test.innerHTML = calculationNumbers;
}


function numblock4() {
	calculationNumbers = calculationNumbers + "4";
	calculationEquals = calculationEquals + 4;
	test.innerHTML = calculationNumbers;
}


function numblock5() {
	calculationNumbers = calculationNumbers + "5";
	calculationEquals = calculationEquals + 5;
	test.innerHTML = calculationNumbers;
}


function numblock6() {
	calculationNumbers = calculationNumbers + "6";
	calculationEquals = calculationEquals + 6;
	test.innerHTML = calculationNumbers;
}


function numblock1() {
	calculationNumbers = calculationNumbers + "1";
	calculationEquals = calculationEquals + 1;
	test.innerHTML = calculationNumbers;
}


function numblock2() {
	calculationNumbers = calculationNumbers + "2";
	calculationEquals = calculationEquals + 2;
	test.innerHTML = calculationNumbers;
}


function numblock3() {
	calculationNumbers = calculationNumbers + "3";
	calculationEquals = calculationEquals + 3;
	test.innerHTML = calculationNumbers;
}