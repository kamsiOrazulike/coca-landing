import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../public/static/fonts/virgo.ttf" });

export const metadata: Metadata = {
  title: "Coccaaina Home",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={myFont.className}>{children}</body>
      </html>
    </>
  );
}
