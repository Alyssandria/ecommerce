import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "loremipsum",
  description: "Upgrade fashion a click away",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
