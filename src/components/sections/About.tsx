"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Bertahun-tahun pengalaman", value: "10+" },
    { label: "Ratusan pelanggan puas", value: "500+" },
    { label: "Pengerjaan profesional", value: "100%" },
    { label: "Material berkualitas", value: "Grade A" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#121212]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about-img.png"
              alt="Tentang Kami - Pengrajin Kayu"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass p-6 rounded-2xl">
                <p className="text-white font-medium text-lg">
                  "Mengutamakan kualitas material, ketepatan pengerjaan, serta kepuasan pelanggan."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Tentang <span className="text-[var(--color-wood)]">Kami</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--color-wood)] mb-8 rounded-full"></div>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              Pangkalan Kusen Teguh Jaya merupakan usaha yang bergerak di bidang pembuatan kusen, pintu, jendela, furniture custom, kitchen set, lemari, meja, kursi, dan berbagai kebutuhan kayu berkualitas.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="text-3xl font-bold text-[var(--color-wood)]">{stat.value}</h3>
                  <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm font-medium">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
