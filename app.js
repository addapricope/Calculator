let operator=''
let previousValue=''
let currentValue=''

document.addEventListener("DOMContentLoaded", function(){
    let numbers = document.querySelectorAll('[data-number]');
    let operators = document.querySelectorAll ('[data-operation]');
    let equal = document.querySelector ('[data-equals]');
    let decimal = document.querySelector('.decimal');
    let deleteButton = document.querySelector ('[data-delete]');
    let clear = document.querySelector ('[data-all-clear]');
    let previousScreen = document.querySelector ('[data-previous]');
    let currentScreen = document.querySelector ('[data-current]');

   numbers.forEach(function(number){
    number.addEventListener("click", function(e){
        handleNumber(e.target.textContent); //ca sa luam cifrele pe care le apasam
        currentScreen.textContent = currentValue;
      })
   })

   operators.forEach(function(op){
    op.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent= previousValue+ " " + operator;
        currentScreen.textContent = currentValue;
    })
   })

   clear.addEventListener("click", function(){
    previousValue='';
    currentValue='';
    operator='';
    previousScreen.textContent= currentValue;
    currentScreen.textContent = currentValue;

   })

   equal.addEventListener('click', function(){
    calculate();
    previousScreen.textContent = '';
    currentScreen.textContent = previousValue;
   })

   decimal.addEventListener('click', function(){
    addDecimal();
   })

   deleteButton.addEventListener('click', function(){
    deleteLastNumber();
    currentScreen.textContent = currentValue;

   })

})

function handleNumber (num){
    currentValue += num;
}

function handleOperator (op){
  operator=op;
  previousValue=currentValue;
  currentValue='';
}

function calculate(){
  previousValue = Number (previousValue); //convertim din strings in numbers
  currentValue = Number (currentValue);

  if(operator === "+"){
    previousValue += currentValue;
  } else if(operator === "-"){
    previousValue -= currentValue;
  }else if (operator === "*"){
    previousValue *= currentValue;
  }else{
    previousValue /= currentValue;
  }


  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

function addDecimal(){
  if(!currentValue.includes(".")){
    currentValue += '.';
  }
}

function deleteLastNumber(){
  currentValue=currentValue.slice(0, -1);
}