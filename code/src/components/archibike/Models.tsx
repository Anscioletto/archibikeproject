import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import bikeX1 from "@/assets/bike-x1.jpg";
import bikePro from "@/assets/bike-pro.jpg";
import bikeTrail from "@/assets/bike-trail.jpg";

const models = [
  {
    name: "ARCH X1",
    category: "Urbana Elettrica",
    tagline: "Dominio Urbano",
    price: "€2.499",
    image: bikeX1,
    specs: { Peso: "18.4 kg", "Vel. Max": "45 km/h", Telaio: "Alluminio 7000" },
  },
  {
    name: "ARCH PRO",
    category: "Strada Performance",
    tagline: "Nata per Correre",
    price: "€3.899",
    image: bikePro,
    specs: { Peso: "7.1 kg", "Vel. Max": "78 km/h", Telaio: "Carbonio T1100" },
  },
  {
    name: "ARCH TRAIL",
    category: "Bestia da Montagna",
    tagline: "Nessun Limite",
    price: "€3.199",
    image: bikeTrail,
    specs: { Peso: "12.8 kg", "Vel. Max": "62 km/h", Telaio: "Carbon Trail" },
  },
];

export default function Models() {
  return (
    <section id="models" className="relative py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs font-display uppercase tracking-[0.4em] text-accent mb-4">
              · La Gamma
            </div>
            <h2 className="font-display font-black uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
              Tre Macchine.<br />
              <span className="text-stroke">Un'Ossessione.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Ogni Archibike è assemblata a mano e messa a punto dai rider. Scegli la tua.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {models.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-card border border-border overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="grid grid-cols-3 gap-3 text-xs font-display uppercase tracking-wider">
                    {Object.entries(m.specs).map(([k, v]) => (
                      <div key={k} className="border-l-2 border-accent pl-3">
                        <div className="text-muted-foreground text-[0.65rem]">{k}</div>
                        <div className="text-foreground font-bold">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 left-4 text-xs font-display uppercase tracking-widest bg-background/70 backdrop-blur px-3 py-1 border border-border">
                  {m.category}
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-3xl font-black uppercase">{m.name}</h3>
                    <p className="text-muted-foreground italic text-sm mt-1">"{m.tagline}"</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.65rem] font-display uppercase tracking-widest text-muted-foreground">Da</div>
                    <div className="font-display text-2xl font-bold text-accent">{m.price}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                  <a
                    href={`mailto:vendite@archibike.it?subject=Acquisto ${m.name}`}
                    className="group/btn inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-display font-bold uppercase tracking-widest px-3 py-3 text-[0.7rem] glow-accent"
                  >
                    Acquista
                    <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                  <a
                    href={`mailto:info@archibike.it?subject=Info ${m.name}`}
                    className="inline-flex items-center justify-center gap-2 border border-border hover:border-accent hover:text-accent font-display font-bold uppercase tracking-widest px-3 py-3 text-[0.7rem] transition-colors"
                  >
                    <MessageCircle size={14} />
                    Chiedi info
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
