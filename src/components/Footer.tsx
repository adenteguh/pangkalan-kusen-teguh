"use client";

import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#0a0a0a] pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[var(--color-wood)] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                TJ
              </div>
              <div>
                <h2 className="font-bold text-lg leading-tight">Teguh Jaya</h2>
              </div>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Pangkalan Kusen Teguh Jaya melayani pembuatan kusen kayu, pintu, jendela, furniture custom, dan berbagai produk kayu berkualitas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[var(--color-wood)] dark:hover:text-[var(--color-wood)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[var(--color-wood)] dark:hover:text-[var(--color-wood)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Menu Utama</h3>
            <ul className="space-y-3">
              {['Home', 'Tentang Kami', 'Layanan', 'Galeri', 'Kontak', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-wood)] dark:hover:text-[var(--color-wood)] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Layanan</h3>
            <ul className="space-y-3">
              {['Kusen & Pintu', 'Furniture Custom', 'Kitchen Set', 'Renovasi Interior'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-wood)] dark:hover:text-[var(--color-wood)] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--color-wood)] mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Jl. Munggang No. 2, RT 10/RW 04, Kelurahan Balekambang, Kecamatan Kramat Jati, Jakarta Timur, DKI Jakarta 13530
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--color-wood)] flex-shrink-0" />
                <span className="text-sm text-gray-500 dark:text-gray-400">0858-8284-6926</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--color-wood)] flex-shrink-0" />
                <span className="text-sm text-gray-500 dark:text-gray-400">info@teguhjaya.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            &copy; {currentYear} Pangkalan Kusen Teguh Jaya. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <Link href="#" className="hover:text-[var(--color-wood)]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--color-wood)]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
