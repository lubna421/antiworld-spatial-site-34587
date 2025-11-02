import { motion } from "framer-motion";

const features = [
  {
    title: "Spatial Interface",
    description: "Navigate effortlessly through layers of digital content in physical space",
  },
  {
    title: "Neural Processing",
    description: "AI-powered computing that adapts to your workflow and environment",
  },
  {
    title: "Seamless Integration",
    description: "Connect all your devices in a unified spatial ecosystem",
  },
  {
    title: "Privacy First",
    description: "End-to-end encryption with complete control over your data",
  },
];

const OSSection = () => {
  return (
    <section id="technology" className="min-h-screen py-32 relative overflow-hidden">
      {/* Aurora background layers */}
      <div className="absolute inset-0 aurora-bg opacity-20 animate-aurora bg-[length:200%_200%]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            AntiWorld
            <br />
            <span className="bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">
              Operating System
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A revolutionary OS built from the ground up for spatial computing. 
            Experience computing that understands context, space, and intention.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-500">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-[#4A4A4A] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-muted-foreground italic">
            "The future of computing is not in your hands, it's all around you."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OSSection;
