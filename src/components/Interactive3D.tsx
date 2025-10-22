import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei";
import { Suspense } from "react";

// Simple 3D object component
const FloatingCube = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#708238"
          metalness={0.8}
          roughness={0.2}
          emissive="#708238"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const Interactive3D = () => {
  return (
    <section className="min-h-screen py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Interactive{" "}
            <span className="bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rotate, zoom, and explore our products in 3D space
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto h-[600px] rounded-3xl overflow-hidden border border-accent/30 glow-aurora"
        >
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#708238" />
              <FloatingCube />
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                minDistance={3}
                maxDistance={8}
              />
            </Suspense>
          </Canvas>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-muted-foreground mt-8"
        >
          Click and drag to rotate • Scroll to zoom
        </motion.p>
      </div>
    </section>
  );
};

export default Interactive3D;
