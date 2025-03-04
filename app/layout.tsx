import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/Navbar";


const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Django airbnb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        <NavBar/>
        <div className="pt-24">
        {children}
        </div>
      </body>
    </html>
  );
}
