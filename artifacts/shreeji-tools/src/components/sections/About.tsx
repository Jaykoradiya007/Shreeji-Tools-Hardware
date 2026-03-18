import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">ABOUT SHREEJI</h2>
            <div className="w-20 h-1.5 bg-primary mb-8"></div>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Established in 2017, Shreeji Tools & Hardware is a trusted name in Rajkot's tools and hardware trade. We supply a wide range of 500+ products — from everyday hand tools and power tools to industrial-grade fasteners, safety equipment, V-belts, abrasives, paints, and much more.
              </p>
              <p>
                Whether you're a professional contractor, a factory maintenance team, or a walk-in retail customer, we're your one-stop shop for all things tools and hardware. Our team is knowledgeable, our stock is deep, and our prices are competitive.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-boxes-stacked text-3xl text-primary"></i>
                <h4 className="font-bold text-foreground">Wide Selection</h4>
                <p className="text-sm text-muted-foreground">500+ Products</p>
              </div>
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-award text-3xl text-primary"></i>
                <h4 className="font-bold text-foreground">Trusted Brands</h4>
                <p className="text-sm text-muted-foreground">Industry leaders</p>
              </div>
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-comments text-3xl text-primary"></i>
                <h4 className="font-bold text-foreground">Expert Advice</h4>
                <p className="text-sm text-muted-foreground">Knowledgeable staff</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full min-h-[400px]"
          >
            {/* CSS Illustrated Visual / Abstract Geometric composition */}
            <div className="absolute inset-0 bg-secondary rounded-sm border-2 border-border p-8 flex flex-col justify-between">
              <div className="w-full h-full border-4 border-dashed border-primary/20 relative">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary -translate-x-2 -translate-y-2"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary translate-x-2 translate-y-2"></div>
                
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                   <div className="absolute w-64 h-64 border-[10px] border-primary/10 rounded-full"></div>
                   <div className="absolute w-40 h-40 bg-grid-pattern opacity-40 rotate-45"></div>
                   <div className="bg-background border-4 border-foreground p-8 shadow-[8px_8px_0px_0px_hsl(var(--primary))] z-10 transform -rotate-3">
                     <div className="text-6xl font-display font-bold text-foreground">2017</div>
                     <div className="text-lg font-bold tracking-widest uppercase text-primary mt-1">Rajkot, Gujarat</div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
