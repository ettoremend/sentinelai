from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, HttpUrl
from .services.scanner import PassiveScanner
from .services.risk import calculate_score
from .services.ai import analyze

app = FastAPI(title="SentinelAI API", version="1.0.0")
scanner = PassiveScanner()

class ScanRequest(BaseModel):
    target: HttpUrl
    authorized: bool = False

@app.get("/health")
async def health():
    return {"status": "ok", "service": "sentinelai-api"}

@app.post("/api/v1/scans")
async def create_scan(request: ScanRequest):
    if not request.authorized:
        raise HTTPException(status_code=403, detail="Explicit authorization is required.")
    result = await scanner.scan(str(request.target))
    result["score"] = calculate_score(result.get("findings", []))
    ai = await analyze(result)
    result["ai"] = {
        "summary": ai.summary,
        "recommendations": ai.recommendations,
        "provider": ai.provider,
    }
    return result
