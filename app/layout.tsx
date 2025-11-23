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
  metadataBase: new URL('https://phase4.app'), // TODO: Update with your actual domain
  title: {
    default: "Phase 4 | The AI-Native Developer Accelerator",
    template: "%s | Phase 4"
  },
  description: "Stop waiting for permission. Phase 4 gives jetpacks to junior engineers to build, scale, and launch AI-powered applications. Join the revolution.",
  keywords: ["AI Accelerator", "Junior Developer", "Startup Incubator", "Next.js", "React", "Software Engineering", "Career Growth"],
  authors: [{ name: "Phase 4" }],
  creator: "Phase 4",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phase4.app",
    title: "Phase 4 | The AI-Native Developer Accelerator",
    description: "Stop waiting for permission. Phase 4 gives jetpacks to junior engineers to build, scale, and launch AI-powered applications.",
    siteName: "Phase 4",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Phase 4 - Stop Waiting for Permission. Start Shipping Software.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phase 4 | The AI-Native Developer Accelerator",
    description: "Stop waiting for permission. Start shipping software.",
    images: ["/og-preview.png"],
    creator: "@phase4_app", // Placeholder
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
