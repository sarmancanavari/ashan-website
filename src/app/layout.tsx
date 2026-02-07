import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aşhan",
  description: "Aşhan kurumsal web sitesi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=boska@300,400,500&display=swap" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
