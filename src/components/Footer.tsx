import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const socials = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              AntiWorld
            </span>
          </div>

          <div className="flex justify-center gap-6">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow-pulse" />
                <div className="relative w-12 h-12 rounded-full border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center group-hover:border-accent transition-all duration-300">
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            © 2025 AntiWorld. Spatial computing reimagined.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
