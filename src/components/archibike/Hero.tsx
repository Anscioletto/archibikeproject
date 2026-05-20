import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import heroBike from "@/assets/hero-bike.jpg";

const words = ["VELOCITÀ.", "POTENZA.", "DESIGN."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden grain">
      {/* diagonal split bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 bg-secondary/40"
          style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 30% 100%)" }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 grid lg:grid-cols-12 gap-8 items-center min-h-screen"
      >
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 text-xs font-display uppercase tracking-[0.4em] text-muted-foreground"
          >
            <span className="h-px w-12 bg-accent" />
            Biciclette Premium · Dal 2019
          </motion.div>

          <h1 className="font-display font-black uppercase leading-[0.85] tracking-tight">
            <motion.span
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="block text-[clamp(3.5rem,11vw,9rem)]"
            >
              Ride The
            </motion.span>
            <motion.span
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block text-[clamp(3.5rem,11vw,9rem)] text-stroke"
            >
              Future of
            </motion.span>
            <span className="block text-[clamp(3rem,9vw,7rem)] text-accent h-[1em] relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[idx]}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {words[idx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-md text-muted-foreground text-base leading-relaxed"
          >
            Macchine in carbonio costruite a mano per chi non si accontenta.
            Progettate a Milano, corse ovunque.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#models"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground font-display font-bold uppercase tracking-widest px-8 py-4 text-sm glow-accent"
            >
              Esplora i Modelli
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="#story" className="font-display uppercase tracking-widest text-sm text-foreground/70 hover:text-foreground transition">
              La Nostra Storia →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="absolute -top-10 -right-10 font-display text-[12rem] lg:text-[18rem] font-black text-foreground/5 leading-none select-none pointer-events-none">
            01
          </div>
          <img
            src={heroBike}
            alt="Archibike flagship bicycle"
            width={1536}
            height={1280}
            className="relative w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>

      {/* ticker */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border bg-background/40 backdrop-blur-sm z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between text-xs font-display uppercase tracking-widest text-muted-foreground">
          <span>↓ Scorri</span>
          <span className="hidden sm:block">Milano · Italia</span>
          <span>Collezione 2026</span>
        </div>
      </div>
    </section>
  );
}
