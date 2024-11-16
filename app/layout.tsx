import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Noto_Sans } from "next/font/google";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import styles from "./page.module.css";
import AOSComponent from "@/SharedComponents/AOSComponent";
const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Butter Mag",
  description: "Butter Mag Description placeholder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto_sans.className}>
      <body>
        <AOSComponent>
          <Header />
          <div className={styles.layoutContainer}>{children}</div>
          <Footer />
        </AOSComponent>
      </body>
    </html>
  );
}
