"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Bapak Budi",
      text: "Pengerjaan sangat rapi, kusen kuat dan presisi. Terima kasih Teguh Jaya!",
      rating: 5,
    },
    {
      name: "Ibu Siti",
      text: "Harga bersaing dan hasil sangat memuaskan. Kitchen set saya jadi sangat elegan.",
      rating: 5,
    },
    {
      name: "Andi Wijaya",
      text: "Furniture custom sesuai keinginan. Material kayunya benar-benar grade A. Recommended!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white dark:bg-[#121212]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Apa Kata <span className="text-[var(--color-wood)]">Pelanggan?</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--color-wood)] mx-auto mb-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 text-[var(--color-wood)]/10 -translate-x-4 -translate-y-8 z-0">
            <Quote size={120} />
          </div>

          <div className="relative z-10 bg-gray-50 dark:bg-[#1a1a1a] rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 dark:border-gray-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed font-light">
                  "{testimonials[currentIndex].text}"
                </p>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-[var(--color-wood)] hover:text-white hover:border-[var(--color-wood)] transition-all"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-[var(--color-wood)] hover:text-white hover:border-[var(--color-wood)] transition-all"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
