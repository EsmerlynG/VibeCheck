import { Fugaz_One, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "VibeCheck",
  description: "Track Your Mood Daily Year Round!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8  flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={"text_base sm:text-lg textGradient " + fugaz.
        className}>VibeCheck</h1>
      </Link>
      <Logout />
        
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={"text-indigo-500 " + fugaz.className}>
        Created by Esmerlyn Garabito with ❤️
      </p>
    </footer>
  );
  return (
    <html lang="en">
      <Head />
      <AuthProvider>
      <body
        className={
          "w-full max-w-[1000px] mx-auto  text-sm sm:text-base min-h-screen flex \
           flex-col text-slate-800  " +
          opensans.className}>
            {header}
            {children}
            {footer}
      </body>
      </AuthProvider>
    </html>
  );
}
