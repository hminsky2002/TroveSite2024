import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./nav";
import Head from "next/head";

const pixelfy = Pixelify_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Trove",
  description:
    "Trove Theater Company is a New York City-based theatre and live arts collective. We create radical, delightful, and really good art with and for the people we love.",
  keywords:
    "Trove, Theater, Trove Theater Company, New York, Live Arts, Collective, Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={pixelfy.className}>
        <Nav />
        <div
          className="children"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
export const revalidate = 60;
