metrics = [
    {"name": "CPU", "value": 82},
    {"name": "Memory", "value": 65},
    {"name": "Disk", "value": 88},
    {"name": "Network", "value": 45},
    {"name": "Temperature", "value": 92}
]

limit = 80

print("System Monitoring Report")
print("------------------------")

for metric in metrics:
    if metric["value"] > limit:
        print("WARNING:", metric["name"], "=", metric["value"])
    else:
        print("OK:", metric["name"], "=", metric["value"])