import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-06c4bcff.vercel.app"),
  title: "Shadow Legion - Indian Army Tribute",
  description:
    "Immersive shadow-themed art direction celebrating the valor and spirit of the Indian Army.",
  openGraph: {
    title: "Shadow Legion - Indian Army Tribute",
    description:
      "Immersive shadow-themed art direction celebrating the valor and spirit of the Indian Army.",
    url: "https://agentic-06c4bcff.vercel.app",
    siteName: "Shadow Legion",
    images: [
      {
        url: "/og-shadow-legion.svg",
        width: 1200,
        height: 630,
        alt: "Shadow Legion Indian Army Tribute"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow Legion - Indian Army Tribute",
    description:
      "Immersive shadow-themed art direction celebrating the valor and spirit of the Indian Army.",
    images: ["/og-shadow-legion.svg"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
