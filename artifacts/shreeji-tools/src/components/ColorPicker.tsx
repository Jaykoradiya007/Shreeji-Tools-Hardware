import { useState } from "react";

const colorOptions = [
  {
    id: "orange",
    label: "Safety Orange",
    hex: "#E8570A",
    hsl: "21 92% 47%",
    note: "Current",
    swatch: "#E8570A",
  },
  {
    id: "navy",
    label: "Navy Blue",
    hex: "#1A3C5E",
    hsl: "209 56% 24%",
    note: "Professional & Trusted",
    swatch: "#1A3C5E",
  },
  {
    id: "green",
    label: "Metallic Green",
    hex: "#2D6A4F",
    hsl: "153 41% 30%",
    note: "Industrial & Fresh",
    swatch: "#2D6A4F",
  },
  {
    id: "red",
    label: "Signal Red",
    hex: "#C1121F",
    hsl: "355 82% 42%",
    note: "Bold & Powerful",
    swatch: "#C1121F",
  },
  {
    id: "blue",
    label: "Steel Blue",
    hex: "#1D4ED8",
    hsl: "221 76% 48%",
    note: "Corporate & Modern",
    swatch: "#1D4ED8",
  },
  {
    id: "gold",
    label: "Amber Gold",
    hex: "#C8860A",
    hsl: "37 91% 41%",
    note: "Premium & Warm",
    swatch: "#C8860A",
  },
];

export function ColorPicker() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("orange");

  const applyColor = (opt: (typeof colorOptions)[0]) => {
    document.documentElement.style.setProperty("--primary", opt.hsl);
    document.documentElement.style.setProperty("--ring", opt.hsl);
    document.documentElement.style.setProperty("--accent", opt.hsl);
    setActive(opt.id);
  };

  const activeColor = colorOptions.find((c) => c.id === active)!;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2.5 text-white text-xs font-semibold uppercase tracking-widest shadow-lg transition-colors rounded-sm"
        style={{ backgroundColor: activeColor.hex }}
      >
        <span
          className="w-3 h-3 rounded-full border-2 border-white/60 inline-block"
          style={{ backgroundColor: activeColor.hex }}
        />
        {open ? "Close" : "Choose Color"}
      </button>

      {open && (
        <div className="absolute bottom-12 left-0 bg-background border-2 border-border shadow-2xl rounded-sm w-64 overflow-hidden">
          <div className="px-4 py-3 bg-foreground text-background text-xs font-semibold uppercase tracking-widest">
            Accent Color
          </div>
          <div className="divide-y divide-border">
            {colorOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => applyColor(opt)}
                className={`w-full text-left px-4 py-3 hover:bg-secondary transition-colors flex items-center gap-3 ${
                  active === opt.id ? "bg-secondary" : ""
                }`}
              >
                <span
                  className="w-8 h-8 rounded-sm flex-shrink-0 border border-black/10 shadow-sm"
                  style={{ backgroundColor: opt.hex }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-foreground flex items-center justify-between">
                    {opt.label}
                    {active === opt.id && (
                      <i className="fa-solid fa-check text-xs" style={{ color: opt.hex }} />
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">{opt.note}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="px-4 py-3 bg-secondary text-xs text-muted-foreground border-t border-border">
            Preview live — tell me which to keep permanently.
          </div>
        </div>
      )}
    </div>
  );
}
