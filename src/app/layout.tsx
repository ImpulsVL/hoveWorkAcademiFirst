import type { Metadata } from "next";
import Header from "./components/header/header";
import Main from "./components/main/main";

import "./globals.css";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "First-work",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Header />
          <Main />
          <Footer />
          {/* {children} */}
        </div>
      </body>
    </html>
  );
}
