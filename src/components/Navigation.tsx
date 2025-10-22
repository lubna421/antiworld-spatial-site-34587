import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/#products" },
    { name: "Technology", path: "/#technology" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
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
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
