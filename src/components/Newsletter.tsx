"use client";

import { motion } from "framer-motion";

export const Newsletter = () => {
  return (
    <section className="py-24 bg-[#F5F5F5] overflow-hidden border-y border-black/5">
      <div className="container-tight px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Phone Mockups */}
          <div className="relative flex-1 w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end">
            <div className="relative z-10 flex items-center justify-center">
              {/* Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-[#EAEAEA] rounded-full opacity-50 blur-3xl" />
              
              {/* Phone 1 (Left/Back) */}
              <motion.div 
                initial={{ x: -20, y: 20, rotate: -15, opacity: 0 }}
                whileInView={{ x: 0, y: 0, rotate: -15, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-0 w-48 sm:w-64 aspect-[9/19.5] bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-[#1A1A1A] overflow-hidden -mr-12 sm:-mr-20"
              >
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="h-2 w-12 bg-black/10 rounded-full mb-4" />
                  <div className="h-4 w-full bg-black/5 rounded-sm" />
                  <div className="h-4 w-5/6 bg-black/5 rounded-sm" />
                  <div className="h-4 w-4/6 bg-black/5 rounded-sm" />
                  <div className="pt-4">
                    <div className="h-32 sm:h-48 w-full bg-[#1A1A1A] rounded-xl flex items-center justify-center p-4">
                      <div className="text-white text-[8px] sm:text-[10px] font-black uppercase text-center leading-tight">
                        Your Next <br/> Breakthrough
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 2 (Right/Front) */}
              <motion.div 
                initial={{ x: 20, y: -20, rotate: 5, opacity: 0 }}
                whileInView={{ x: 0, y: 0, rotate: 5, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-48 sm:w-64 aspect-[9/19.5] bg-[#1A1A1A] rounded-[2.5rem] shadow-2xl border-[6px] border-[#2A2A2A] overflow-hidden"
              >
                <div className="p-4 sm:p-6 flex flex-col h-full text-white">
                  <div className="h-2 w-12 bg-white/10 rounded-full self-center mb-8" />
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm sm:text-lg font-black uppercase tracking-tighter">Your Next Breakthrough</h4>
                    <p className="text-[8px] sm:text-[10px] text-white/50 leading-relaxed font-medium">
                      "Five Minutes Each Week That Might Change Your Life."
                    </p>
                  </div>
                  <div className="mt-auto pb-10 space-y-2">
                    <div className="h-1.5 w-full bg-white/20 rounded-full" />
                    <div className="h-1.5 w-5/6 bg-white/20 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-display font-black leading-[1.1] tracking-tighter mb-8 uppercase text-black">
              5 MINUTES EACH WEEK THAT <br className="hidden sm:block" /> MIGHT CHANGE YOUR LIFE
            </h2>
            
            <p className="text-lg text-black/70 font-medium mb-10 leading-relaxed">
              Enter your email address below to sign up for my free newsletter, 
              <span className="italic font-bold"> Your Next Breakthrough.</span> Each week, you'll receive a few prompts and exercises designed to create your next breakthrough. No fluff, no filler, no BS. Just five minutes each week that might change your life.
            </p>
            
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-white border border-black/20 rounded-full py-5 px-8 pr-32 text-sm font-medium text-black focus:outline-none focus:border-black transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#1A1A1A] text-white px-10 rounded-full text-xs font-black uppercase tracking-widest transition-colors"
                >
                  SIGN UP
                </button>
              </form>
            </div>
            
            <p className="mt-6 text-sm italic text-black/50 leading-relaxed">
              Your information is protected and I never spam, ever. You can view my privacy policy <a href="#" className="underline">here.</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
