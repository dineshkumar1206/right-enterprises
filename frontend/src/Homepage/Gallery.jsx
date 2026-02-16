import { motion } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null); // for desktop lightbox
  const [mobileIndex, setMobileIndex] = useState(0); // for mobile slider

  const images = [
    "/image/022.jpg",
    "/image/044.jpg",
    "/image/01.webp",
    "/image/144.jpg",
    "/image/NSK Brochure.jpg",
  ];

  const prevSlide = () => {
    setMobileIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setMobileIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section className="w-full bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Gallery
          </h2>

          {/* ================= Desktop Collage ================= */}
          <div className="hidden md:flex gap-6 h-[750px]">

            {/* LEFT SIDE */}
            <div className="w-1/2 flex flex-col gap-6">

              <div className="grid grid-cols-2 gap-6 h-[35%]">
                <ImageBox src={images[0]} onClick={setActiveImage} />
                <ImageBox src={images[1]} onClick={setActiveImage} />
              </div>

              <div className="h-[65%]">
                <ImageBox src={images[3]} onClick={setActiveImage} />
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/2 flex flex-col gap-6">

              <div className="h-1/2">
                <ImageBox src={images[2]} onClick={setActiveImage} />
              </div>

              <div className="h-1/2">
                <ImageBox src={images[4]} onClick={setActiveImage} />
              </div>

            </div>

          </div>

          {/* ================= Mobile Slider ================= */}
          <div className="md:hidden relative w-full max-w-md mx-auto">

            {/* Image */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-lg">
              <motion.img
                key={mobileIndex}
                src={images[mobileIndex]}
                alt="gallery"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"
            >
              ❮
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"
            >
              ❯
            </button>

          </div>

        </div>
      </section>

      {/* ================= Desktop Lightbox ================= */}
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <motion.img
            src={activeImage}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-[90%] rounded-xl shadow-2xl"
          />
        </motion.div>
      )}
    </>
  );
}

function ImageBox({ src, onClick, className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(src)}
      className={`relative w-full h-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl cursor-pointer ${className}`}
    >
      <img
        src={src}
        alt="gallery"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  );
}
