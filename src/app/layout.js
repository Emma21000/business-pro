import { navbarData } from "../../data/navbar";
import Navbar from "./component/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar data={navbarData} />
        {children}
      </body>
    </html>
  );
}
