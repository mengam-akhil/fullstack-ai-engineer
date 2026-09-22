value = input("Enter a number:")

if value.isnumeric():
    number = int(value)
    print("Valid numeric input")
else:
    print("Invalid input: please enter a number")