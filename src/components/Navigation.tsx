import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  { name: "Vision Pro", path: "/product/vision-pro" },
  { name: "SpatialControl", path: "/product/spatial-control" },
  { name: "ComputeBase", path: "/product/compute-base" },
];

const Navigation = () => {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Technology", path: "/#technology" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 perspective-1000"
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between bg-card/80 backdrop-blur-xl border border-border rounded-2xl px-8 py-4 preserve-3d hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              AntiWorld
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group flex items-center gap-1 outline-none">
                Products
                <ChevronDown className="h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-xl border-border z-50">
                {products.map((product) => (
                  <DropdownMenuItem key={product.name} asChild>
                    <Link 
                      to={product.path}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      {product.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
