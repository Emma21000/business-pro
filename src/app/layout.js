"use client";
import { navbarData } from "../../data/navbar";
import { EB_Garamond, Playfair_Display } from  'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";

const playfair_display = Playfair_Display({
subsets: ["latin"],
weight: "400",
variable: "--font-Elms-Sans",
})

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-EB_Garamond"
})


export default  function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${playfair_display.variable} ${eb_garamond.variable}`}>
          <Navbar data={navbarData} />
          {children}
        </body>
      </html>
    );
}
 