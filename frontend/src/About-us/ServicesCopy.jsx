import { motion } from "framer-motion";
import digital from "../assets/boxes.png";
import largeformat from "../assets/graphic-design.png";
import design from "../assets/offset.png";
import finishing from "../assets/printing.png";

export default function Services() {
  return (
    <section className="w-full min-h-screen flex items-center bg-white px-4 md:px-10 lg:px-18 py-12">
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          Our Printing Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <ServiceCard
            icon={
              <img
                src={design}
                alt="Digital Printing"
                className="w-10 h-10 object-contain"
              />
            }
            title={
              <>
               Offset and Digital<br /> Printing
              </>
            }
            description={`Digital and Offset Printing help turn your ideas into beautifully printed materials. Digital printing is perfect for quick jobs and smaller quantities. Offset printing delivers rich colors and consistent quality for large runs.`}
          />

          <ServiceCard
            icon={
              <img
                src={finishing}
                alt="Large Format Printing"
                className="w-10 h-10 object-contain"
              />
            }
            title={
              <>
                Large Format <br /> Printing
              </>
            }
            description={`Large Format Printing is designed to make your message stand out. It’s ideal for banners, posters, and eye-catching displays. We deliver sharp visuals, vibrant colors, and durable prints. Perfect for creating impact at any scale.`}
          />

          <ServiceCard
            icon={
              <img
                src={largeformat}
                alt="Graphic Design"
                className="w-10 h-10 object-contain"
              />
            }
            title="Graphic Design"
            description={`Graphic Design brings ideas, stories, and brands to life visually. We create designs that are clear, creative, and meaningful. From logos to marketing materials, every detail is crafted with care. Our designs help your brand connect and stand out.`}
          />

          <ServiceCard
            icon={
              <img
                src={digital}
                alt="Finishing Services"
                className="w-10 h-10 object-contain"
              />
            }
            title="Finishing Services"
            description={`Finishing Services add the final touch that makes a difference. We enhance prints with precise cutting, binding, and folding. Each detail is handled with care for a polished look. The result is a professional, ready-to-use finish.`}
          />

        </div>
      </div>
    </section>
  );
}

/* ================= Service Card Component ================= */

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#d2e6ec] p-8 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="mb-6 flex justify-center"
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </motion.div>
  );
}
