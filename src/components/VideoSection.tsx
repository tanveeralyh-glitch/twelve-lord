"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX, Youtube, ArrowRight } from "lucide-react";

export const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.5 });
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<any>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    (window as any).onYouTubeIframeAPIReady = () => {
      const newPlayer = new (window as any).YT.Player("youtube-player", {
        videoId: "F3tQPF4RcJM",
        playerVars: {
          autoplay: 0,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          loop: 1,
          playlist: "F3tQPF4RcJM", // Required for loop
          modestbranding: 1,
        },
        events: {
          onReady: (event: any) => {
            setPlayer(event.target);
          },
        },
      });
    };

    return () => {
      (window as any).onYouTubeIframeAPIReady = null;
    };
  }, []);

  useEffect(() => {
    if (player) {
      if (isInView) {
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    }
  }, [isInView, player]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (player) {
      if (isMuted) {
        player.unMute();
        setIsMuted(false);
      } else {
        player.mute();
        setIsMuted(true);
      }
    }
  };

  const handleRedirect = () => {
    window.open("https://youtube.com/@twelvelords", "_blank");
  };

  return (
    <section ref={sectionRef} className="py-32 bg-[#FDFCFB] dark:bg-[#0A0A0A] relative overflow-hidden">
      <div className="container-tight">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Details Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="flex items-center gap-3 text-red-600">
              <Youtube className="h-6 w-6" />
              <span className="text-sm font-bold uppercase tracking-[0.3em]">Channel Spotlight</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Watch Our <br />
              <span className="text-red-600">Latest Insights</span>
            </h2>
            
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-xl">
              Deep dives into cybersecurity, future tech, and the evolving landscape of digital sovereignty. 
              Join thousands of others in our growing community of thinkers and builders.
            </p>
            
            <button 
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl hover:shadow-red-600/20 group/btn"
              onClick={handleRedirect}
            >
              Explore Our Channel <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Video Right (450px) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[450px] shrink-0"
            onClick={handleRedirect}
          >
            <div className="relative h-[450px] lg:h-auto lg:aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 group cursor-pointer bg-black">
              {/* YouTube Player */}
              <div id="youtube-player" className="absolute inset-0 w-full h-full pointer-events-none scale-[1.5] lg:scale-[2]" />
              
              {/* Click Overlay */}
              <div className="absolute inset-0 bg-transparent z-10" />

              {/* Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-6 right-6 z-20 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-20 px-4 py-2 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                <Youtube className="h-3 w-3" /> Live
              </div>
              
              {/* Hover Content */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
                 <div className="h-20 w-20 rounded-full bg-red-600 flex items-center justify-center shadow-accent-glow transform scale-90 group-hover:scale-100 transition-transform">
                    <Youtube className="h-10 w-10 text-white fill-white" />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
