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
    icon: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69db44e6a4e6aa34cbecb891.png",
    shortcut: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69db44e6a4e6aa34cbecb891.png",
    apple: "https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69db44e6a4e6aa34cbecb891.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
