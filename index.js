function add(a,b){
  a = parseFloat(a);
  b = parseFloat(b);

  return a+b;

}

function substract(a,b){
  a = parseFloat(a);
  b = parseFloat(b);
  return a-b;
}

function multiply(a,b){
  a = parseFloat(a);
  b = parseFloat(b);

  return a*b;
}

function divide(a,b){
  a = parseFloat(a);
  b = parseFloat(b);
  return a/b;
}

function operate(operator, a,b){

  if (operator=='+') {

    return add(a,b)

  } else {

    if (operator=='-') {

      return substract(a,b)

    } else {

      if (operator=='*') {

        return multiply(a,b)

      } else {

        if (operator=='/') {

          return divide(a,b)

        } else {

          return "No valid operator"

        }

      }

    }


  }

}

const checkOperator = (text) => {
  if (text.includes('+') || text.includes('-') || text.includes('*') || text.includes('/')) {
    return true;
  } else {
    return false;
  }
};

const calculate = (input) => {
  const display = document.querySelector('.screen');

  // debugger;
  if((display.innerText == "" && input !== "=" && input !== "+" && input!== "*" && input!== "/")||
  (display.innerText !=="")) {

    if (display.innerText ==="" && checkOperator(input) && input == "-") {

      display.innerText += "0-";

    } else {

      if (input === "CE") {
        display.innerText = display.innerText.slice(0, -1)
      } else if (input === "CLEAR") {
        display.innerText = "";
      } else if ((checkOperator(display.innerText) && checkOperator(input) && !checkOperator(display.innerText.slice(-1)))||(input === "=" )) {

        const operation = display.innerText;
        let a = 0;
        let b = 0;

        if (operation.includes('+')) {
          a = display.innerText.split('+')[0];
          b = display.innerText.split('+')[1];

          display.innerText = String(operate('+', a, b));
        }

        if (operation.substring(1).includes('-')) {
          a = display.innerText.split('-')[0];
          b = display.innerText.split('-')[1];

          display.innerText = String(operate('-', a, b));
        }

        if (operation.includes('*')) {
          a = display.innerText.split('*')[0];
          b = display.innerText.split('*')[1];

          display.innerText = String(operate('*', a, b));

        }

        if (operation.includes('/')) {
          a = display.innerText.split('/')[0];
          b = display.innerText.split('/')[1];
          display.innerText = String(operate('/', a, b));
        }

        if (checkOperator(input)) {
          display.innerText += input;
        }

        document.getElementById("point").disabled = false;
      } else {

        if (!(checkOperator(input) && checkOperator(display.innerText.slice(-1)))) {
          display.innerText += input;
          if (input === ".") {
            document.getElementById("point").disabled = true;
          }

          if (checkOperator(input)) {
            document.getElementById("point").disabled = false;
          }
        }

      }
    }
  }
};


const buttons = document.querySelectorAll('button');


buttons.forEach((element) => {

  element.addEventListener('click', (event) => {

    calculate(event.currentTarget.innerText);
  })

});

window.addEventListener('keydown', (event) => {

  event.preventDefault();

  let input;

  if (event.key === 'Enter') {
    input = "="
  } else if (event.key === 'Backspace') {
    input = "CE";
  } else if (event.key === 'Clear') {
    input = "CLEAR";
  } else if (event.key === '.') {
    input = ".";
  } else if (event.key === 'Shift') {
    input = "";
  } else if(checkOperator(event.key)){
    input = event.key;
  } else if(isNaN(event.key) && event.key !== '.'){
    input = "";
  }  else {
    input = event.key;
  }
  calculate(input);

});
