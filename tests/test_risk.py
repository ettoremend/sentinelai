from backend.app.services.risk import calculate_score

def test_empty_scan_is_100():
    assert calculate_score([]) == 100

def test_score_decreases_with_findings():
    score = calculate_score([
        {"severity": "high"},
        {"severity": "low"},
    ])
    assert score < 100
