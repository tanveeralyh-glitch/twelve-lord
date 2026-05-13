"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, Cpu, Activity, ShoppingBag } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";
import { books } from "@/lib/data";
import { useRouter } from "next/navigation";

export const CyberCableSection = () => {
  const router = useRouter();
  const { addToCart, cart, setIsCartOpen } = useAppState();
  const cyberCable = books.find(b => b.id === "cyber-cable");
  const isInCart = cart.some(item => item.id === "cyber-cable");

  if (!cyberCable) return null;

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(cyberCable);
      setIsCartOpen(true);
    } else {
      setIsCartOpen(true);
    }
  };

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-[#0B121E] border-y border-white/5" id="cyber-cable">
      {/* Clean Background */}
      
      {/* Background Digital Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container-tight relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Enhanced Content */}
                      {/* Details - Order 1 on mobile, 1 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 order-1 md:order-1"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Security Hardware-Level</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-sans font-black leading-tight text-white tracking-tighter">
                Twelve Lords <span className="">Cyber Cable</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                Secure Charging. Controlled Data. <span className="">Total Protection.</span>
              </p>

              <p className="text-white/70 leading-relaxed text-lg font-medium">
                Our team of engineers developed the Cyber Cable to eliminate "Juice Jacking" and data theft at the physical layer. By hardware-enforcing a charge-only default, we ensure your privacy is never compromised in public charging environments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="space-y-2">
                 <div className="flex items-center gap-2 text-white font-bold text-sm">
                   <Lock className="w-4 h-4 text-primary" />
                   <span>HID Protection</span>
                 </div>
                 <p className="text-xs text-white/50">Blocks malicious keyboard injection attacks via USB.</p>
               </div>
               <div className="space-y-2">
                 <div className="flex items-center gap-2 text-white font-bold text-sm">
                   <Zap className="w-4 h-4 text-primary" />
                   <span>60W Fast Charge</span>
                   </div>
                 <p className="text-xs text-white/50">High-speed power delivery without security compromise.</p>
               </div>
            </div>

            {/* DESKTOP BUTTONS */}
            <div className="hidden md:flex flex-wrap gap-4 pt-6">
              <button 
                onClick={() => router.push('/products/cyber-cable')}
                className="group relative px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-bold text-base transition-all duration-300 hover:bg-primary hover:border-primary hover:text-black"
              >
                Learn More
              </button>

              <button 
                onClick={handleAddToCart}
                className="group relative px-8 py-4 rounded-2xl bg-white text-black font-black text-base transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-glow flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{isInCart ? "In Cart" : "Add to Cart"}</span>
              </button>
            </div>
          </motion.div>

          {/* IMAGE - Order 2 on mobile, 2 on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] md:h-[650px] flex items-center justify-center order-2 md:order-2"
          >
            {/* Animated Glow Rings */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] aspect-square rounded-full border border-accent/20 blur-[2px]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[95%] aspect-square rounded-full border border-accent/5 border-dashed"
            />

            {/* The Product Image */}
            <div className="relative w-full h-full z-10">
               <motion.div
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="w-full h-full relative"
               >
                 <img
                    src="/images/cablepost.jpg.jpeg"
                    alt="Cyber Cable"
                    loading="lazy"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] dark:drop-shadow-[0_0_50px_rgba(34,211,238,0.3)]"
                  />
                  
                  {/* LIVE ANIMATION ELEMENTS */}
                  
                  {/* Status Pulse on Connector */}
                  <motion.div
                    animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-[48%] left-[50%] w-6 h-6 bg-primary rounded-full blur-[12px] z-20"
                  />

                  {/* Horizontal Scanning Laser */}
                  <motion.div
                    animate={{ top: ['30%', '70%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] z-30"
                  />

                  {/* Floating Digital Nodes */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 0.3, 0],
                        y: [-20, -100],
                        x: Math.random() * 60 - 30
                      }}
                      transition={{ 
                        duration: 4 + Math.random() * 2, 
                        repeat: Infinity, 
                        delay: i * 0.7 
                      }}
                      className="absolute top-1/2 left-1/2 text-primary"
                    >
                      <Activity className="w-4 h-4 opacity-40" />
                    </motion.div>
                  ))}
               </motion.div>
            </div>

            {/* UI Overlays */}
            <div className="absolute top-12 left-12 font-mono text-[10px] text-primary/80 space-y-1">
               <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse"/> SECURE_LINK_ACTIVE</div>
               <div>VOLTAGE_FLUX: STABLE</div>
            </div>
            
            <div className="absolute bottom-12 right-12 font-mono text-[10px] text-primary/80 text-right space-y-1">
               <div>PROTO: XII_LORDS_V1</div>
               <div className="text-primary/100">ENCRYPTION: HARDWARE_FORCED</div>
            </div>
          </motion.div>

          {/* MOBILE BUTTONS - Order 3 on mobile */}
          <div className="order-3 md:hidden flex flex-col sm:flex-row gap-4 w-full pt-4">
            <button 
              onClick={() => router.push('/products/cyber-cable')}
              className="group relative px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-bold text-base transition-all duration-300 hover:bg-primary hover:border-primary hover:text-black w-full flex items-center justify-center"
            >
              Learn More
            </button>

            <button 
              onClick={handleAddToCart}
              className="group relative px-8 py-4 rounded-2xl bg-white text-black font-black text-base transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-glow flex items-center justify-center gap-2 w-full"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{isInCart ? "In Cart" : "Add to Cart"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
