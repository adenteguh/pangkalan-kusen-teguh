"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CircleDollarSign, CheckSquare, BadgeCheck, Clock, Settings2 } from "lucide-react";

export default function Advantages() {
  const features = [
    { icon: <ShieldCheck size={28} />, title: "Material Berkualitas", desc: "Hanya menggunakan kayu pilihan terbaik." },
    { icon: <CircleDollarSign size={28} />, title: "Harga Kompetitif", desc: "Kualitas premium dengan harga bersahabat." },
    { icon: <CheckSquare size={28} />, title: "Pengerjaan Rapi", desc: "Detail dan presisi tinggi." },
    { icon: <BadgeCheck size={28} />, title: "Bergaransi", desc: "Jaminan kualitas untuk setiap produk." },
    { icon: <Clock size={28} />, title: "Tepat Waktu", desc: "Selesai sesuai dengan estimasi." },
    { icon: <Settings2 size={28} />, title: "Custom Desain", desc: "Bebas menentukan desain sesuai keinginan." },
  ];

  return (
    <section className="py-24 bg-[var(--color-wood)] dark:bg-[#1a1a1a] relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Mengapa Memilih Kami?
            </h2>
            <div className="w-20 h-1 bg-white/30 mx-auto mb-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex gap-4 items-start hover:bg-white/20 transition-all text-white"
            >
              <div className="bg-white text-[var(--color-wood)] p-3 rounded-xl shadow-lg shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
