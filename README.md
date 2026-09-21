# 🛡️ SentinelAI

### AI-Powered Cloud Application Security Platform

> **SentinelAI** is an academic cybersecurity project focused on combining **Cloud Computing, Application Security and Artificial Intelligence** to assist in the identification, prioritization and analysis of security findings.

<br>

![Status](https://img.shields.io/badge/status-in%20development-00d084?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-FastAPI-3776AB?style=for-the-badge\&logo=python\&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-React-000000?style=for-the-badge\&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-Cloud%20Ready-FF9900?style=for-the-badge\&logo=amazonaws\&logoColor=white)

---

## 🚀 About the Project

**SentinelAI** was created as a Computer Science TCC project with the goal of developing a security platform capable of combining:

* 🔎 **Application Security**
* ☁️ **Cloud Computing**
* 🤖 **Artificial Intelligence**
* 📊 **Risk Analysis**
* 🛡️ **Security Monitoring**
* 🧠 **AI-assisted vulnerability analysis**

The project is designed to evolve from an academic prototype into a more complete **Cloud Application Security platform**, with an architecture prepared for future integration with AWS services, LLMs, RAG and asynchronous security analysis.

---

# ✨ Core Features

<table>
<tr>
<td width="50%">

### 🔎 Passive Security Scanner

Performs controlled HTTP security checks without attempting exploitation.

**Currently analyzes:**

* HTTP security headers
* HTTPS transport configuration
* HSTS
* CSP
* X-Content-Type-Options
* Referrer-Policy
* Permissions-Policy

</td>

<td width="50%">

### 📊 Security Score

Findings are processed by a risk engine that generates a simplified **Security Score**.

The objective is to provide a quick overview of the application's security posture and help prioritize remediation.

</td>
</tr>

<tr>
<td>

### 🤖 AI-Ready Architecture

SentinelAI contains a provider-agnostic AI layer designed for future integration with:

* LLMs
* RAG
* CWE knowledge
* CVSS information
* Remediation knowledge bases

</td>

<td>

### ☁️ Cloud-Ready Architecture

The project is structured to evolve toward a cloud-native architecture using components such as:

* AWS
* API Gateway
* S3
* CloudFront
* SQS
* Workers
* PostgreSQL
* CloudWatch
* IAM
* WAF

</td>
</tr>
</table>

---

# 🧠 How SentinelAI Works

```text
                         ┌─────────────────────┐
                         │      TARGET APP     │
                         │    Authorized URL   │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   SENTINELAI API    │
                         │      FastAPI        │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   PASSIVE SCANNER   │
                         │                     │
                         │ HTTP / HTTPS checks │
                         │ Security Headers    │
                         │ Transport Security  │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    RISK ENGINE      │
                         │                     │
                         │ Findings → Score    │
                         └──────────┬──────────┘
                                    │
                       ┌────────────┴────────────┐
                       ▼                         ▼
              ┌─────────────────┐       ┌─────────────────┐
              │   AI ANALYSIS   │       │   PostgreSQL    │
              │     / RAG       │       │    Database     │
              └────────┬────────┘       └─────────────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   DASHBOARD     │
              │ Next.js / React │
              └─────────────────┘
```

---

# 🏗️ Project Architecture

```text
sentinelai-tcc/
│
├── 🖥️ frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── package.json
│
├── ⚙️ backend/
│   ├── app/
│   │   ├── main.py
│   │   └── services/
│   │       ├── scanner.py
│   │       ├── risk.py
│   │       └── ai.py
│   │
│   ├── requirements.txt
│   └── Dockerfile
│
├── 📚 docs/
│   ├── aws-architecture.md
│   └── tcc-structure.md
│
├── 🧪 tests/
│
├── 🐳 docker-compose.yml
├── 🔐 .env.example
├── 🚫 .gitignore
├── 📄 CHANGELOG.md
├── 📄 LICENSE
└── 📖 README.md
```

---

# 🛡️ Security Scope

SentinelAI currently operates intentionally within a **passive security assessment scope**.

The scanner performs a controlled HTTP request and analyzes the response for security-related configurations.

### ✅ Included

* Passive HTTP analysis
* Security-header inspection
* HTTPS configuration analysis
* Security scoring
* Risk prioritization
* AI-ready analysis layer

### ❌ Not Included

* Exploitation
* Brute force
* Credential attacks
* Destructive actions
* Arbitrary crawling
* Unauthorized testing

> ⚠️ **Only scan systems for which you have explicit authorization.**

---

# 💻 Technology Stack

| Layer          | Technology                  |
| -------------- | --------------------------- |
| 🎨 Frontend    | Next.js                     |
| ⚛️ UI          | React                       |
| 🟦 Language    | TypeScript                  |
| ⚙️ Backend     | FastAPI                     |
| 🐍 Language    | Python                      |
| 🔎 Scanner     | Custom Passive HTTP Scanner |
| 📊 Risk Engine | Python                      |
| 🤖 AI Layer    | Provider-Agnostic           |
| 🗄️ Database   | PostgreSQL                  |
| 🐳 Containers  | Docker                      |
| ☁️ Cloud       | AWS-ready                   |
| 🧪 Testing     | Pytest                      |

---

# ⚡ Running Locally

## 1️⃣ Backend

Navigate to the backend:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv .venv
```

### Windows PowerShell

```powershell
.\.venv\Scripts\Activate.ps1
```

### Linux / macOS

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the API:

```bash
uvicorn app.main:app --reload --port 8000
```

API:

```text
http://localhost:8000
```

Health check:

```text
http://localhost:8000/health
```

---

# 2️⃣ Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

If the API is unavailable, the interface can display a clearly identified demo result so the frontend can still be presented during development and the TCC.

---

# 🐳 Running with Docker

From the project root:

```bash
docker compose up --build
```

This starts the local API environment and PostgreSQL service.

---

# ☁️ AWS Vision

The long-term architecture of SentinelAI is designed around a cloud-oriented model:

```text
                    🌐 User
                      │
                      ▼
              ┌───────────────┐
              │  CloudFront   │
              └───────┬───────┘
                      │
                      ▼
              ┌───────────────┐
              │      S3       │
              │   Frontend    │
              └───────┬───────┘
                      │
                      ▼
              ┌───────────────┐
              │ API Gateway   │
              └───────┬───────┘
                      │
                      ▼
              ┌───────────────┐
              │ Lambda / ECS  │
              └───────┬───────┘
                      │
              ┌───────┴────────┐
              ▼                ▼
        ┌───────────┐    ┌─────────────┐
        │ SQS Queue │    │ Risk Engine │
        └─────┬─────┘    └──────┬──────┘
              │                 │
              ▼                 ▼
        ┌───────────┐     ┌─────────────┐
        │  Scanner  │────▶│ AI / RAG    │
        │  Workers  │     └──────┬──────┘
        └───────────┘            │
                                 ▼
                          ┌──────────────┐
                          │ PostgreSQL   │
                          └──────────────┘
```

Supporting AWS services planned for future evolution include:

* 🔐 IAM
* 🛡️ AWS WAF
* 🔑 Secrets Manager
* 📊 CloudWatch
* 📦 S3
* ⚡ Lambda
* 🚪 API Gateway
* 📬 SQS

---

# 🤖 AI + RAG Roadmap

One of the main future directions of SentinelAI is the integration of Artificial Intelligence.

The planned architecture is:

```text
             Security Finding
                    │
                    ▼
             ┌─────────────┐
             │ Risk Engine │
             └──────┬──────┘
                    │
                    ▼
              ┌───────────┐
              │    RAG    │
              └─────┬─────┘
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
        CWE       CVSS    Remediation
       Knowledge  Data     Knowledge
          │         │         │
          └─────────┼─────────┘
                    ▼
             ┌─────────────┐
             │     LLM     │
             └──────┬──────┘
                    ▼
          AI Security Analysis
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
       Summary   Priority  Remediation
```

The objective is for the AI layer to **assist the security analysis**, while keeping the original scan evidence available for validation.

---

# 🎓 TCC Research

SentinelAI is also structured to support academic evaluation.

Possible evaluation metrics include:

| Metric                      | Objective                             |
| --------------------------- | ------------------------------------- |
| 🎯 Classification Precision | Evaluate finding classification       |
| ⚠️ False Positives          | Measure incorrect findings            |
| ⏱️ Analysis Time            | Compare analysis efficiency           |
| 🔎 Category Coverage        | Measure security categories detected  |
| 💡 Recommendation Quality   | Evaluate remediation suggestions      |
| 📈 Security Score Evolution | Measure improvement after remediation |

The project documentation contains the proposed TCC structure and AWS architecture.

---

# 🗺️ Roadmap

### ✅ Phase 1 — Foundation

* [x] Project architecture
* [x] Next.js frontend
* [x] FastAPI backend
* [x] Passive scanner
* [x] Risk engine
* [x] Security Score
* [x] Docker environment
* [x] AWS architecture documentation

### 🚧 Phase 2 — Intelligence

* [ ] Persistent scan history
* [ ] PostgreSQL integration
* [ ] Authentication
* [ ] Authorization
* [ ] Real LLM integration
* [ ] RAG knowledge base
* [ ] CWE/CVSS enrichment
* [ ] Improved remediation recommendations

### ☁️ Phase 3 — Cloud

* [ ] AWS deployment
* [ ] API Gateway
* [ ] S3 / CloudFront
* [ ] SQS workers
* [ ] CloudWatch monitoring
* [ ] AWS WAF
* [ ] Secrets Manager
* [ ] IAM least privilege

### 🎓 Phase 4 — TCC

* [ ] Define evaluation dataset
* [ ] Run controlled experiments
* [ ] Measure false positives
* [ ] Evaluate AI recommendations
* [ ] Compare analysis times
* [ ] Generate final results
* [ ] Document methodology and conclusions

---

# 📸 Project Preview

The repository also contains the original visual prototype generated during the project's initial development:

```text
frontend/public/sentinelai-prototype.html
```

This prototype is preserved as a reference for the evolution of the SentinelAI interface.

---

# 🔐 Security & Responsible Use

SentinelAI is intended for **educational, research and authorized security assessment purposes**.

Never use the scanner against systems without permission.

Do not commit sensitive information to this repository.

### 🚫 Never commit:

```text
.env
API keys
AWS credentials
Passwords
Private tokens
Cloud credentials
Database production credentials
```

Use:

```text
.env.example
```

as the template for local configuration.

---

# 📌 Next Development Goals

The main objective is to evolve SentinelAI from an academic prototype into a more complete security platform by connecting:

**Passive Scanner → Risk Engine → AI → RAG → Cloud Infrastructure → Security Dashboard**

while maintaining a controlled and authorized security-assessment scope.

---

<div align="center">

## 🛡️ SentinelAI

**Cloud Security • Application Security • Artificial Intelligence**

Built as a Computer Science TCC project.

<br>

⭐ If you find the project interesting, consider giving the repository a star.

</div>
