#Problem 1 asks for the sum of all multiples of 3 or 5 up to 1000

  total_sum = 0 #will keep the running total sum
  upper_limit = 1000 #we will check numbers below this value
  i = 1
  while i < upper_limit
    if i % 3 == 0 || i % 5 == 0 #{{//}if i is multiple of 3 or 5
      total_sum += i
    end
     i += 1
  end
  puts total_sum #outputs the sum of all mutiples
