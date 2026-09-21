"use client";

import { FormEvent, useState } from "react";
import { ShieldCheck, Radar, BrainCircuit, Cloud, LockKeyhole, Activity, AlertTriangle, CheckCircle2 } from "lucide-react";

type Finding = {
  title: string;
  severity: string;
  description: string;
  remediation: string;
  evidence?: string;
};

type ScanResult = {
  target: string;
  final_url: string;
  status_code: number;
  score: number;
  findings: Finding[];
  scanner: string;
};

const demoResult: ScanResult = {
  target: "https://demo.sentinelai.local",
  final_url: "https://demo.sentinelai.local",
  status_code: 200,
  score: 74,
  scanner: "SentinelAI PassiveScanner / Demo Mode",
  findings: [
    { title: "Missing Content-Security-Policy", severity: "high", description: "A CSP header was not observed in the HTTP response.", remediation: "Define a restrictive Content-Security-Policy appropriate to the application." },
    { title: "Missing Strict-Transport-Security", severity: "medium", description: "HSTS was not observed.", remediation: "Enable HSTS after confirming HTTPS is enforced across the application." },
    { title: "Missing X-Content-Type-Options", severity: "low", description: "The response does not advertise nosniff protection.", remediation: "Set X-Content-Type-Options: nosniff." }
  ]
};

export default function Home() {
  const [target, setTarget] = useState("");
  const [result, setResult] = useState<ScanResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Ready for an authorized passive assessment.");

  async function scan(e: FormEvent) {
    e.preventDefault();
    if (!target.trim()) return;
    setLoading(true);
    setMessage("Running passive HTTP checks...");
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/api/v1/scans`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target: target.trim(), authorized: true })
      });
      if (!response.ok) throw new Error("API unavailable");
      const data = await response.json();
      setResult(data);
      setMessage("Assessment completed.");
    } catch {
      setResult(demoResult);
      setMessage("API unavailable — showing a clearly labeled demo result.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <nav className="nav">
        <div className="brand"><ShieldCheck size={24}/> SENTINEL<span>AI</span></div>
        <div className="navlinks"><a href="#platform">Platform</a><a href="#architecture">Architecture</a><a href="#tcc">TCC</a></div>
      </nav>

      <section className="hero" id="platform">
        <div className="eyebrow"><span className="dot"/> CLOUD APPSEC • AI-ASSISTED</div>
        <h1>Security intelligence for<br/><span>modern cloud applications.</span></h1>
        <p className="lead">SentinelAI combines passive application-security checks, risk scoring and AI-ready analysis in a cloud-oriented architecture designed for an academic TCC and future production evolution.</p>

        <form onSubmit={scan} className="scanbox">
          <div className="scanhead"><Radar size={18}/> Quick Demo Scan</div>
          <div className="scanrow">
            <input value={target} onChange={e => setTarget(e.target.value)} placeholder="https://example.com" type="url" required />
            <button disabled={loading}>{loading ? "Scanning..." : "Run Scan"}</button>
          </div>
          <small>Only scan applications you own or have explicit authorization to assess.</small>
        </form>

        <div className="status">{loading ? <Activity size={16}/> : result ? <CheckCircle2 size={16}/> : <LockKeyhole size={16}/>} {message}</div>
      </section>

      <section className="metrics">
        <div><strong>{result ? result.score : "—"}</strong><span>Security Score</span></div>
        <div><strong>{result ? result.findings.length : "—"}</strong><span>Findings</span></div>
        <div><strong>AI</strong><span>Analysis-ready</span></div>
        <div><strong>AWS</strong><span>Cloud-ready</span></div>
      </section>

      {result && (
        <section className="panel">
          <div className="paneltitle"><div><span className="eyebrow">SCAN RESULT</span><h2>{result.final_url}</h2></div><div className="score">{result.score}<small>/100</small></div></div>
          <p className="muted">HTTP {result.status_code} · {result.scanner}</p>
          <div className="findings">
            {result.findings.map((f, i) => (
              <article key={i} className="finding">
                <div className={`severity ${f.severity}`}>{f.severity.toUpperCase()}</div>
                <div><h3>{f.title}</h3><p>{f.description}</p><b>Remediation:</b> {f.remediation}</div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="features">
        {[
          [Radar, "Passive Scanner", "Safe HTTP header and transport checks without exploit payloads."],
          [BrainCircuit, "AI-Assisted Analysis", "Provider-agnostic interface prepared for LLM and RAG integration."],
          [Cloud, "Cloud Architecture", "Designed to evolve toward API Gateway, workers, queues, storage and observability."],
        ].map(([Icon, title, text]) => (
          <article key={String(title)}><Icon size={26}/><h3>{title as string}</h3><p>{text as string}</p></article>
        ))}
      </section>

      <section className="architecture" id="architecture">
        <div className="eyebrow">REFERENCE ARCHITECTURE</div>
        <h2>From local prototype to cloud-native platform.</h2>
        <div className="flow">
          {["CloudFront / S3", "API Gateway", "Scanner Workers", "Risk Engine", "AI / RAG", "PostgreSQL"].map((x, i) => <div key={x}><span>{i+1}</span>{x}</div>)}
        </div>
      </section>

      <section className="tcc" id="tcc">
        <div><div className="eyebrow">TCC</div><h2>Designed to be measurable.</h2></div>
        <p>Suggested evaluation metrics include classification precision, false-positive rate, analysis time, category coverage, remediation quality and Security Score evolution. The repository also contains the methodology and AWS architecture documents.</p>
      </section>

      <footer>SentinelAI • Academic cybersecurity project • Use only with explicit authorization.</footer>
    </main>
  );
}
