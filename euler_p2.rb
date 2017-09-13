#Problem 2 asks for the sum of all even terms in the Fibonacci sequence < 4 million
#we'll use the formula first_number + second_number = new_number,
#then reuse second_number as the next first_number and new_number as the next B
  my_sum = 0 #will keep the running total sum
  upper_limit = 4000000 #we will check numbers below this value
  first_number = 1 #this will hold the first number
  second_number = 2 #this is the second number
  new_number = 0 #this will hold the result
  puts my_sum
  while second_number <= upper_limit #once second_number >= our upper limit, we're done
     new_number = first_number + second_number #calculates the next number in the sequence
     puts "#{first_number} + #{second_number} = #{new_number}"
     if second_number % 2 == 0 #checks for an even number
       my_sum += second_number # If second_number is even, add it to our total sum
       puts "#{second_number} was even! my_sum is now: #{my_sum}"
     end
     #set up for next iteration
     first_number = second_number
     second_number = new_number
  end
  puts "Total sum: #{my_sum}" #outputs the sum of all even terms
