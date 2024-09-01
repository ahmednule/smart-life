import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importing the fontawesome stypes manually
import "@fortawesome/fontawesome-svg-core/styles.css";

// Get the configuration object
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/page/home-page/Footer";
import Header from "@/components/ui/header/Header";

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "smartLife",
  description: "Revolutionizing the transportation industry with an AI powered platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <Toaster />
      <Header />
      {children}
      <Footer />
      </Providers>
      </body>
    </html>
  );
}
