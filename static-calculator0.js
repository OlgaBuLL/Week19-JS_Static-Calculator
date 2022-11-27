class Calculator {
  static sum(number1, number2) {
    let sumResult = +number1 + +number2;
    return sumResult;
  }
  static minus(number1, number2) {
    let sumResult = number1 - number2;
    return sumResult;
  }
  static times(number1, number2) {
    let sumResult = number1 * number2;
    return sumResult;
  }
  static divide(number1, number2) {
    let sumResult = number1 / number2;
    return sumResult;
  }
}

document.getElementById("number1").onclick = () => {
  document.getElementById("errorMessage").textContent = "";
};

function sum() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  console.log(Calculator.sum(number1, number2));
  document.getElementById("result").value = Calculator.sum(number1, number2);
}

function minus() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  console.log(Calculator.sum(number1, number2));
  document.getElementById("result").value = Calculator.minus(number1, number2);
}

function times() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  console.log(Calculator.sum(number1, number2));
  document.getElementById("result").value = Calculator.times(number1, number2);
}

function divide() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  if (number2 == 0) {
    document.getElementById("errorMessage").textContent =
      'Делить на "0" нельзя!';
  } else {
    console.log(Calculator.sum(number1, number2));
    document.getElementById("result").value = Calculator.divide(
      number1,
      number2
    );
  }
}
