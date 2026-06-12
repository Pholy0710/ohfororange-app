import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OhforOrange Read & Play | Learn to Read - Age 5",
  description:
    "The ultimate fun reading app for 5-year-olds. Learn letters, phonics, blending, and reading with OhforOrange!",
  keywords: ["reading", "phonics", "kindergarten", "learning", "children", "letters", "education"],
  authors: [{ name: "OhforOrange" }],
  openGraph: {
    title: "OhforOrange Read & Play",
    description: "Learn to read with fun and adventure!",
    type: "website",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FF6B2B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FFF8F4] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
