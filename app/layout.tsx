import "./globals.css";
import "./main.css";
import "./fontawesome-all.min.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontawesomeBrands = localFont({
  src: "./webfonts/fa-brands-400.woff2",
  display: "swap",
  variable: "--font-awesome-brands",
});

const fontawesomeFree = localFont({
  src: [
    {
      path: "./webfonts/fa-regular-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./webfonts/fa-solid-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-awesome-free",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontawesomeBrands.variable} ${fontawesomeFree.variable} `}
    >
      <body>{children}</body>
    </html>
  );
}
