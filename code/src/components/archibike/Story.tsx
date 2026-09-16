import { motion } from "framer-motion";
import { Flame, Compass, Wrench } from "lucide-react";
import storyBg from "@/assets/story-bg.jpg";

const values = [
  { icon: Flame, title: "Ossessione", body: "Ogni saldatura, ogni trama, ogni linea — messa in discussione e rifatta finché non canta." },
  { icon: Compass, title: "Indipendenza", body: "Nessuna licenza. Nessun outsourcing. Progettate e assemblate sotto lo stesso tetto." },
  { icon: Wrench, title: "Artigianalità", body: "Quaranta rider. Dodici ingegneri. Tre macchine al giorno. Questi sono i numeri." },
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
          <div className="text-xs font-display uppercase tracking-[0.4em] text-accent mb-8">· La Nostra Storia</div>
          <p className="font-display italic font-bold text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05]">
            "Non costruiamo solo bici.<br />
            <span className="text-accent">Progettiamo emozioni.</span>"
          </p>
          <footer className="mt-8 text-sm font-display uppercase tracking-widest text-muted-foreground">
            — Marco Vannini, Fondatore
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
