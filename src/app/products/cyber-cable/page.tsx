"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ShoppingCart, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Cpu, 
  Activity, 
  Check,
  CheckCircle2,
  HardDrive,
  Usb
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppState } from "@/context/AppStateContext";
import { books } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";

export default function CyberCableProductPage() {
  const router = useRouter();
  const { addToCart, cart, setIsCartOpen } = useAppState();
  const [added, setAdded] = useState(false);

  const product = books.find(b => b.id === "cyber-cable");
  const isInCart = cart.some(item => item.id === "cyber-cable");

  if (!product) return null;

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(product);
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
        setIsCartOpen(true);
      }, 1000);
    } else {
      setIsCartOpen(true);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="relative z-10">
        {/* Navigation */}
        <div className="container-tight pt-16 pb-8">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-bold uppercase tracking-widest text-xs group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </motion.button>
        </div>

        {/* Hero Section */}
        <section className="container-tight pb-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[2rem] sm:rounded-[3rem] bg-primary/5 border border-primary/10 flex items-center justify-center overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
              <img 
                src="/images/cablepost.jpg.jpeg" 
                alt="Twelve Lords Cyber Cable" 
                className="w-[85%] h-[85%] object-contain filter drop-shadow-[0_0_50px_rgba(253,181,17,0.3)] transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Animated HUD elements */}
              <div className="absolute top-6 sm:top-8 left-6 sm:left-8 font-mono text-[8px] sm:text-[10px] text-primary/40 space-y-1">
                <div className="flex items-center gap-2"><span className="h-1 sm:h-1.5 w-1 sm:w-1.5 bg-primary rounded-full animate-pulse"/> SYSTEM_READY</div>
                <div>SECURE_HARDWARE: ACTIVE</div>
              </div>
            </motion.div>

            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <motion.div {...fadeIn}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 mx-auto lg:mx-0 w-fit">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Hardware-Level Security</span>
                </div>
                <h1 className="font-display font-black leading-tight tracking-tighter text-black">
                  Twelve Lords <span className="">Cyber Cable</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-4 text-black leading-tight">
                  Secure Charging. Controlled Data. <br className="hidden sm:block" />
                  <span>Total Protection.</span>
                </p>
              </motion.div>

              <motion.p 
                {...fadeIn} 
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
              >
                The Cyber Cable introduces a hardware-enforced security architecture that separates charging from data communication, ensuring that your device only exchanges data when explicitly authorized.
              </motion.p>

              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0"
              >
                <div className="p-4 rounded-2xl bg-secondary/50 border border-border space-y-2">
                  <Usb className="w-5 h-5 text-primary" />
                  <p className="text-[10px] font-bold uppercase tracking-wider">Default Mode</p>
                  <p className="text-sm text-muted-foreground font-semibold">Charge-Only</p>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/50 border border-border space-y-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <p className="text-[10px] font-bold uppercase tracking-wider">Power Delivery</p>
                  <p className="text-sm text-muted-foreground font-semibold">Up to 60W</p>
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <button 
                  onClick={handleAddToCart}
                  className="w-full lg:w-auto group relative px-10 py-5 sm:px-12 sm:py-6 rounded-2xl bg-primary text-white font-black text-lg sm:text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(253,181,17,0.5)] flex items-center justify-center gap-3"
                >
                  {added ? <CheckCircle2 className="w-6 h-6" /> : <ShoppingCart className="w-6 h-6" />}
                  <span>{isInCart ? "In Your Cart" : "Add to Cart"}</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-2xl" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="container-tight py-16 sm:py-20 border-t border-border/50 space-y-16 sm:space-y-24 px-4 sm:px-6">
          
          {/* Introduction */}
          <motion.div {...fadeIn} className="max-w-3xl mx-auto space-y-6 text-center lg:text-left">
            <h2 className="font-display font-bold text-black">Introduction — Our Technology</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              At Twelve Lords, we design hardware with security at its core. The Cyber Cable is built to address a fundamental weakness in modern connectivity: the automatic trust placed in USB connections.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Conventional cables allow unrestricted power and data flow, exposing devices to potential threats the moment they are plugged into an unknown source. The Cyber Cable introduces a hardware-enforced security architecture that separates charging from data communication, ensuring that your device only exchanges data when explicitly authorized.
            </p>
            <p className="text-primary font-bold text-lg sm:text-xl border-l-2 border-primary pl-6 py-2 w-fit mx-auto lg:mx-0">
              This approach transforms a simple accessory into a controlled security interface.
            </p>
          </motion.div>

          {/* Threat Landscape */}
          <motion.div {...fadeIn} className="space-y-10 sm:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-display font-bold text-black">Threat Landscape</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Public and untrusted USB connections can be exploited through multiple attack methods.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: "Juice Jacking", desc: "Malicious charging stations can attempt to install malware or extract sensitive data during charging.", icon: Zap },
                { title: "HID Injection", desc: "Compromised connections may emulate input devices such as keyboards to execute unauthorized commands.", icon: HardDrive },
                { title: "Data Interception", desc: "Unsecured connections can allow data to be monitored or captured during transfer.", icon: Lock }
              ].map((item, i) => (
                <div key={i} className="p-6 sm:p-8 rounded-[2rem] bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors space-y-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Secure Design Architecture */}
          <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-last lg:order-first">
              <h2 className="font-display font-bold text-black">Secure Design Architecture</h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                The Cyber Cable is engineered with a hardware-level control mechanism that governs data transmission independently of power delivery.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Default Charge-Only Mode: Data lines are physically isolated.",
                  "Controlled Data Enablement: Enabled intentionally by the user.",
                  "Reduced Attack Surface: Keeps data pathways inactive unless required.",
                  "Hardware-Level Enforcement: Independent of software configurations."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="font-semibold text-foreground/80 text-sm sm:text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-[2rem] sm:rounded-[3rem] bg-slate-900 overflow-hidden border border-white/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-20" />
              <Activity className="w-24 h-24 sm:w-32 sm:h-32 text-primary/20 animate-pulse" />
            </div>
          </motion.div>

          {/* Product Specifications */}
          <motion.div {...fadeIn} className="space-y-8 bg-secondary/20 p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] border border-border/50">
            <h2 className="font-display font-bold text-center text-black">Product Specifications</h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="font-black uppercase tracking-widest text-[10px] sm:text-xs text-black">Variants</h3>
                <ul className="text-xs sm:text-sm space-y-2 text-muted-foreground font-medium">
                  <li>USB-A to Lightning</li>
                  <li>USB-A to USB-C</li>
                  <li>USB-C to Lightning</li>
                  <li>USB-C to USB-C</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-black uppercase tracking-widest text-[10px] sm:text-xs text-black">Power</h3>
                <ul className="text-xs sm:text-sm space-y-2 text-muted-foreground font-medium">
                  <li>Up to 60W fast charging</li>
                  <li>PD Compatible</li>
                  <li>Universal Device Support</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-black uppercase tracking-widest text-[10px] sm:text-xs text-black">Length & Build</h3>
                <ul className="text-xs sm:text-sm space-y-2 text-muted-foreground font-medium">
                  <li>1 meter / 2 meters</li>
                  <li>Black / White options</li>
                  <li>Reinforced structure</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-black uppercase tracking-widest text-[10px] sm:text-xs text-black">Protection</h3>
                <ul className="text-xs sm:text-sm space-y-2 text-muted-foreground font-medium">
                  <li>Physical data switch</li>
                  <li>EMI Shielding</li>
                  <li>HID protection</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Positioning Statement */}
          <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto space-y-8 py-12 sm:py-20">
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-xl sm:text-2xl md:text-4xl font-display font-medium text-foreground leading-tight">
              "The Twelve Lords Cyber Cable is a security-focused connectivity solution designed to protect devices at the hardware level."
            </p>
            <p className="text-muted-foreground text-sm sm:text-lg">
              By separating power from data and introducing controlled communication, it eliminates unnecessary exposure and provides a reliable defense against modern USB-based threats.
            </p>
            
            <div className="pt-6 sm:pt-8">
              <button 
                onClick={handleAddToCart}
                className="group relative px-10 py-5 sm:px-16 sm:py-8 rounded-[1.5rem] sm:rounded-[2rem] bg-primary text-white font-black text-xl sm:text-2xl transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(253,181,17,0.6)] w-full sm:w-auto"
              >
                Secure Yours Now
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-[1.5rem] sm:rounded-[2rem]" />
              </button>
            </div>
          </motion.div>

        </section>
      </div>

      {/* Footer Space */}
      <div className="h-20" />
    </main>
  );
}
