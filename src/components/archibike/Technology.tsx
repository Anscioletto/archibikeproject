import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Cpu, Layers } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const blocks = [
  {
    num: "01",
    icon: Layers,
    title: "Carbon Fiber Frame",
    body: "Aerospace-grade T1100 carbon, hand-laid in twelve directional layers. The result: a chassis 40% lighter than aluminum and twice as stiff under torque.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "Smart Integrated Electronics",
    body: "On-board ride computer, GPS, and adaptive lighting talk to your phone. Firmware updates over the air. Anti-theft baked into the bottom bracket.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-32 lg:py-48 px-6 lg:px-12 border-y border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-xs font-display uppercase tracking-[0.4em] text-accent mb-4">· Technology</div>
        <h2 className="font-display font-black uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] mb-20 max-w-4xl">
          Built Light. <span className="text-stroke">Ridden Hard.</span>
        </h2>

        <div className="space-y-32">
          {blocks.map((b, i) => {
            const flip = i % 2 === 1;
            const Icon = b.icon;
            return (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative grid lg:grid-cols-12 gap-8 items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="lg:col-span-6 relative">
                  <div className="absolute -top-20 left-0 font-display font-black text-[14rem] lg:text-[20rem] leading-none text-foreground/[0.04] select-none pointer-events-none">
                    {b.num}
                  </div>
                  <div className="relative bg-card border border-border aspect-square flex items-center justify-center">
                    <Icon size={120} className="text-accent" strokeWidth={1} />
                    <div className="absolute top-4 left-4 text-xs font-display uppercase tracking-widest text-muted-foreground">
                      Section {b.num}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:px-8 space-y-6">
                  <h3 className="font-display font-black uppercase text-4xl lg:text-6xl leading-[0.95]">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md">{b.body}</p>
                  <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-accent">
                    <span className="h-px w-8 bg-accent" /> Engineered in Milan
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 grid grid-cols-3 gap-4 lg:gap-12 border-t border-border pt-12"
        >
          {[
            { v: 3, s: "", label: "Models" },
            { v: 12, s: "", label: "Awards" },
            { v: 2019, s: "", label: "Since" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-black text-5xl lg:text-7xl text-accent leading-none">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-xs lg:text-sm font-display uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
