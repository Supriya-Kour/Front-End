console.log('Hello!, Debugging Started!');

//our program should decide/fix on a number.
//var programNumber = 50; //3 ways to declare a variable - var,let,const.

var programNumber = Math.floor((Math.random() * 100) + 1);

console.log(Math.floor((Math.random() * 100) + 1));


var userTries = 0;
//when the submit button is clicked, we need to fetch the user input value.
//click event
//querying using the selector
var submitButtonElement = document.getElementById('submitButton');

console.log(submitButtonElement);

submitButtonElement.addEventListener("click", processUserGuess); 
  


//rule, the user should guess within 10 tries.

function processUserGuess()
{
      //update user tries
  userTries = userTries + 1;
  console.log('User Tries: ', userTries);
  

  if(userTries > 10)
  {
    alert('Cannot try for more than 10 times.');
    return;
  }



  //when the submit button is clicked, we need to fetch the user input value.
  console.log('Submit button has been clicked.');

  var userFormInput = document.getElementById('userInputNumber');

  console.log(userFormInput);
  
  var userFormInputValue = userFormInput.value;

  console.log('User from input value: ', userFormInputValue);

  // userFormInputValue = parseInt(userFormInputValue);

  if(userFormInputValue > 100 || userFormInputValue < 1)
  {
    alert('Number should be between 1 and 100');
    return;
  }



  if(userFormInputValue == '')
  {
    alert('Input cannot be empty. Give a value. ');
    return; //code will not run below this return statement
  }


// update user input value on the list
var userInputListElement = document.getElementById('userInputListElement');
console.log(userInputListElement);


var newListItem =document.createElement("LI");           //create a <li> node

//adding two string is done with + sign

var textnode = document.createTextNode("Try " + userTries + " - " + userFormInputValue);  //create a text node
newListItem.classList.add("list-group-item");
newListItem.appendChild(textnode);
userInputListElement.appendChild(newListItem);




//check whether the user input is equal to our program's number.
//if the number guessed is correct, show the message that the user wins.

var resultElement = document.getElementById('result');

if (userFormInputValue == programNumber)
{
  console.log('You have guessed correctly.');

  var successMessageElement = document.getElementById('successMessageBlock');

  console.log(successMessageElement);

  successMessageElement.style.display = 'block';

  //resultElement.innerText = "Your guess is right. ";
  resultElement.innerText = " ";

  var inputFormElement = document.getElementById('inputForm');

  inputFormElement.style.display = "none";


}

//the user didn't guess the number right, so we need to give some hints.

//if the number guessed is wrong and is less than program's number, give a hint.
if(userFormInputValue < programNumber)
{
  console.log('wrong guess. Your number is less than the program number.');
  resultElement.innerText = "Your guess is wrong. Your number is low. ";
}

//if the number guessed is wrong and is greater than program's number, give a hint.
if(userFormInputValue > programNumber)
{
  console.log('wrong guess. Your number is greater than the program number.');
  resultElement.innerText = "Your guess is wrong. Your number is high. ";
}

}