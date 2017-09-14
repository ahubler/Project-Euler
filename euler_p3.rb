#Problem 3 asks for the largest prime factor of a number.
#We will start with a given_number and, in a loop, divide it by a number (divisor) that will
#increment every time we find a value of divisor that is not a factor of given_number.
#when we do find a factor of given number, we will continue the loop on the result of given_number/divisor
given_number = 600851475143 #we want to find the largest prime of this number
divisor = 2 #starting at 2, because dividing by 1 is useless and will make the loop run forever

while divisor < given_number
  if given_number % divisor == 0 #if divisor is a factor
    given_number /= divisor

    #something interesting to look at to see how the loop is working towards the prime
    puts "The current given_number is: #{given_number}"
    puts "The current divisor is: #{divisor}. It's a factor!"
    puts "#{given_number} / #{divisor} = #{given_number / divisor}"

  else #if divisor is not a factor
    divisor += 1
  end
end

puts "The largest prime factor is: #{given_number}"
