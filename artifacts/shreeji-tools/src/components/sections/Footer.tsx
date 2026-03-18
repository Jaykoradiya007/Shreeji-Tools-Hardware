export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t-8 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <span className="font-display font-semibold text-2xl tracking-tight text-white mb-4 block">
              SHREEJI <span className="text-primary">TOOLS & HARDWARE</span>
            </span>
            <p className="text-white/60 mb-6 max-w-sm">
              The Strength Behind Every Build. Rajkot's leading supplier of industrial tools, hardware, and safety equipment.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/919876543210" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fa-solid fa-envelope text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-display uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/60 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="text-white/60 hover:text-primary transition-colors">Products</a></li>
              <li><a href="#brands" className="text-white/60 hover:text-primary transition-colors">Brands We Carry</a></li>
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-display uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-primary"></i>
                <span>Gondal Road, Kothariya,<br/>Rajkot – 360004</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-phone mt-1 text-primary"></i>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-clock mt-1 text-primary"></i>
                <span>Mon-Sat: 9AM - 7PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Shreeji Tools & Hardware. All rights reserved.</p>
          <p>Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
