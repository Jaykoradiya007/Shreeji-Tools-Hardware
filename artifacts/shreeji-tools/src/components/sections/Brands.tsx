import { motion } from "framer-motion";

const brands = [
  "Bosch", "Stanley", "Makita", "3M", "Taparia", 
  "Dewalt", "Hitachi", "Norton", "Cumi", "Fevicol", 
  "Asian Paints", "Ambica", "Jhalani", "Venus", "Karam"
];

export function Brands() {
  return (
    <section id="brands" className="py-20 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-display font-bold mb-10">BRANDS WE CARRY</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="px-6 py-3 bg-background border-2 border-primary/20 text-foreground font-bold tracking-wider uppercase text-sm shadow-sm hover:border-primary hover:bg-primary hover:text-white transition-all cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
