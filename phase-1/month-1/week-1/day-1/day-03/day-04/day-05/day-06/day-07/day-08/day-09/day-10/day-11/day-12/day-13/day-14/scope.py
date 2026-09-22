limit = 80

def check_metric(value):
    if value > limit:
        return "WARNING"
    return "OK"

print(check_metric(90))
print(check_metric(70))