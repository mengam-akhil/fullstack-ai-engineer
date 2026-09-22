def calculate_torque(force, radius):
    return force * radius


torque = calculate_torque(100, 0.5)

print("Torque:", torque, "Nm")