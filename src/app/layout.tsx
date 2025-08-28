
import Navbar from "@/components/navbar";
import "./globals.css";
import Home from "./page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
       
       
        {children}
      </body>
    </html>
  );
}
