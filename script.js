function getOperator(){
  
  let operator  = '';
  
  do {
    operator  = prompt('Enter operator');
    
  } while(operator  !== '+' && operator !== '-' && operator !== '*' && operator !== '/' );

  return operator;
}


function getFirstNum(){
  
  let firstNum;
  
    do {
    firstNum = +prompt('Enter the first number');
    
  } while(isNaN(firstNum));

  return firstNum;
}



function getSecondNum(){
  
  let secondNum;
  
    do {
    secondNum = +prompt('Enter the second number');
    
  } while(isNaN(secondNum));
 
  return secondNum;
}


function showResult(){
 const operatornSign = getOperator();
 const firstNumber = getFirstNum();
 const secondNumber = getSecondNum();
 
  
  let result = '' ;
  
 switch(operatornSign) {
     case '+':
     result = firstNumber + secondNumber;
     break;
     case '-':
     result = firstNumber - secondNumber;
     break;
     case '*':
     result = firstNumber * secondNumber;
     break;
     case '/':
     result = firstNumber / secondNumber;
     break;
     default: 
     'You entered an incorrect entry';
 }
  
alert(`${firstNumber} ${operatornSign}  ${secondNumber} = ${result}` );
}


showResult();