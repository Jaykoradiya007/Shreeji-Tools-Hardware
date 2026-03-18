import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Hand Tools",
    icon: "fa-hammer",
    items: "Hammers, Screwdrivers, Spanners, Pliers, Chisels, Files",
  },
  {
    title: "Power Tools",
    icon: "fa-bolt",
    items: "Angle Grinders, Drills, Rotary Hammers, Jigsaw, Sanders",
  },
  {
    title: "Abrasives",
    icon: "fa-circle-notch",
    items: "Grinding Wheels, Cutting Wheels, Flap Discs, Sanding Belts",
  },
  {
    title: "Fasteners",
    icon: "fa-screwdriver",
    items: "Nuts, Bolts, Screws, Hinges, Anchors, Washers",
  },
  {
    title: "V-Belts & Drives",
    icon: "fa-gear",
    items: "V-Belts, Timing Belts, Belt Tensioners, Pulleys",
  },
  {
    title: "Safety Equipment",
    icon: "fa-helmet-safety",
    items: "Helmets, Gloves, Safety Glasses, Ear Plugs, Vests",
  },
  {
    title: "Paints & Coatings",
    icon: "fa-paint-roller",
    items: "Enamel Paints, Spray Paints, Primers, Rust Preventives",
  },
  {
    title: "Electrical & Misc",
    icon: "fa-plug",
    items: "Tapes, Adhesives, Lubricants, Wire, Cable Ties",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">WHAT WE STOCK</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need for your next project, all under one roof. Industrial quality at competitive prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-card border-2 border-border p-6 hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
            >
              <div className="w-14 h-14 bg-secondary group-hover:bg-primary/10 rounded-sm flex items-center justify-center mb-6 transition-colors">
                <i className={`fa-solid ${category.icon} text-2xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{category.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {category.items}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-secondary p-8 rounded-sm border border-border"
        >
          <h3 className="text-2xl font-display font-bold mb-2">Can't find what you need?</h3>
          <p className="text-muted-foreground mb-6">We stock 500+ products in our physical store.</p>
          <Button asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white">
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp text-lg mr-2"></i> Message Us on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
