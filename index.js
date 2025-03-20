var readlineSync = require("readline-sync");

var operator;
var num1;
var num2;

function isOperator(input) {
  const validOp = ["+", "-", "*", "/"];
  return validOp.includes(input);
}

function getOperator() {
  operator = readlineSync.question(
    "What operation would you like to preform? "
  );
}

function getNum1() {
  num1 = readlineSync.questionInt("Please enter the first number. ");
}

function getNum2() {
  num2 = readlineSync.questionInt("Please enter the second number. ");
}

var calculation = () => {
  if (operator == "+") {
    console.log("The result is: ", num1 + num2);
  } else if (operator == "-") {
    console.log("The result is: ", num1 - num2);
  } else if (operator == "/") {
    console.log("The result is: ", num1 / num2);
  } else if (operator == "*") {
    console.log("The result is: ", num1 * num2);
  }
};

getOperator();

while (!isOperator(operator)) {
  if (!isOperator(operator)) {
    console.log('That is not a vaild operation"');
    getOperator();
  } else {
  }
}

getNum1();
getNum2();

calculation();
