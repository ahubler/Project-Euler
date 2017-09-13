//Problem 2 asks for the sum of all even terms in the Fibonacci sequence < 4 million
//we'll use the formula A+B=C, then reuse B as the next A and C as the next B
function main(){
  var mySum = 0;//will keep the running total sum
  var upperLimit = 4000000;//we will check numbers below this value
  var a = 1;//this will hold the first number
  var b = 2;//this is the second number
  var c = 0;//this will hold the result
  $('.output').append('<p>'+mySum+'</p>');
  while (b <= upperLimit){//once b >= our upper limit, we're done
     c = a + b;//calculates the next number in the sequence
     $('.output').append('<p>'+a+'+'+b+'='+c+'</p>');
     if(b % 2 == 0 ){//checks for an even number
       mySum += b;// If b is even, add it to our total sum
       $('.output').append('<p>b was even! mySum is now: '+mySum+'</p>');
     }
     //set up for next iteration
     a = b;
     b = c;
  }
  $('.output').append('<p>Total sum: '+mySum+'</p>');//outputs the sum of all even terms
}
$(document).ready(main);
