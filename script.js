function getUserAnswers(){
  
 const operatornSign = getOperator();
 const firstNumber = getNum(1);
 const secondNumber = getNum(2);

 showResult(operatornSign,firstNumber, secondNumber);
}

function getOperator(){
  
  let actionСhoice   = '';
  
  do {
    actionСhoice   = prompt('Enter operator');
    
  } while(actionСhoice   !== '+' && actionСhoice  !== '-' && actionСhoice  !== '*' && actionСhoice  !== '/' );

  return actionСhoice ;
}

function getNum(th){
  
  let number = '';
  
    do {
    number = +prompt(`Enter the ${th} number`);

    
  } while(isNaN(number));

  return number;
  
}

   function showResult(operatornSign,firstNumber, secondNumber){

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

getUserAnswers();