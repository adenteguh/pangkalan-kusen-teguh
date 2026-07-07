"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Workshop Kayu Premium"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/80 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-wood)]/20 text-[var(--color-wood)] border border-[var(--color-wood)]/30 backdrop-blur-md text-sm font-semibold mb-6">
            Pangkalan Kusen Premium Jakarta
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Pangkalan Kusen <br className="hidden md:block" />
            <span className="text-[var(--color-wood)]">Teguh Jaya</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            Melayani Pembuatan Kusen, Pintu, Jendela, Furniture, Kitchen Set, Lemari, dan Berbagai Produk Kayu Berkualitas Sejak Bertahun-tahun.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="px-8 py-4 bg-[var(--color-wood)] hover:bg-[var(--color-wood-dark)] text-white rounded-full font-semibold transition-all flex items-center gap-2 hover:gap-3"
            >
              Hubungi Kami <Phone size={18} />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-full font-semibold transition-all flex items-center gap-2 hover:gap-3"
            >
              Lihat Produk <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:block"
        >
           {/* You can add a floating image or geometric element here if desired */}
        </motion.div>
      </div>
    </section>
  );
}
