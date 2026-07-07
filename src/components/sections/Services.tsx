"use client";

import { motion } from "framer-motion";
import { DoorOpen, Sofa, CookingPot, Archive, Home, Wrench, Package, Tent } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    { icon: <DoorOpen size={32} />, title: "Kusen Kayu", desc: "Pembuatan kusen pintu dan jendela dari kayu pilihan." },
    { icon: <DoorOpen size={32} />, title: "Pintu Kayu", desc: "Pintu solid dan panel dengan desain modern & klasik." },
    { icon: <Home size={32} />, title: "Jendela Kayu", desc: "Jendela presisi tinggi untuk sirkulasi dan estetika." },
    { icon: <Sofa size={32} />, title: "Furniture Custom", desc: "Wujudkan furniture impian sesuai desain Anda." },
    { icon: <CookingPot size={32} />, title: "Kitchen Set", desc: "Kitchen set kayu elegan, fungsional, dan awet." },
    { icon: <Archive size={32} />, title: "Lemari", desc: "Lemari pakaian dan penyimpanan custom." },
    { icon: <Package size={32} />, title: "Meja & Kursi", desc: "Set meja makan, kursi tamu, dan meja kerja." },
    { icon: <Wrench size={32} />, title: "Renovasi Kayu", desc: "Perbaikan dan renovasi interior berbahan kayu." },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Layanan <span className="text-[var(--color-wood)]">Kami</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--color-wood)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Kami menawarkan berbagai macam layanan pembuatan produk kayu berkualitas tinggi untuk kebutuhan hunian dan bisnis Anda.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 group"
            >
              <div className="w-16 h-16 bg-[var(--color-wood)]/10 text-[var(--color-wood)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[var(--color-wood)] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.desc}
              </p>
              <Link href="#contact" className="inline-flex items-center text-[var(--color-wood)] font-semibold hover:gap-2 transition-all">
                Detail <span className="ml-1">&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
