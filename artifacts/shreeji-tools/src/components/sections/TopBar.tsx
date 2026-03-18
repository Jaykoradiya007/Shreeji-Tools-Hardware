import { motion } from "framer-motion";

export function TopBar() {
  return (
    <div className="hidden md:block w-full bg-primary text-primary-foreground py-2 px-4 text-xs font-semibold tracking-wide z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-phone"></i> +91 98765 43210
          </span>
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot"></i> Balaji Industrial Area, Gondal Road, Rajkot
          </span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-clock"></i> Est. 2017
        </div>
      </div>
    </div>
  );
}
