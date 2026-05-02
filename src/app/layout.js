import "./globals.css";
import { fraunces, dmSans, jetbrainsMono, cabinetGrotesk } from "@/app/font/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Skill Sphere",
  description: "A skill learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`
        ${fraunces.variable}
        ${dmSans.variable}
        ${jetbrainsMono.variable}
        ${cabinetGrotesk.variable}
         h-full antialiased
      `}
    >
      <body className="min-h-full font-family-body flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
