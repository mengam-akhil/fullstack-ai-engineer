temperature = float(input("Enter operating temperature:"))

if temperature >= 80:
   print("Warning: High temperature")
elif temperature >= 40 and temperature < 80:
   print("Operating temperature: Normal")
elif temperature >= 0 and temperature < 40:
   print("Operating temperature: Low")
else:
   print("Warning: Below freezing")