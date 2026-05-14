import { motion } from "framer-motion";
import { Instagram, Youtube, Activity, ArrowRight } from "lucide-react";
import logo from "@/assets/archibike-logo.png";

export default function Newsletter() {
  return (
    <>
      <section id="contact" className="relative bg-secondary border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="text-xs font-display uppercase tracking-[0.4em] text-accent mb-4">· Stay In The Pack</div>
            <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
              Drop In. <span className="text-stroke">Get Early Access.</span>
            </h2>
          </motion.div>
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col sm:flex-row items-stretch gap-3"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-background border border-border px-5 py-4 font-sans text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-display font-bold uppercase tracking-widest text-sm px-6 py-4 glow-accent"
            >
              Subscribe <ArrowRight size={16} />
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="bg-background py-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Archibike" className="h-10 w-auto invert" />
                <span className="font-display font-black text-xl tracking-[0.2em]">ARCHIBIKE</span>
              </div>
              <p className="font-display uppercase tracking-widest text-xs text-muted-foreground max-w-sm">
                Engineered Emotions. Made in Milan.
              </p>
            </div>
            <div className="flex items-center gap-5">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Activity, label: "Strava" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-11 w-11 grid place-items-center border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-display uppercase tracking-widest text-muted-foreground">
            <div>© 2026 Archibike S.r.l.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Press</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
