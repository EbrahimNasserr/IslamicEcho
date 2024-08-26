import { Amiri, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ProviderRedux from "@/services/Provider";
import Providers from "./Providers";
import Footer from "@/components/Footer";

const amiri = Amiri({
  weight: ['400', '700'],  // Specify the weights you want to use
  subsets: ['arabic'],  // Specify the Arabic subset for Amiri
  variable: '--font-amiri',  // Custom variable for Amiri
});

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});
export const metadata = {
  title: "IslamicEcho",
  description: "Discover the beauty of Islam with IslamicEcho. Access accurate prayer times, listen to Quranic recitations by renowned sheikhs, and explore Islamic teachings. Easily search and listen to Surahs, and stay connected with your faith wherever you are.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${amiri.variable} ${roboto.variable}`}>
        <ProviderRedux>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ProviderRedux>
      </body>
    </html>
  );
}
