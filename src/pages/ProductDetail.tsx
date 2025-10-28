import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoginDialog from "@/components/LoginDialog";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const productData = {
  "vision-pro": {
    name: "Vision Pro",
    tagline: "See beyond reality",
    description: "Our flagship spatial headset combines cutting-edge display technology with intuitive spatial controls. Experience digital content that seamlessly blends with your physical world.",
    specs: [
      { label: "Display", value: "Dual 4K micro-OLED" },
      { label: "Field of View", value: "120° horizontal" },
      { label: "Refresh Rate", value: "120Hz" },
      { label: "Audio", value: "Spatial audio with personalized profile" },
      { label: "Tracking", value: "6DOF inside-out tracking" },
      { label: "Battery", value: "2-3 hours continuous use" },
    ],
    features: [
      "Hand and eye tracking",
      "Real-time environment mapping",
      "Pass-through AR mode",
      "Voice command integration",
    ],
    price: "$2,999",
    image: product1,
  },
  "spatial-control": {
    name: "SpatialControl",
    tagline: "Precision in motion",
    description: "Ergonomic controller designed for natural spatial interaction. Haptic feedback and precise tracking ensure every gesture feels real.",
    specs: [
      { label: "Tracking", value: "Sub-millimeter precision" },
      { label: "Haptics", value: "Advanced HD rumble" },
      { label: "Battery Life", value: "40 hours" },
      { label: "Connectivity", value: "Ultra-low latency wireless" },
      { label: "Buttons", value: "Customizable action buttons" },
      { label: "Weight", value: "180g per controller" },
    ],
    features: [
      "Adaptive trigger resistance",
      "Touch-sensitive surfaces",
      "Finger tracking",
      "Ambidextrous design",
    ],
    price: "$299",
    image: product2,
  },
  "compute-base": {
    name: "ComputeBase",
    tagline: "Power unlimited",
    description: "High-performance computing station that powers your entire spatial ecosystem. Compact design with uncompromising performance.",
    specs: [
      { label: "Processor", value: "Custom neural processor" },
      { label: "Memory", value: "64GB unified memory" },
      { label: "Storage", value: "2TB SSD" },
      { label: "GPU", value: "Dedicated spatial computing GPU" },
      { label: "Connectivity", value: "WiFi 6E, Bluetooth 5.3" },
      { label: "Dimensions", value: "15 x 15 x 8 cm" },
    ],
    features: [
      "Silent cooling system",
      "Real-time ray tracing",
      "AI acceleration",
      "Modular expansion ports",
    ],
    price: "$1,499",
    image: product3,
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productData[id as keyof typeof productData] : null;
  const { requireLogin, showLoginDialog, setShowLoginDialog, login } = useAuth();
  const { toast } = useToast();

  const handlePreorder = () => {
    requireLogin(() => {
      toast({
        title: "Preorder Confirmed",
        description: `Your preorder for ${product?.name} has been placed!`,
      });
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="rounded-3xl overflow-hidden border border-accent/30 glow-aurora">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl text-accent italic mb-6">
                  {product.tagline}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specs */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Technical Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  {product.specs.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                      className="p-4 rounded-xl border border-border bg-card/30 backdrop-blur-sm"
                    >
                      <div className="text-sm text-muted-foreground mb-1">
                        {spec.label}
                      </div>
                      <div className="font-medium">{spec.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center justify-between p-6 rounded-2xl border border-accent/30 bg-card/50 backdrop-blur-sm"
              >
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Starting at
                  </div>
                  <div className="text-4xl font-bold text-accent">
                    {product.price}
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground glow-olive"
                  onClick={handlePreorder}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Preorder Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <LoginDialog 
        open={showLoginDialog} 
        onOpenChange={setShowLoginDialog}
        onLogin={login}
      />
      <Footer />
    </div>
  );
};

export default ProductDetail;
