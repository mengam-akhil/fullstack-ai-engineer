def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Error: Cannot divide by zero.")
        return None


print("=== Calculator ===")
print("1. Add")
print("2. Subtract")
print("3. Multiply")
print("4. Divide")

choice = input("Choose an operation (1-4): ")

try:
    first = float(input("Enter first number: "))
    second = float(input("Enter second number: "))
    valid_input = True

except Exception as e:
    print("Invalid input:", e)
    valid_input = False


if valid_input:
    if choice == "1":
        result = add(first, second)

    elif choice == "2":
        result = subtract(first, second)

    elif choice == "3":
        result = multiply(first, second)

    elif choice == "4":
        result = divide(first, second)

    else:
        print("Invalid operation.")
        result = None

    if result is not None:
        print("Result:", result)