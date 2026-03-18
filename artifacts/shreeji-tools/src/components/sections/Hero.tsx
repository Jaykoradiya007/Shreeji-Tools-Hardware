import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center bg-secondary overflow-hidden pt-10 pb-20">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-diagonal-stripes opacity-40 transform translate-x-1/2"></div>
      
      {/* Corner Bracket Decor */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t-4 border-l-4 border-primary hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b-4 border-r-4 border-primary hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 bg-primary text-primary-foreground font-medium tracking-widest text-xs uppercase mb-6 shadow-md transform -skew-x-12">
              <span className="inline-block transform skew-x-12">
                The Strength Behind Every Build
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-display font-semibold leading-[0.9] text-foreground mb-6"
          >
            YOUR <span className="text-primary">WORKSHOP</span><br />
            STARTS HERE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl font-medium"
          >
            Rajkot's trusted destination for 500+ tools, hardware, and industrial supplies — since 2017.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto text-base">
              <a href="#products">Explore Products</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base bg-background/50 backdrop-blur-sm">
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
