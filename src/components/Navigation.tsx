import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const products = [
  { name: "Vision Pro", path: "/product/vision-pro" },
  { name: "SpatialControl", path: "/product/spatial-control" },
  { name: "ComputeBase", path: "/product/compute-base" },
];

const Navigation = () => {
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

  const leftNavItems = [
    { name: "Home", path: "/" },
    { name: "Technology", path: "/#technology" },
  ];

  const rightNavItems = [
    { name: "Use Cases", path: "/#use-cases" },
    { name: "Company", path: "/#company" },
    { name: "Talk to Sales", path: "/contact-sales" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border"
    >
      <NavigationMenu className="w-full max-w-none">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <NavigationMenuList className="gap-8">
              {leftNavItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.path}
                      className="text-sm font-medium text-foreground hover:text-foreground transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-foreground bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 w-screen -ml-6">
                  <div className="container mx-auto px-6 py-8">
                    <ul className="grid grid-cols-3 gap-6">
                      {products.map((product) => (
                        <li key={product.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={product.path}
                              className="block select-none rounded-md p-6 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground"
                            >
                              <div className="text-lg font-semibold mb-2">{product.name}</div>
                              <p className="text-sm text-muted-foreground">
                                Discover the future of spatial computing
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* Centered Brand */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-tight">
              <span className="text-foreground">AntiWorld</span>
            </Link>

            {/* Right Navigation */}
            <NavigationMenuList className="gap-8">
              {rightNavItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.path}
                      className="text-sm font-medium text-foreground hover:text-foreground transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>
        </div>
      </NavigationMenu>
    </motion.nav>
  );
};

export default Navigation;
