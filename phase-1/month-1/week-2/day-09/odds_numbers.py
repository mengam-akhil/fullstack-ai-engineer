print("Odd numbers from 1 to 50:")

count = 0

for number in range(1,51):
   if number % 2 != 0:
      print(number)
      count = count + 1

print("Total odd numbers:", count)