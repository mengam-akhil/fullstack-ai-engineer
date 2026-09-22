def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Error: Cannot divide by zero.")
        return None


first = float(input("Enter first number: "))
second = float(input("Enter second number: "))

result = divide(first, second)

if result is not None:
    print("Result:", result)