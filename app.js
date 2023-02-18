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
  console.log(a,b);

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

const buttons = document.querySelectorAll('button');


buttons.forEach((element) => {

  element.addEventListener('click', (event) => {
    const display = document.querySelector('.screen');

    if (event.currentTarget.innerText !== "=" && event.currentTarget.innerText!== "CLEAR") {
      display.innerText += event.currentTarget.innerText;
    }

    if (event.currentTarget.innerText === "CLEAR") {
      display.innerText = "";
    }

    if (event.currentTarget.innerText === "=") {
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
        console.log(a,b);

        display.innerText = String(operate('-', a, b));
      }

      if (operation.includes('*')) {
        a = display.innerText.split('*')[0];
        b = display.innerText.split('*')[1];
        console.log(display.innerText);
        console.log(a,b);

        display.innerText = String(operate('*', a, b));

      }

      if (operation.includes('/')) {
        a = display.innerText.split('/')[0];
        b = display.innerText.split('/')[1];
        display.innerText = String(operate('/', a, b));
      }
    }

  })

});
