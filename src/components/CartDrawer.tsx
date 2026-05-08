"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";
import Image from "next/image";

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useAppState();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[110]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-white/5 shadow-2xl z-[120] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-display font-black uppercase tracking-widest text-foreground">
                  Shopping <span className="text-accent underline decoration-accent/20">Bag</span>
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-3 rounded-xl hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="p-8 rounded-[2.5rem] bg-secondary/30 text-muted-foreground/20">
                    <ShoppingBag className="w-20 h-20" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-bold text-foreground">Your bag is empty</p>
                    <p className="text-sm text-muted-foreground max-w-[200px]">Add some literature or security gear to get started.</p>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-accent font-black text-xs uppercase tracking-widest hover:underline"
                  >
                    Start Browsing
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group"
                  >
                    <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-secondary">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="space-y-1">
                        <h4 className="font-bold text-foreground truncate text-sm">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                          {item.author}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-white/5 bg-white/[0.01] space-y-8">
                <div className="flex items-center justify-between">
                   <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Estimate Total</span>
                   <span className="text-2xl font-display font-black text-foreground">FREE_ACCESS</span>
                </div>
                
                <button
                  onClick={() => {
                    alert("Order Confirmed! Your security-first delivery is being processed.");
                    setIsCartOpen(false);
                    // In a real app, you'd clear the cart here too
                  }}
                  className="w-full group relative flex items-center justify-center gap-4 px-8 py-5 rounded-2xl bg-accent text-white font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)]"
                >
                  Confirm Orders <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl" />
                </button>
                
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest leading-relaxed">
                  Secure Checkout powered by Twelve Lords Hardware encryption defaults.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
