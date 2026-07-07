import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pangkalan Kusen Teguh Jaya | Jasa Pembuatan Kusen Kayu, Pintu, Furniture & Kitchen Set Jakarta Timur",
  description: "Pangkalan Kusen Teguh Jaya melayani pembuatan kusen kayu, pintu, jendela, kitchen set, furniture custom, lemari, meja, kursi dan berbagai produk kayu berkualitas di Jakarta Timur.",
  keywords: ["kusen kayu Jakarta Timur", "toko kusen Jakarta", "furniture custom Jakarta", "kitchen set Jakarta", "pintu kayu", "jendela kayu", "mebel Jakarta Timur", "Pangkalan Kusen Teguh Jaya"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
