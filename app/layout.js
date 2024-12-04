import { Jost } from 'next/font/google'; 
import localFont from "next/font/local";
import "./globals.css";

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load Jost font from Google Fonts
const jost = Jost({
  weight: ['400', '500', '700'],  // Available weights (you can adjust based on your needs)
  subsets: ['latin'],             // Specify character sets to load (e.g., Latin)
  display: 'swap',                // Ensures text is displayed as soon as it's loaded
});

export const metadata = {
  title: "Coffee Shop",
  description: "Welcome to Coffee Shop! Enjoy the finest brewed coffee, a cozy atmosphere, and delicious snacks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${jost.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
