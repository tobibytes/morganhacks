import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navbar/Navbar";


export const metadata: Metadata = {
  title: "Morgan Hacks",
  description: "This is Morgan Hacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
    <html lang="en">
      <body
        className={`w-full h-full`}  style={ {backgroundImage: "url('assets/space-background.jpg')"} }
        >

        <NavBar>
        {children}
        </NavBar>
      </body>
    </html>
  );
}
