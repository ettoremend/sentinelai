import "./globals.css";

export const metadata = {
  title: "SentinelAI — Cloud AppSec",
  description: "AI-assisted passive application security platform for authorized assessments."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
