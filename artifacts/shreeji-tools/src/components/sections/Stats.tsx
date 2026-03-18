import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { number: 500, suffix: "+", label: "Products" },
    { prefix: "Since ", isText: true, text: "2017", label: "Established" },
    { number: 3, suffix: "", label: "Customer Types", sublabel: "Retail · Industrial · Contractors" },
    { number: 50, suffix: "+", label: "Top Brands" },
  ];

  return (
    <div className="bg-foreground text-background py-12 border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-border/20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-display font-semibold text-primary mb-2">
                {stat.prefix}
                {stat.isText ? (
                  stat.text
                ) : (
                  inView ? <CountUp end={stat.number!} duration={2.5} /> : "0"
                )}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base font-semibold uppercase tracking-wider text-muted/80">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-xs text-muted/50 mt-1 mt-2">
                  {stat.sublabel}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
