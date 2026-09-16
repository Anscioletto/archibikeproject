import { motion } from "framer-motion";
import { Award, Leaf, Wrench, Truck } from "lucide-react";

const cards = [
  { Icon: Award, title: "Qualità Premium", body: "Materiali certificati e componenti selezionati dai migliori produttori europei." },
  { Icon: Leaf, title: "Sostenibilità", body: "Produzione a basso impatto ambientale. Ogni bici venduta pianta un albero." },
  { Icon: Wrench, title: "Assistenza", body: "Supporto tecnico dedicato e garanzia 2 anni su telaio e componenti." },
  { Icon: Truck, title: "Consegna Rapida", body: "Spedizione in 48 ore in tutta Italia, tracciabile dal nostro portale Odoo." },
];

export default function WhyChoose() {
  return (
    <section id="perche" className="relative py-32 lg:py-48 px-6 lg:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-8">
          <div className="text-xs font-display uppercase tracking-[0.4em] text-accent">· I nostri valori</div>
          <h2 className="font-display font-black uppercase text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.9]">
            Perché scegliere<br />
            <span className="text-stroke">Archibike?</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-xl">
            <p>
              ArchiBike non è solo un marchio: è un progetto nato dalla passione di un gruppo di studenti universitari che credono nel ciclismo come stile di vita sostenibile e libero.
            </p>
            <p>
              Ogni bici è progettata con cura artigianale, testata sul campo e costruita con materiali selezionati. Offriamo un rapporto qualità-prezzo imbattibile perché crediamo che la bicicletta perfetta non debba costare una fortuna.
            </p>
            <p>
              Grazie alla nostra piattaforma Odoo, gestiamo ogni ordine con precisione: dalla produzione alla consegna, sei sempre aggiornato in tempo reale.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border self-start">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors"
            >
              <c.Icon size={32} className="text-accent mb-6" strokeWidth={1.5} />
              <h3 className="font-display font-black uppercase text-xl mb-3">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}