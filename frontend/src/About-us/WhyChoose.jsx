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
    desc: "At Right Enterprises Printing Service, we are dedicated to delivering top-quality printed materials that exceed your expectations. Our commitment to excellence ensures that every project is handled with the utmost care and attention to detail.",
  },
  {
    title: "Collaborative Approach",
    desc: "We believe in working closely with our clients to understand their vision and bring it to life through our printing solutions.",
  },
  {
    title: "Timely Delivery",
    desc: "We understand the importance of timelines in the printing industry. you can expect prompt and reliable delivery.",
  },
  {
    title: "Detail Oriented",
    desc: "We strive to provide detail-oriented and personalized services that reflect your needs.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#d2e6ec] py-14 mt-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14">

        {/* LEFT SIDE HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why <br />
            Choose <br />
            Right <br />
            Enterprises
          </h2>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div className="md:w-1/2 flex flex-col gap-8">

          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-6">

              {/* Number Box */}
              <motion.div
                custom={i}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="min-w-[80px] min-h-[80px] bg-[#1A1F1E] text-white text-3xl font-bold flex items-center justify-center rounded-lg"
              >
                {i + 1}
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
