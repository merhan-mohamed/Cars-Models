import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar , Footer} from "@/components";




export const metadata = {
  title: "Car Hub",
  description: "Discover The Best Cars In The World.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
