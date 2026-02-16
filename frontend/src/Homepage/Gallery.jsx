import { motion } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [active, setActive] = useState(null);

  const images = [
    "/image/022.jpg",
    "/image/044.jpg",
    "/image/01.webp",
    "/image/144.jpg",
    "/image/NSK Brochure.jpg",
  ];

  return (
    <>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-10 text-center ">
        Gallery
    </h2>
      <section className="w-full h-screen bg-gray-50 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full h-[90vh] flex flex-col gap-6">

          {/* Top 2 Images */}
          <div className="flex gap-6 h-1/2">
            {images.slice(0, 2).map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActive(src)}
                className="flex-1 overflow-hidden rounded-2xl shadow-md hover:shadow-xl cursor-pointer"
              >
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom 3 Images */}
          <div className="flex gap-6 h-1/2">
            {images.slice(2, 5).map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActive(src)}
                className="flex-1 overflow-hidden rounded-2xl shadow-md hover:shadow-xl cursor-pointer"
              >
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <motion.img
            src={active}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-[90%] rounded-xl shadow-2xl"
          />
        </motion.div>
      )}
    </>
  );
}
