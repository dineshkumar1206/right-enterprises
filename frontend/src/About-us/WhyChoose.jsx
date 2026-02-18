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
    desc: "At Right Enterprises, quality is at the heart of everything we do. We follow strict checks at every stage to ensure flawless prints and finishes. Our commitment guarantees consistency, precision, and results you can trust every time.",
  },
  {
    title: "Collaborative Approach",
    desc: "We believe the best results come from working closely with our clients.We listen, collaborate, and adapt at every stage of the project. This partnership-driven approach ensures your vision is brought to life with precision and care.",
  },
  {
    title: "Timely Delivery",
    desc: "We understand that deadlines matter.Our streamlined processes and efficient production ensure every project is completed on schedule. You can rely on us for prompt delivery without compromising on quality.",
  },
  {
    title: "Detail Oriented",
    desc: "We pay close attention to every detail, no matter how small.From design accuracy to final finishing, precision guides our process. This focus ensures high-quality results that meet the highest standards.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#d2e6ec] py-14 mt-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

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
        <div className="md:w-1/2 flex flex-col gap-4">

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
