import { motion } from "framer-motion";
import { Building2, Store, Hotel, BarChart3, ArrowUpRight } from "lucide-react";

const benefits = [
  { Icon: Building2, title: "Flotte Aziendali", body: "Bici per la mobilità dei tuoi dipendenti. Sconti a partire da 5 unità, manutenzione inclusa." },
  { Icon: Store, title: "Rivenditori", body: "Diventa rivenditore autorizzato ArchiBike. Margini competitivi e supporto marketing." },
  { Icon: Hotel, title: "Hotel & Turismo", body: "Noleggio e fornitura per strutture ricettive. Pacchetti personalizzati per stagioni turistiche." },
  { Icon: BarChart3, title: "Gestione Odoo", body: "Ordini, fatture e reportistica integrati. Accesso al portale partner in tempo reale." },
];

export default function B2B() {
  return (
    <section id="b2b" className="relative py-32 lg:py-48 px-6 lg:px-12 bg-secondary/30 border-y border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 space-y-8">
            <div className="text-xs font-display uppercase tracking-[0.4em] text-accent">· Soluzioni aziendali</div>
            <h2 className="font-display font-black uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
              Partner <span className="text-stroke">B2B</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                ArchiBike offre soluzioni dedicate alle aziende: flotte di bici per la mobilità aziendale, forniture per negozi specializzati, accordi con hotel e strutture turistiche, e partnership con enti pubblici e privati.
              </p>
              <p>
                Grazie all'integrazione con Odoo, siamo in grado di gestire ordini su larga scala, preventivi personalizzati, fatturazione B2B e tracciamento delle consegne in modo completamente automatizzato.
              </p>
              <p>
                Sei un rivenditore, un'azienda o un ente? Contattaci per un preventivo su misura e scopri le nostre tariffe riservate ai partner commerciali.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-background border border-border p-8 lg:p-10 flex flex-col justify-between gap-8 self-start"
          >
            <div className="space-y-4">
              <div className="text-xs font-display uppercase tracking-[0.4em] text-accent">· Parla con noi</div>
              <p className="font-display text-2xl lg:text-3xl font-bold leading-tight">
                Il nostro team commerciale è pronto ad ascoltarti e costruire insieme un'offerta personalizzata.
              </p>
            </div>
            <a
              href="mailto:b2b@archibike.it?subject=Richiesta partnership B2B"
              className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground font-display font-bold uppercase tracking-widest px-6 py-4 text-sm glow-accent"
            >
              Contatta il team B2B
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 group hover:bg-card transition-colors"
            >
              <b.Icon size={30} className="text-accent mb-6" strokeWidth={1.5} />
              <h3 className="font-display font-black uppercase text-lg mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}