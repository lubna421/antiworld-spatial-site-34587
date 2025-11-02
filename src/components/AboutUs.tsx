import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Aurora background accent */}
      <div className="absolute inset-0 aurora-bg opacity-20 animate-aurora bg-[length:200%_200%]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            About <span className="text-black">AntiWorld</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
            <p>
              We are pioneering the future of spatial computing, creating immersive experiences 
              that seamlessly blend the physical and digital worlds.
            </p>
            
            <p>
              At AntiWorld, we believe technology should enhance human connection, not replace it. 
              Our products are designed with this philosophy at their core—combining cutting-edge 
              hardware with intuitive software to unlock new dimensions of creativity and collaboration.
            </p>
            
            <p>
              From our custom-built operating system to our meticulously crafted devices, 
              every detail is engineered to deliver an experience that feels both natural and extraordinary.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8"
          >
            <div className="inline-block px-8 py-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <p className="text-black font-semibold text-xl">
                Building tomorrow's reality, today.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
