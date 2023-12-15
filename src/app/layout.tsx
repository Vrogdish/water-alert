import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/modules/header/Header";
import Footer from "@/modules/footer/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piézométrie",
  description: "Analyse des niveaux des nappes phréatiques en France",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <div className="absolute  -z-10 w-full ">
          <div className=" relative m-auto w-full">
            <Image
              src={"/images/mountains.webp"}
              alt="montagnes"
              width={1980}
              height={1024}
              priority
              className="saturate-50 h-full  object-top brightness-75 mx-auto "
            />
            <div className="bg-gradient-to-b from-transparent to-[#0B1D26] w-full h-full absolute top-0 "></div>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
