import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIOEZE - Human-centered design, AI, education, branding, and digital solutions",
  description: "NIOEZE offers thoughtful tools, education, and partnerships that respect identity and resist unnecessary complexity. Human-centered design, AI tools, education, branding, and digital solutions built with clarity and long-term thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
