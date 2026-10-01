import type { Metadata } from "next";
import { Syne, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bytesbuild.app"),
  title: {
    default: "BytesBuild — Product engineering studio",
    template: "%s · BytesBuild",
  },
  description:
    "BytesBuild LLC is a boutique software studio that designs, builds, and ships durable digital products with founders and product teams.",
  openGraph: {
    title: "BytesBuild — Product engineering studio",
    description:
      "Boutique software and product engineering. From prototype to production — clear craft, sharp delivery.",
    url: "https://bytesbuild.app",
    siteName: "BytesBuild",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BytesBuild — Product engineering studio",
    description:
      "Boutique software and product engineering. From prototype to production.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-ink">{children}</body>
    </html>
  );
}
