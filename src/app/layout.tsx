import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./Pages/NavBar/ResponsiveNav";

const inter = Inter({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gradient-to-b from-[#0f1627] to-[#07101d] min-h-screen`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
