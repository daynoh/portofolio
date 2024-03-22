import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musingila | Personal Portofolio",
  description: "Musingila is A FullStack Datascientist with 2 years experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grey-50 text-gray-950 relative pt-28 sm:pt-36`}>

        <div className="-z-10 bg-[#e2ebfb] absolute top-[-6rem] right-[11rem] 
                        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
                        sm:w-[68.75rem]"></div>
        <div className="-z-10 bg-[#3a8ebe] absolute top-[-1rem] left-[-35rem] 
                        h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
                        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:[-15rem]
                        2xl:left-[-5rem]"></div>

          <Header/>
     
        {children}
      </body>
    </html>
  );
}
