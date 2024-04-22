// import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YuvSrijan",
  description: "Created by the team HackHustlers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        
        {children}
     
      <Footer/>
      </body>
    </html>
  );
}
