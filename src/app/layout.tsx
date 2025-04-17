import type { Metadata } from "next";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import "./globals.css";
import localFont from "next/font/local";
import HeroUIProvider from "@/component/common/provider/heroUIProvider";
import Footer from "@/component/layout/footer";
import Header from "@/component/layout/header";
import { MediaQueriesProvider } from "@/component/common/hooks/mediaQuery";
import ApploClientProvider from "@/component/common/provider/apploClientProvider";

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

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

export const metadata: Metadata = {
  title: "Gymstar",
  description: "Gymstar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pilatExtended.variable}>
      <body className={`antialiased`}>
        <MediaQueriesProvider>
          <HeroUIProvider>
            <Header />
            <ApploClientProvider>{children}</ApploClientProvider>
            <Footer />
          </HeroUIProvider>
        </MediaQueriesProvider>
      </body>
    </html>
  );
}
