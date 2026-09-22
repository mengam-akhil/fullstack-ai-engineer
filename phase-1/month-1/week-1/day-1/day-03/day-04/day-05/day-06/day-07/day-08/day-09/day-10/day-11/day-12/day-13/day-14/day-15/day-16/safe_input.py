def divide(a, b):
    try:
        return a / b

    except ZeroDivisionError:
        print("Error: Cannot divide by zero.")
        return None


try:
    first = float(input("Enter first number: "))
    second = float(input("Enter second number: "))

    result = divide(first, second)

    if result is not None:
        print("Result:", result)

except Exception as e:
    print("Unexpected error:", e)