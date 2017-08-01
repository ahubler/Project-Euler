//Problem 1 asks for the sum of all multiples of 3 or 5 up to 1000
function main(){
  var mySum = 0;//will keep the running total sum
  var upperLimit = 1000;//we will check numbers below this value
  for (var i = 1; i< upperLimit; i++){
    if (i%3 === 0||i%5===0){//if i is multiple of 3 or 5
      mySum+=i;
    }
  }
  $('.output').append('<p>'+mySum+'</p>');//outputs the sum of all mutiples
}
$(document).ready(main)
