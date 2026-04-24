import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./Pages/NavBar/ResponsiveNav";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Muhammad Ahmad | Software Engineer",
  description:
    "Portfolio of Muhammad Ahmad, a full-stack developer specialized in modern web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
