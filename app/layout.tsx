
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/themeSwitch";
import ThemeContextProvider from "@/context/themeContextProvider";

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
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-grey-50 text-gray-950 relative pt-28 sm:pt-36
                      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>

        <div className="-z-10 bg-[#e2ebfb] absolute top-[-6rem] right-[11rem] 
                        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
                        sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="-z-10 bg-[#3a8ebe] absolute top-[-1rem] left-[-35rem] 
                        h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
                        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:[-15rem]
                        2xl:left-[-5rem] dark:bg-[#676394]"></div>

          <ThemeContextProvider>

            <ActiveSectionContextProvider>
              <Header/>
        
              {children}
              <Toaster position="top-right"/>
              <Footer/>
            </ActiveSectionContextProvider>
            <ThemeSwitch/>
          </ThemeContextProvider>
          
          
      </body>
    </html>
  );
}
