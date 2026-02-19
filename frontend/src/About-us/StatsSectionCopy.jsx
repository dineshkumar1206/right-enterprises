import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const fadeVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (i = 1) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  const CountUp = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let start = 0;
      const duration = 1500;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  const stats = [
    { number: 20, suffix: "+", label: "Years of Experience", color: "#0093D5" },
    { number: 1000, suffix: "+", label: "Projects Completed", color: "#F55978" },
    { number: 98, suffix: "%", label: "Client Satisfaction", color: "#FECC00" },
  ];

  return (
    <section ref={ref} className="w-full bg-white py-6">
      {/* Centered Container (NOT full width) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* ===== STAT BOXES ===== */}
        {stats.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col justify-center items-center text-center min-h-[380px]"
            style={{ backgroundColor: item.color }}
          >
            <h2 className="text-5xl font-bold text-white">
              <CountUp end={item.number} suffix={item.suffix} />
            </h2>
            <p className="mt-4 text-white text-lg font-medium px-6">
              {item.label}
            </p>
          </motion.div>
        ))}

        {/* ===== IMAGE BOX ===== */}
        <motion.div
          custom={3}
          variants={fadeVariants}
          initial="hidden"
          animate={controls}
          className="min-h-[380px] overflow-hidden"
        >
          <img
            src="/image/251.jpg.jpeg"
            alt="Stats"
            className="w-full h-full object-cover object-[95%_center]"
          />
        </motion.div>

      </div>
    </section>
  );
}
