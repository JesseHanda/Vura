import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vura",
  description:
    "A Canada-first career discovery app that helps users find career paths aligned with their interests, strengths, and goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}