import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hotel Belvior Estate | Luxury Hotel in Srinagar, Kashmir, India",
  description: "Experience the pinnacle of luxury at Hotel Belvior Estate. Located in the heart of Srinagar, Kashmir, we offer premium rooms and world-class hospitality.",
  keywords: "Hotel Belvior Estate, Luxury Hotel Kashmir, Srinagar Hotels, Best Stay in Kashmir, Premium Accommodation Srinagar, Kashmir Tourism",
  openGraph: {
    title: "Hotel Belvior Estate | Luxury Hotel in Srinagar, Kashmir",
    description: "Experience the pinnacle of luxury at Hotel Belvior Estate in Srinagar, Kashmir.",
    url: "https://www.belviorestate.com",
    siteName: "Hotel Belvior Estate",
    images: [
      {
        url: "/Logo.svg",
        width: 800,
        height: 600,
        alt: "Hotel Belvior Estate Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Belvior Estate | Luxury Hotel in Srinagar, Kashmir",
    description: "Experience the pinnacle of luxury at Hotel Belvior Estate in Srinagar, Kashmir.",
    images: ["/Logo.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/favicon/android-chrome-512x512.png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: "https://www.belviorestate.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
