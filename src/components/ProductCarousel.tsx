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
                  ? "md:flex-[0.5] flex-1 opacity-60"
                  : "flex-1"
              }`}
            >
              <div className="relative aspect-[3/4] md:aspect-[2/3] overflow-visible rounded-2xl border-2 border-accent/30 group cursor-pointer">
                {/* Product image */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />

                {/* Product name - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>

                {/* Detailed info - shown on hover */}
                <AnimatePresence>
                  {hoveredProduct === product.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-background/95 backdrop-blur-md p-8 flex flex-col justify-center rounded-2xl z-20"
                    >
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground text-lg">
                            {product.details}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {product.specs.map((spec, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-accent mt-1">•</span>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link to={product.path}>
                          <Button
                            variant="outline"
                            className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 glow-olive mt-4"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

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
