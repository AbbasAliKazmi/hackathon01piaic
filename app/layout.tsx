import "../app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./(site)/components/global/Navbar";
import Footer from "./(site)/components/global/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abbas's Portfolio Site",
  metadataBase: new URL("https://sanity-nextjs-site.vercel.app"),
  description: "Abbas's Personal Portfolio site built with Sanity and Next.js",
  openGraph: {
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1689893059/docs/og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}