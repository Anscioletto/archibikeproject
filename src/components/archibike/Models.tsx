import { motion } from "framer-motion";
import bikeX1 from "@/assets/bike-x1.jpg";
import bikePro from "@/assets/bike-pro.jpg";
import bikeTrail from "@/assets/bike-trail.jpg";

const models = [
  {
    name: "ARCH X1",
    category: "Urban Electric",
    tagline: "City Domination",
    price: "€2.499",
    image: bikeX1,
    specs: { Weight: "18.4 kg", "Max Speed": "45 km/h", Frame: "Aluminum 7000" },
  },
  {
    name: "ARCH PRO",
    category: "Performance Road",
    tagline: "Born to Race",
    price: "€3.899",
    image: bikePro,
    specs: { Weight: "7.1 kg", "Max Speed": "78 km/h", Frame: "Carbon T1100" },
  },
  {
    name: "ARCH TRAIL",
    category: "Mountain Beast",
    tagline: "No Limits",
    price: "€3.199",
    image: bikeTrail,
    specs: { Weight: "12.8 kg", "Max Speed": "62 km/h", Frame: "Carbon Trail" },
  },
];

export default function Models() {
  return (
    <section id="models" className="relative py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs font-display uppercase tracking-[0.4em] text-accent mb-4">
              · The Lineup
            </div>
            <h2 className="font-display font-black uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
              Three Machines.<br />
              <span className="text-stroke">One Obsession.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Each Archibike is assembled by hand and tuned by riders. Pick yours.
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

              <div className="p-6 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-3xl font-black uppercase">{m.name}</h3>
                  <p className="text-muted-foreground italic text-sm mt-1">"{m.tagline}"</p>
                </div>
                <div className="text-right">
                  <div className="text-[0.65rem] font-display uppercase tracking-widest text-muted-foreground">From</div>
                  <div className="font-display text-2xl font-bold text-accent">{m.price}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
