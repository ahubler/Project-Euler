//Problem 1 asks for the sum of all even terms in the Fibonacci sequence < 4 million
//This version is done with the recursive function fibSum
var upperLimit = 4000000;//we will check numbers below this value
function main(){
  $('.output').append('<p>Total sum: '+fibSum(1,2,0)+'</p>');//outputs the sum of all even terms
}
function fibSum(num1, num2, sum){
  var c  = num1 + num2;
  var mySum = sum
  $('.output').append('<p>'+num1+'+'+num2+'='+c+'</p>');
  if(num2 % 2 == 0){//checks for an even number
    mySum += num2;// If num2 is even, add it to our total sum
    $('.output').append('<p>b was even! mySum is now: '+mySum+'</p>');
  }
  if(num2 <= upperLimit){
    return(fibSum(num2, c, mySum));//if num2 is under the limit, we pass the values to the same function again
  }
  else{
    return sum;//if num2 is >= the limit, we are done and we can pass values back through all our recursion.
  }
}
$(document).ready(main);
