"use client";

import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppState } from "@/context/AppStateContext";

export const FloatingCart = () => {
  const { cart, setIsCartOpen } = useAppState();

  return (
    <AnimatePresence>
      {cart.length > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center border-4 border-background group"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 h-6 w-6 bg-accent text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-background">
            {cart.length}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
