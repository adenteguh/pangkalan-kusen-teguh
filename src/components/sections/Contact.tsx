"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Hubungi <span className="text-[var(--color-wood)]">Kami</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--color-wood)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Konsultasikan kebutuhan produk kayu Anda dengan kami. Kami siap memberikan penawaran terbaik.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info & Maps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Informasi Toko</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-wood)]/10 text-[var(--color-wood)] flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Alamat</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Jl. Munggang No. 2, RT 10/RW 04, Kelurahan Balekambang, Kecamatan Kramat Jati, Jakarta Timur, DKI Jakarta 13530
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-wood)]/10 text-[var(--color-wood)] flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Telepon / WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-400">0858-8284-6926</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-wood)]/10 text-[var(--color-wood)] flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Jam Operasional</h4>
                    <p className="text-gray-600 dark:text-gray-400">Senin - Minggu<br/>07.00 - 17.00 WIB</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-sm relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0125740417676!2d106.85532551476935!3d-6.2844883954519965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f29d2b270035%3A0xb351e3c834a3dbbc!2sJl.%20Munggang%20No.2%2C%20RT.10%2FRW.4%2C%20Balekambang%2C%20Kec.%20Kramat%20jati%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013530!5e0!3m2!1sen!2sid!4v1688647000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            <a href="https://maps.google.com/?q=Jl.+Munggang+No.2+RT+10%2FRW+04+Balekambang+Kramat+Jati" target="_blank" rel="noopener noreferrer" className="inline-block w-full py-4 text-center bg-white dark:bg-[#1a1a1a] text-[var(--color-wood)] font-bold rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-[var(--color-wood)] hover:text-white transition-all">
              Buka di Google Maps
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="bg-white dark:bg-[#1a1a1a] p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Kirim Pesan</h3>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nama Lengkap</label>
                <input type="text" id="name" placeholder="Masukkan nama Anda" className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-wood)] transition-all" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nomor HP / WhatsApp</label>
                <input type="tel" id="phone" placeholder="Contoh: 08123456789" className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-wood)] transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email (Opsional)</label>
                <input type="email" id="email" placeholder="Masukkan email Anda" className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-wood)] transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="product" className="text-sm font-medium text-gray-700 dark:text-gray-300">Jenis Produk</label>
                <select id="product" className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-wood)] transition-all text-gray-700 dark:text-gray-300 appearance-none">
                  <option value="">Pilih Jenis Produk</option>
                  <option value="kusen">Kusen Kayu</option>
                  <option value="pintu">Pintu Kayu</option>
                  <option value="jendela">Jendela</option>
                  <option value="kitchenset">Kitchen Set</option>
                  <option value="furniture">Furniture Custom</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Pesan / Detail Pesanan</label>
                <textarea id="message" rows={4} placeholder="Ceritakan detail pesanan Anda..." className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-wood)] transition-all"></textarea>
              </div>

              <button type="button" className="w-full py-4 mt-4 bg-[var(--color-wood)] hover:bg-[var(--color-wood-dark)] text-white font-bold rounded-xl shadow-lg transition-colors">
                Kirim Pesanan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
