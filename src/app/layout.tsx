import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Astral Technology | Your Startup's Dedicated Technology Team",
  description:
    "Build and scale your startup with a dedicated technology team. Full-stack development, design, and DevOps — everything you need to move fast.",
  icons: {
    icon: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69e3e970c56ad27908b655ad.png",
    shortcut: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69e3e970c56ad27908b655ad.png",
    apple: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69e3e970c56ad27908b655ad.png",
  },
  openGraph: {
    title: "Astral Technology | Your Startup's Dedicated Technology Team",
    description:
      "Build and scale your startup with a dedicated technology team. Full-stack development, design, and DevOps — everything you need to move fast.",
    images: [
      "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69e3e970c56ad27908b655ad.png",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astral Technology | Your Startup's Dedicated Technology Team",
    description:
      "Build and scale your startup with a dedicated technology team. Full-stack development, design, and DevOps — everything you need to move fast.",
    images: [
      "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69e3e970c56ad27908b655ad.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.cdnfonts.com/css/neue-montreal"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
