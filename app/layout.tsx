import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intel Stock Guy",
  description: "Inspired meme by the guy on WallStreet Bets who spent $700k of his inheritance money from Grandma on Intel stock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}>{children}
      <Analytics />
      </body>
    </html>
  );
}
