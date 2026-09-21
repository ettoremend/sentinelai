from urllib.parse import urlparse
import httpx

SECURITY_HEADERS = {
    "strict-transport-security": ("HSTS", "medium", "Add Strict-Transport-Security on HTTPS responses."),
    "content-security-policy": ("Content Security Policy", "medium", "Define a restrictive Content-Security-Policy appropriate for the application."),
    "x-content-type-options": ("MIME sniffing protection", "low", "Set X-Content-Type-Options: nosniff."),
    "referrer-policy": ("Referrer Policy", "low", "Set an explicit Referrer-Policy."),
    "permissions-policy": ("Permissions Policy", "low", "Restrict browser features that the application does not need."),
}

class PassiveScanner:
    async def scan(self, target: str):
        parsed = urlparse(target)
        if parsed.scheme not in {"http", "https"}:
            raise ValueError("Only HTTP(S) targets are supported.")
        async with httpx.AsyncClient(follow_redirects=True, timeout=10.0, headers={"User-Agent": "SentinelAI-PassiveScanner/0.1"}) as client:
            response = await client.get(target)
        headers = {k.lower(): v for k, v in response.headers.items()}
        findings = []
        for key, (name, severity, remediation) in SECURITY_HEADERS.items():
            if key not in headers:
                findings.append({
                    "type": "missing_security_header",
                    "title": f"Missing {name}",
                    "severity": severity,
                    "confidence": 0.99,
                    "evidence": f"Response did not include {key}.",
                    "remediation": remediation,
                })
        if parsed.scheme == "http":
            findings.append({
                "type": "transport_security",
                "title": "Application accessed over HTTP",
                "severity": "high",
                "confidence": 1.0,
                "evidence": "Target URL uses http://.",
                "remediation": "Serve the application over HTTPS and redirect HTTP to HTTPS.",
            })
        return {
            "target": target,
            "final_url": str(response.url),
            "status_code": response.status_code,
            "technologies": [],
            "findings": findings,
            "scanner": {"mode": "passive", "requests": 1},
        }
