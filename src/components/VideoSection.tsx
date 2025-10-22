import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      {/* Aurora glow overlay */}
      <div className="absolute inset-0 aurora-bg opacity-10 z-0" />

      <div className="container mx-auto px-6 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            See It{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Experience the power of spatial computing
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
