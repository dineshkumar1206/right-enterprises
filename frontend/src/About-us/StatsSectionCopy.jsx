import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const imageVariants = {
    hidden: { scale: 1.25, x: -60 },
    visible: { scale: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: (i = 1) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (i = 1) => ({
      width: "100%",
      transition: { delay: i * 0.15 + 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section ref={ref} className="w-full bg-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="overflow-hidden">
          <motion.img
            src="/image/14-nsk.jpg"
            alt="Printing"
            className="w-full h-full object-cover"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          />
        </div>

        {/* Right Content */}
        <div className="space-y-15 ml-20">
          {/* <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            J. Brooks in Numbers
          </motion.h2> */}

          {[{
            number: "20+",
            label: "Years of Experience",
          },
          {
            number: "1000+",
            label: "Projects Completed",
          }, {
            number: "98%",
            label: "Client Satisfaction",
          }, ].map((item, i) => (
            <div key={i} className="space-y-2">
              <motion.div
                className="text-5xl font-bold text-gray-900"
                custom={i}
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
                {item.number}
              </motion.div>

              <div className="relative w-full max-w-sm">
                <motion.div
                  className="absolute inset-0 bg-black rounded-lg"
                  custom={i}
                  variants={barVariants}
                  initial="hidden"
                  animate={controls}
                />
                <motion.div
                  className="relative z-10 px-4 py-2 text-white font-medium"
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  animate={controls}
                >
                  {item.label}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

