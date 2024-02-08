import "./globals.css";
import Nav from "./nav";
import Head from "next/head";
import { Pixelify_Sans, Inconsolata } from "next/font/google";
import Logo from "./_componets/logo";

export const metadata = {
  title: "Trove",
  description:
    "Trove Theater Company is a New York City-based theatre and live arts collective. We create radical, delightful, and really good art with and for the people we love.",
  keywords:
    "Trove, Theater, Trove Theater Company, New York, Live Arts, Collective, Community",
};

const pixelfy = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelfy-sans",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pixelfy.variable} ${inconsolata.variable}`}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Nav />
        <Logo />

        <div className="children">{children}</div>
      </body>
    </html>
  );
}
export const revalidate = 60;
