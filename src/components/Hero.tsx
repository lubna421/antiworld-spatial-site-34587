import { motion } from "framer-motion";
import heroProduct from "@/assets/hero-product.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroProduct}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      {/* Aurora glow overlay */}
      <div className="absolute inset-0 aurora-bg opacity-20 animate-aurora bg-[length:200%_200%] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter"
          >
            <span className="block mb-4">Spatial Computing</span>
            <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              Reimagined
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Experience the future with AntiWorld's revolutionary spatial computing platform
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
