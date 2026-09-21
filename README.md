# SentinelAI

SentinelAI is an academic cybersecurity project combining **Cloud Computing, Application Security and AI-assisted analysis**.

## What is included

- Next.js + React + TypeScript frontend
- FastAPI backend
- Passive HTTP security scanner
- Risk/Security Score engine
- AI/RAG-ready provider boundary
- Docker Compose for local API + PostgreSQL
- AWS reference architecture
- TCC methodology and evaluation metrics
- Original visual prototype preserved at `frontend/public/sentinelai-prototype.html`
- Basic automated test for the risk engine

## Current security scope

The scanner is intentionally passive. It performs a controlled HTTP request and checks security-related response headers and transport configuration. It does **not** perform exploitation, brute force, credential attacks, destructive actions or arbitrary crawling.

Only scan systems for which you have explicit authorization.

## Project structure

```text
sentinelai-tcc/
├── frontend/          # Next.js interface
├── backend/           # FastAPI + passive scanner
├── docs/              # AWS architecture and TCC methodology
├── tests/             # Automated tests
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

## Run locally

### Backend

```bash
cd backend
python -m venv .venv
# Windows PowerShell:
.\.venv\Scripts\Activate.ps1
# macOS/Linux:
# source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

API health check: `http://localhost:8000/health`

### Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open `http://localhost:3000`.

If the API is unavailable, the UI intentionally falls back to a clearly labeled demo result so the interface can still be presented during the TCC.

## Docker

From the repository root:

```bash
docker compose up --build
```

## Next development stages

1. Persist scans and findings in PostgreSQL.
2. Add authentication and authorization.
3. Add an LLM provider through `backend/app/services/ai.py`.
4. Add RAG over CWE/CVSS/internal remediation knowledge.
5. Add asynchronous workers with SQS or an equivalent queue.
6. Add AWS observability, WAF, Secrets Manager and least-privilege IAM.
7. Build TCC experiments and compare AI-assisted recommendations against a defined evaluation set.

## GitHub

Do not commit API keys, AWS credentials, `.env` files or passwords.

The repository is intentionally structured so the complete project can be versioned with Git.
