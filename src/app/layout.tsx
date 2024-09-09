import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Moonlit Sirens",
  description:
    "We are Moonlit Sirens, a group of passionate musicians dedicated to crafting unforgettable experiences through our music. From soulful ballads to electrifying rock anthems, our sound is a fusion of R&B and Soul that resonates with listeners from all walks of life. Join us on our musical journey as we share our latest tracks, exclusive behind-the-scenes content, and upcoming tour dates. Whether you're here to discover new music or stay up-to-date with our latest performances, we're thrilled to have you as part of our growing community. Let the music move you – explore our site and dive into the world of Moonlit Sirens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
