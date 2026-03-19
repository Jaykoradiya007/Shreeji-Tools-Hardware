import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919879744025"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-shadow"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          repeatType: "reverse" 
        }}
        className="absolute inset-0 border-2 border-[#25D366] rounded-full opacity-50"
      />
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </motion.a>
  );
}
