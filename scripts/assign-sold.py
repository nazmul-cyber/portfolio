services = 16
total = 1220
base = total // services
rem = total % services
counts = [base + (1 if i < rem else 0) for i in range(services)]
print(counts, sum(counts))