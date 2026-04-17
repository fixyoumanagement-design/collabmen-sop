import localFont from "next/font/local"

export const fontSans = localFont({
  src: "../public/fonts/geist-latin.woff2",
  variable: "--font-sans",
  display: "swap",
})

export const fontMono = localFont({
  src: "../public/fonts/geist-mono-latin.woff2",
  variable: "--font-mono",
  display: "swap",
})
