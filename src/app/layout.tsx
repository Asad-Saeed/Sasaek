import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/component/layout/footer";
import Header from "@/component/layout/header";
import { MediaQueriesProvider } from "@/component/common/hooks/mediaQuery";

const pilatExtended = localFont({
  src: [
    {
      path: "./fonts/pilat-extended/PilatExtended-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/pilat-extended/PilatExtended-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/pilat-extended/PilatExtended-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pilat",
});

export const metadata: Metadata = {
  title: "Sasaek",
  description: "Sasaek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pilatExtended.variable}>
      <body className={`antialiased bg-[#FFFFFF]`}>
        <MediaQueriesProvider>
          <Header />
          {children}
          <Footer />
        </MediaQueriesProvider>
      </body>
    </html>
  );
}
