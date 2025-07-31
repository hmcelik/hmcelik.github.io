import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Huseyin Melih Celik | Software & Robotics Engineer",
  description: "Computer Science student at TU/e specializing in robotics, autonomous systems, and full-stack development. Building intelligent systems from ROS-based rescue robots to modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
