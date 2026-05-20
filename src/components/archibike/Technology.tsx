import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import techCarbon from "@/assets/tech-carbon.jpg";
import techElectronics from "@/assets/tech-electronics.jpg";

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
    image: techCarbon,
    title: "Telaio in Fibra di Carbonio",
    body: "Carbonio T1100 di livello aerospaziale, lavorato a mano in dodici strati direzionali. Il risultato: un telaio del 40% più leggero dell'alluminio e due volte più rigido in torsione.",
  },
  {
    num: "02",
    image: techElectronics,
    title: "Elettronica Integrata Smart",
    body: "Ride computer di bordo, GPS e illuminazione adattiva sincronizzati con il tuo smartphone. Aggiornamenti firmware OTA. Antifurto integrato nel movimento centrale.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-32 lg:py-48 px-6 lg:px-12 border-y border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-xs font-display uppercase tracking-[0.4em] text-accent mb-4">· Tecnologia</div>
        <h2 className="font-display font-black uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] mb-20 max-w-4xl">
          Costruite Leggere. <span className="text-stroke">Spinte al Limite.</span>
        </h2>

        <div className="space-y-32">
          {blocks.map((b, i) => {
            const flip = i % 2 === 1;
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
                  <div className="relative bg-card border border-border aspect-square overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 text-xs font-display uppercase tracking-widest text-muted-foreground bg-background/70 backdrop-blur px-2 py-1">
                      Sezione {b.num}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:px-8 space-y-6">
                  <h3 className="font-display font-black uppercase text-4xl lg:text-6xl leading-[0.95]">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md">{b.body}</p>
                  <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-accent">
                    <span className="h-px w-8 bg-accent" /> Progettato a Milano
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
            { v: 3, s: "", label: "Modelli" },
            { v: 12, s: "", label: "Premi" },
            { v: 2019, s: "", label: "Dal" },
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
