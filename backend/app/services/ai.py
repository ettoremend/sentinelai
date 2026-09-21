from dataclasses import dataclass
from typing import Any

@dataclass
class AIAnalysis:
    summary: str
    recommendations: list[str]
    provider: str = "not-configured"

def build_analysis_prompt(scan: dict[str, Any]) -> str:
    return f"""You are SentinelAI, an application-security analysis assistant.
Analyze only the supplied passive scan evidence. Do not invent vulnerabilities.
Target: {scan.get('target')}
Findings: {scan.get('findings')}
Return a concise risk summary and prioritized remediation recommendations.
"""

async def analyze(scan: dict[str, Any]) -> AIAnalysis:
    # Deliberately provider-agnostic. Connect an approved LLM through this
    # boundary later; never place API keys in source control.
    return AIAnalysis(
        summary="AI provider not configured. The scan evidence is ready for LLM/RAG analysis.",
        recommendations=[
            "Prioritize high-severity findings first.",
            "Validate remediation in a controlled environment.",
            "Re-run the passive assessment after changes."
        ]
    )
