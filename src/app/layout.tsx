import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tochukwu's Portfolio",
  description: "Welcome to my portfolio! I'm a web developer passionate about creating clean, efficient, and user-friendly websites. With expertise in Next.js, React, and other modern web technologies, I specialize in building high-performance web applications. Take a look at my projects below to see examples of my work.",
  keywords:["Mojekwu", "Portfolio", "website", "freelancer", "Tochukwu", "React"],
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
