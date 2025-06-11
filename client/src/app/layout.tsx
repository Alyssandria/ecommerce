import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
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
        className={`${montserrat} ${montserrat} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
