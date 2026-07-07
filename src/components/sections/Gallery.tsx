"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const categories = ["Semua", "Kusen", "Pintu", "Jendela", "Kitchen Set", "Furniture"];

const photos = [
  { src: "/images/hero-bg.png", width: 800, height: 600, category: "Kitchen Set" },
  { src: "/images/about-img.png", width: 800, height: 800, category: "Pintu" },
  { src: "/images/gallery-1.png", width: 800, height: 500, category: "Furniture" },
  // Adding placeholders for variety
  { src: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", width: 800, height: 600, category: "Kusen" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", width: 800, height: 1000, category: "Furniture" },
  { src: "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", width: 800, height: 533, category: "Jendela" },
  { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", width: 800, height: 1200, category: "Kitchen Set" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("Semua");
  const [index, setIndex] = useState(-1);

  const filteredPhotos = filter === "Semua" 
    ? photos 
    : photos.filter(photo => photo.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-[#121212]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Galeri <span className="text-[var(--color-wood)]">Hasil Karya</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--color-wood)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Koleksi foto hasil pengerjaan kami yang telah memuaskan ratusan pelanggan.
            </p>
          </motion.div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-[var(--color-wood)] text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PhotoAlbum
            layout="masonry"
            photos={filteredPhotos}
            onClick={({ index }) => setIndex(index)}
            spacing={16}
            columns={(containerWidth) => {
              if (containerWidth < 640) return 1;
              if (containerWidth < 1024) return 2;
              return 3;
            }}
          />
        </motion.div>

        <Lightbox
          slides={filteredPhotos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
}
