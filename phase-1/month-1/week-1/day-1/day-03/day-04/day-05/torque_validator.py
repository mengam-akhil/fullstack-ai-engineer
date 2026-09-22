force = input("Enter force in Newtons:")

if force.isnumeric():
    force = int(force)
    print("Valid force:", force, "N")
else:
    print("Invalid force: please enter a numeric value")