import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import imgHandTools from "@/assets/cat-hand-tools.png";
import imgPowerTools from "@/assets/cat-power-tools.png";
import imgAbrasives from "@/assets/cat-abrasives.png";
import imgFasteners from "@/assets/cat-fasteners.png";
import imgVBelts from "@/assets/cat-vbelts.png";
import imgSafety from "@/assets/cat-safety.png";
import imgPaints from "@/assets/cat-paints.png";
import imgElectrical from "@/assets/cat-electrical.png";

const categories = [
  {
    title: "Hand Tools",
    icon: "fa-hammer",
    items: "Hammers, Screwdrivers, Spanners, Pliers, Chisels, Files",
    image: imgHandTools,
  },
  {
    title: "Power Tools",
    icon: "fa-bolt",
    items: "Angle Grinders, Drills, Rotary Hammers, Jigsaw, Sanders",
    image: imgPowerTools,
  },
  {
    title: "Abrasives",
    icon: "fa-circle-notch",
    items: "Grinding Wheels, Cutting Wheels, Flap Discs, Sanding Belts",
    image: imgAbrasives,
  },
  {
    title: "Fasteners",
    icon: "fa-screwdriver",
    items: "Nuts, Bolts, Screws, Hinges, Anchors, Washers",
    image: imgFasteners,
  },
  {
    title: "V-Belts & Drives",
    icon: "fa-gear",
    items: "V-Belts, Timing Belts, Belt Tensioners, Pulleys",
    image: imgVBelts,
  },
  {
    title: "Safety Equipment",
    icon: "fa-helmet-safety",
    items: "Helmets, Gloves, Safety Glasses, Ear Plugs, Vests",
    image: imgSafety,
  },
  {
    title: "Paints & Coatings",
    icon: "fa-paint-roller",
    items: "Enamel Paints, Spray Paints, Primers, Rust Preventives",
    image: imgPaints,
  },
  {
    title: "Electrical & Misc",
    icon: "fa-plug",
    items: "Tapes, Adhesives, Lubricants, Wire, Cable Ties",
    image: imgElectrical,
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">WHAT WE STOCK</h2>
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
              className="group bg-card border-2 border-border hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
            >
              {/* Category Photo */}
              <div className="relative h-44 overflow-hidden bg-secondary">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center shadow-md">
                    <i className={`fa-solid ${category.icon} text-sm text-white`}></i>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-medium font-display mb-2 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {category.items}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-secondary p-8 rounded-sm border border-border"
        >
          <h3 className="text-2xl font-display font-semibold mb-2">Can't find what you need?</h3>
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
