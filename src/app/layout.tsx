import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUMON TECHNOLOGY",
  description:
    "We specialize in groundbreaking R&D and software consulting. Plus, we offer tailored training, seminars, and events to keep you ahead in the digital realm. Join us for innovation and insight that drives success.",
  icons: {
    icon: "/logo/16.png",
  },
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
