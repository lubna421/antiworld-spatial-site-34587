import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Vision Pro",
    description: "Immersive spatial headset with breakthrough display technology",
    details: "Experience spatial computing with our most advanced headset featuring dual 4K displays, precise eye tracking, and revolutionary hand gesture controls.",
    specs: ["Dual 4K micro-OLED displays", "Advanced eye tracking", "Spatial audio", "6+ hours battery"],
    image: product1,
    path: "/product/vision-pro",
  },
  {
    id: 2,
    name: "SpatialControl",
    description: "Precision controller for seamless spatial interaction",
    details: "Navigate your spatial environment with haptic feedback and precision sensors that respond to your every movement with millisecond accuracy.",
    specs: ["Haptic feedback", "6-axis motion tracking", "Ergonomic design", "20+ hours battery"],
    image: product2,
    path: "/product/spatial-control",
  },
  {
    id: 3,
    name: "ComputeBase",
    description: "Powerful computing station for spatial environments",
    details: "The neural core of your spatial computing setup. Powered by custom silicon designed specifically for real-time spatial rendering.",
    specs: ["Custom M3 chip", "32GB unified memory", "4TB SSD storage", "Wireless connectivity"],
    image: product3,
    path: "/product/compute-base",
  },
];

const ProductCarousel = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="products" className="min-h-screen relative overflow-hidden">
      {/* Full-screen background that changes based on hovered product */}
      <AnimatePresence mode="wait">
        {hoveredProduct !== null && (
          <motion.div
            key={hoveredProduct}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={products.find(p => p.id === hoveredProduct)?.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Aurora overlay */}
      <div className="absolute inset-0 aurora-bg opacity-10 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hover to explore each product
          </p>
        </motion.div>

        {/* Cohesive product display */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 w-full max-w-7xl">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className={`relative transition-all duration-500 ${
                hoveredProduct === product.id
                  ? "md:flex-[2] flex-1"
                  : hoveredProduct !== null
                  ? "md:flex-[0.5] flex-1 opacity-50"
                  : "flex-1"
              }`}
            >
              <div className="relative aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-2xl border-2 border-accent/30 group cursor-pointer">
                {/* Product image - scales on hover */}
                <div className={`relative w-full h-full overflow-hidden rounded-2xl transition-all duration-700 ${
                  hoveredProduct === product.id ? 'scale-102 z-20' : 'scale-100'
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient overlay - more visible on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-300 pointer-events-none ${
                  hoveredProduct === product.id 
                    ? 'from-background/95 via-background/60 to-transparent' 
                    : 'from-background via-background/50 to-transparent'
                }`} />

                {/* Product info - always visible, more details on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className={`text-sm text-muted-foreground transition-all duration-300 ${
                    hoveredProduct === product.id ? 'line-clamp-none mb-4' : 'line-clamp-2'
                  }`}>
                    {hoveredProduct === product.id ? product.details : product.description}
                  </p>

                  {/* Additional info - shown on hover */}
                  <AnimatePresence>
                    {hoveredProduct === product.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        <div className="space-y-2">
                          <h4 className="text-accent font-semibold text-xs uppercase tracking-wider">
                            Key Features
                          </h4>
                          <ul className="space-y-1.5">
                            {product.specs.slice(0, 3).map((spec, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                <span className="text-accent mt-0.5">•</span>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link to={product.path}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Glow effect on hover */}
                {hoveredProduct === product.id && (
                  <div className="absolute -inset-1 bg-accent/20 rounded-2xl blur-xl -z-10" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
