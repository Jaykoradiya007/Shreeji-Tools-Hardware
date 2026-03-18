import { motion } from "framer-motion";

const features = [
  {
    icon: "fa-warehouse",
    title: "Deep Stock",
    desc: "500+ products always available"
  },
  {
    icon: "fa-certificate",
    title: "Quality Assured",
    desc: "Only genuine, trusted brands"
  },
  {
    icon: "fa-calendar-check",
    title: "Serving Since 2017",
    desc: "7+ years of local expertise"
  },
  {
    icon: "fa-users",
    title: "All Customer Types",
    desc: "Retail, Industrial & Contractors"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative">
      <div className="absolute inset-0 bg-diagonal-stripes opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
                <i className={`fa-solid ${feat.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{feat.title}</h3>
              <p className="text-primary-foreground/80 text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
