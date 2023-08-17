import { Inter } from "next/font/google";

import { cn, constructMetadata } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = constructMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-900 text-gray-50", inter.variable)}>{children}</body>
    </html>
  );
}
