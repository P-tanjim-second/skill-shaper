import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300" ,"400", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});


export const cabinetGrotesk = localFont({
  src: [
    { 
      path: "../../../public/fonts/CabinetGrotesk-Regular.woff2", 
      weight: "400" 
    },
    { 
      path: "../../../public/fonts/CabinetGrotesk-Medium.woff2",  
      weight: "500" 
    },
    { 
      path: "../../../public/fonts/CabinetGrotesk-Semibold.woff2", 
      weight: "600" 
    },
    { 
      path: "../../../public/fonts/CabinetGrotesk-Bold.woff2",    
      weight: "700" 
    },
    { 
      path: "../../../public/fonts/CabinetGrotesk-ExtraBold.woff2",    
      weight: "800" 
    },
  ],
  variable: "--font-sans",
  display: "swap",
});