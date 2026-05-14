import { motion } from "framer-motion";
import { Flame, Compass, Wrench } from "lucide-react";
import storyBg from "@/assets/story-bg.jpg";

const values = [
  { icon: Flame, title: "Obsession", body: "Every weld, every weave, every line — questioned and remade until it sings." },
  { icon: Compass, title: "Independence", body: "No license deals. No outsourcing. Designed and assembled under one roof." },
  { icon: Wrench, title: "Craft", body: "Forty riders. Twelve engineers. Three machines a day. That's the math." },
];

export default function Story() {
  return (
    <section id="story" className="relative">
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src={storyBg}
          alt=""
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />

        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-5xl px-6 text-center"
        >
          <div className="text-xs font-display uppercase tracking-[0.4em] text-accent mb-8">· Brand Story</div>
          <p className="font-display italic font-bold text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05]">
            "We don't just build bikes.<br />
            <span className="text-accent">We engineer emotions.</span>"
          </p>
          <footer className="mt-8 text-sm font-display uppercase tracking-widest text-muted-foreground">
            — Marco Vannini, Founder
          </footer>
        </motion.blockquote>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-32 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background p-8 lg:p-12 group hover:bg-card transition-colors"
              >
                <Icon size={36} className="text-accent mb-6" strokeWidth={1.5} />
                <h3 className="font-display font-black uppercase text-2xl mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
