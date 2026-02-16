import { motion } from "framer-motion";
import Services from "./Services";
import StatsSection from "./StatsSection";
import WhyChooseSection from "./WhyChoose";
// import ScrollReveal from "../component/ScrollReveal";

export default function AboutUs() {
  return (
    <>
      {/* Section Heading */}
      <div className="py-12 mt-15 bg-[#9dbe23]">
        {/* <h2 className="text-5xl text-center text-black">
          About Us
        </h2> */}
      </div>

      <section className="w-full flex items-center justify-center px-4 md:px-10 lg:px-18  bg-[#9dbe23] pb-26">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="w-full ">
            <img
              src="/image/about-us-image.jpg"
              alt="About"
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="w-full flex flex-col gap-6"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
            >
              About Us
            </motion.h2>

            {/* <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg font-semibold text-gray-700"
            >
              Commitment to Excellence
            </motion.p> */}

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-base leading-relaxed text-white max-w-xl"
            >
             Since its founding in 2000 as a specialized job work press, Right Enterprises has rapidly evolved into a comprehensive print production hub known for its innovative approach to cost-efficient and time-saving solutions. By looking beyond the obvious and maintaining an enviable reputation for uncompromising quality and consistency, we have successfully graduated to providing total print solutions in a short span of time. Today, our winning combination of state-of-the-art four-color printing machinery and a dedicated team of over 30 skilled professionals allows us to consistently set new benchmarks in printing excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <Services/>
      {/* <ScrollReveal
  baseOpacity={0.1}
  enableBlur
  baseRotation={3}
  blurStrength={4}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>      */}

      <StatsSection/>
      <WhyChooseSection/>
      
    </>
  );
}