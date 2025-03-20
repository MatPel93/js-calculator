var readlineSync = require("readline-sync");

let operator;
let num1;
let num2;

function isOperator(input) {
  const validOp = ["+", "-", "*", "/"];
  return validOp.includes(input);
}

function getOperator() {
  operator = readlineSync.question(
    "What operation would you like to preform? "
  );
}

function getNum(promt) {
  return readlineSync.questionInt(promt);
}

let calculation = () => {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "/") {
    return num1 / num2;
  } else if (operator == "*") {
    return num1 * num2;
  }
};

const main = () => {
  getOperator();

  while (!isOperator(operator)) {
    if (!isOperator(operator)) {
      console.log('That is not a vaild operation"');
      getOperator();
    } else {
    }
  }

  num1 = getNum("Please enter the first number. ");
  num2 = getNum("Please enter the second number. ");

  console.log("The result is: " + calculation());
};

main();
