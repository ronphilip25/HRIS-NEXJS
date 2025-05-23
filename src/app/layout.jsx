import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarProvider } from "@/context/NavbarContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarProvider>{children}</NavbarProvider>
      </body>
    </html>
  );
}
