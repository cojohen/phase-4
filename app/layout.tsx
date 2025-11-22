import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ttHoves = localFont({
  src: "../TT Hoves Pro Trial Bold.ttf",
  variable: "--font-tt-hoves",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phase 4 - Builder Accelerator",
  description: "Builder Accelerator",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ttHoves.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
