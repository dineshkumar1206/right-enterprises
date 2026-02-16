import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="w-full min-h-screen flex items-center bg-white px-4 md:px-10 lg:px-18 py-12">
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          Our Printing Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Service Box 1 */}
          <div className="bg-[#d2e6ec] p-8 md:p-10">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xl md:text-2xl font-bold text-gray-900 leading-snug"
            >
              Digital and Offset <br /> Printing
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.25 } },
              }}
              className="mt-4"
            >
              <motion.h4
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-base font-semibold text-gray-900 mb-2"
              >
                Customized Solutions
              </motion.h4>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-sm text-gray-700 leading-relaxed"
              >
                We provide personalized printing services designed to meet your
                specific needs. Our experts work closely with you to create
                customized printing solutions that align with your brand and
                deliver exceptional results.
              </motion.p>
            </motion.div>
          </div>

          {/* Service Box 2 */}
          <div className="bg-[#d2e6ec] p-8 md:p-10">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-bold text-gray-900 leading-snug"
            >
              Large Format <br /> Printing
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.25 } },
              }}
              className="mt-4"
            >
              <motion.h4
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-base font-semibold text-gray-900 mb-2"
              >
                Expert Consultation
              </motion.h4>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-sm text-gray-700 leading-relaxed"
              >
                Our large format printing services ensure high-quality outputs for
                your large-scale promotional materials. Let us handle the
                complexities of large format printing so you can showcase your
                brand with confidence.
              </motion.p>
            </motion.div>
          </div>

          {/* Service Box 3 */}
          <div className="bg-[#d2e6ec] p-8 md:p-10">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-bold text-gray-900 leading-snug"
            >
              Graphic Design
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.25 } },
              }}
              className="mt-4"
            >
              <motion.h4
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-base font-semibold text-gray-900 mb-2"
              >
                Creative Solutions
              </motion.h4>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-sm text-gray-700 leading-relaxed"
              >
                Our graphic design services are designed to bring your ideas to
                life. From concept to creation, we ensure that your designs are
                visually captivating and aligned with your brand identity.
              </motion.p>
            </motion.div>
          </div>

          {/* Service Box 4 */}
          <div className="bg-[#d2e6ec] p-8 md:p-10">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-bold text-gray-900 leading-snug"
            >
              Finishing Services
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.25 } },
              }}
              className="mt-4"
            >
              <motion.h4
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-base font-semibold text-gray-900 mb-2"
              >
                Quality Assurance
              </motion.h4>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-sm text-gray-700 leading-relaxed"
              >
                We provide professional finishing services to give your printed
                materials a polished look. From binding to laminating, we ensure
                that your printed products meet the highest standards of quality
                and professionalism.
              </motion.p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
