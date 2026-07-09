import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import { NavBar, Footer } from "@/components/layout";
import { OrganizationSchema, SoftwareApplicationSchema } from "@/components/seo";
import { ThemeProvider } from "@/components/theme";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ECG",
    "electrocardiogram",
    "cardiac",
    "heart",
    "diagnostics",
    "medical software",
    "Glasgow",
    "algorithm",
    "interpretation",
    "arrhythmia",
    "healthcare",
    "OEM",
  ],
  authors: [{ name: "University of Glasgow Electrocardiology Group" }],
  creator: "University of Glasgow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    // og:image is supplied by app/opengraph-image.tsx (App Router convention).
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // Twitter falls back to the Open Graph image from app/opengraph-image.tsx.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Favicon and apple-touch icon are supplied by app/icon.svg and app/apple-icon.tsx.
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#011451",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <head>
        <OrganizationSchema />
        <SoftwareApplicationSchema />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-medium"
          >
            Skip to main content
          </a>
          <NavBar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
