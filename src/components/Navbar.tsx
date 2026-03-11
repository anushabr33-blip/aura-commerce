import { useState } from "react";
import { ShoppingBag, Search, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          {["New Arrivals", "Collections", "Moods"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-body tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl md:text-3xl font-display font-bold tracking-wide text-gradient-gold">
            AURÈLE
          </h1>
        </a>

        <div className="flex items-center gap-5">
          <button className="text-muted-foreground hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            <User size={20} />
          </button>
          <button className="relative text-muted-foreground hover:text-primary transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {["New Arrivals", "Collections", "Moods", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-body tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
