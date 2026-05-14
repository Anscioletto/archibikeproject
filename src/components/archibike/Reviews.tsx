import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import marco from "@/assets/review-marco.jpg";
import giulia from "@/assets/review-giulia.jpg";
import luca from "@/assets/review-luca.jpg";

const reviews = [
  {
    quote: "L'Archi Veloce è semplicemente spettacolare. Leggera, reattiva, perfetta per le mie uscite del weekend in gruppo.",
    name: "Marco R.",
    city: "Roma",
    photo: marco,
  },
  {
    quote: "Ho preso la Serena per andare al lavoro ogni giorno. Comoda, elegante e pratica. Non tornerei mai più alla metropolitana.",
    name: "Giulia M.",
    city: "Milano",
    photo: giulia,
  },
  {
    quote: "Con l'Archi Trail ho percorso i sentieri del Trentino senza nessun problema. Telaio solido, vale ogni centesimo!",
    name: "Luca B.",
    city: "Trento",
    photo: luca,
  },
];

export default function Reviews() {
  return (
    <section id="recensioni" className="relative py-32 lg:py-48 px-6 lg:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs font-display uppercase tracking-[0.4em] text-accent mb-4">
              · Cosa dicono di noi
            </div>
            <h2 className="font-display font-black uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
              Recen<span className="text-stroke">sioni</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Riders veri. Strade vere. Ecco cosa pensano della nostra ossessione.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-card border border-border p-8 lg:p-10 flex flex-col justify-between hover:border-accent/60 transition-colors"
            >
              <Quote size={40} className="text-accent/30 mb-6" strokeWidth={1.5} />
              <p className="font-display text-lg lg:text-xl leading-snug mb-8 flex-1">
                "{r.quote}"
              </p>
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} className="text-accent fill-accent" strokeWidth={0} />
                ))}
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={r.photo}
                  alt={r.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-12 w-12 object-cover grayscale group-hover:grayscale-0 transition"
                />
                <div>
                  <div className="font-display font-bold uppercase tracking-wider text-sm">{r.name}</div>
                  <div className="text-xs font-display uppercase tracking-widest text-muted-foreground">· {r.city}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}