import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Full-screen background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted z-0" />
      
      {/* Aurora glow overlay */}
      <div className="absolute inset-0 aurora-bg opacity-20 z-0" />

      <div className="container mx-auto px-6 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            See It{" "}
            <span className="bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of spatial computing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto perspective-1000"
        >
          <motion.div
            whileHover={{ rotateX: 2, rotateY: 2, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-video rounded-3xl overflow-hidden border-2 border-accent/30 glow-aurora preserve-3d"
          >
            {/* Video placeholder with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-muted to-card flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(true)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300 animate-glow-pulse" />
                <div className="relative w-24 h-24 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center backdrop-blur-sm group-hover:bg-accent/20 transition-all duration-300">
                  <Play className="w-10 h-10 text-accent fill-accent ml-1" />
                </div>
              </motion.button>
            </div>

            {/* Floating frame effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-3xl -z-10 blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
