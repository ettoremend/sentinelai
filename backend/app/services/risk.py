WEIGHTS = {"critical": 25, "high": 15, "medium": 8, "low": 3, "info": 0}

def calculate_score(findings):
    penalty = sum(WEIGHTS.get(f.get("severity", "info"), 0) for f in findings)
    return max(0, min(100, 100 - penalty))
