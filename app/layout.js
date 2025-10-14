import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OverContextProvider from "./OverContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "  LÁFÚN | Proudly Ìbílè. Purely LÁFÚN.",
  description: "LÁFÚN brings you the true taste of tradition, crafted from the most authentic roots.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OverContextProvider>
          {children}
        </OverContextProvider>
      </body>
    </html>
  );
}
