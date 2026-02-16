import { motion } from "framer-motion";

const textVariants = {
  hidden: { x: -80, opacity: 0 },
  visible: (i = 1) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const items = [
  {
    title: "Quality Assurance",
    desc: "At J. Brooks Printing Service, we are dedicated to delivering top-quality printed materials that exceed your expectations. Our commitment to excellence ensures that every project is handled with the utmost care and attention to detail.",
  },
  {
    title: "Collaborative Approach",
    desc: "We believe in working closely with our clients to understand their vision and bring it to life through our printing solutions. Your input is valuable, and we strive to provide detail-oriented and personalized services that reflect your needs.",
  },
   {
    title: "Timely Delivery",
    desc: "We understand the importance of timelines in the printing industry. With J. Brooks, you can expect prompt and reliable delivery of your printed materials, ensuring that your projects stay on schedule and meet your deadlines.",
  },
   {
    title: "Collaborative Approach",
    desc: "We believe in working closely with our clients to understand their vision and bring it to life through our printing solutions. Your input is valuable, and we strive to provide detail-oriented and personalized services that reflect your needs.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#d2e6ec] py-18 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-20"
        >
          Why Choose Right Enterprises
        </motion.h2>

        {/* Content */}
        <div className="flex flex-col gap-24 items-start">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start gap-10 w-full max-w-3xl justify-start">
              {/* Number Box */}
              <motion.div
                custom={i}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="min-w-[96px] min-h-[96px] bg-[#1A1F1E] text-white text-5xl font-bold flex items-center justify-center rounded"
              >
                {i + 1}
              </motion.div>

              {/* Right Text */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.25 },
                  },
                }}
                className="flex flex-col gap-4 max-w-2xl"
              >
                <motion.h3
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-2xl md:text-3xl font-bold text-gray-900"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-gray-700 leading-relaxed"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


