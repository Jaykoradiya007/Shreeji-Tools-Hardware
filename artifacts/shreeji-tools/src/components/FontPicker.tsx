import { useState, useEffect } from "react";

const fontOptions = [
  {
    id: "rajdhani-dmsans",
    label: "Rajdhani + DM Sans",
    display: "Rajdhani",
    body: "DM Sans",
    displayWeight: "600",
    note: "Current",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;400;500;600&display=swap",
  },
  {
    id: "oswald-nunito",
    label: "Oswald + Nunito Sans",
    display: "Oswald",
    body: "Nunito Sans",
    displayWeight: "500",
    note: "Clean & Structured",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&family=Nunito+Sans:opsz,wght@6..12,300;400;500;600&display=swap",
  },
  {
    id: "exo2-opensans",
    label: "Exo 2 + Open Sans",
    display: "Exo 2",
    body: "Open Sans",
    displayWeight: "500",
    note: "Tech & Industrial",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600&family=Open+Sans:wght@300;400;500;600&display=swap",
  },
  {
    id: "titillium-lato",
    label: "Titillium Web + Lato",
    display: "Titillium Web",
    body: "Lato",
    displayWeight: "600",
    note: "Professional & Sharp",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&family=Lato:wght@300;400;700&display=swap",
  },
  {
    id: "montserrat-sourcesans",
    label: "Montserrat + Source Sans 3",
    display: "Montserrat",
    body: "Source Sans 3",
    displayWeight: "500",
    note: "Modern & Corporate",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Source+Sans+3:wght@300;400;500;600&display=swap",
  },
  {
    id: "saira-inter",
    label: "Saira + Inter",
    display: "Saira",
    body: "Inter",
    displayWeight: "500",
    note: "Sleek & Modern",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap",
  },
];

export function FontPicker() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("rajdhani-dmsans");

  const applyFont = (opt: (typeof fontOptions)[0]) => {
    let link = document.getElementById("dynamic-font-link") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.id = "dynamic-font-link";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    link.href = opt.googleUrl;

    document.documentElement.style.setProperty(
      "--app-font-display",
      `'${opt.display}', sans-serif`
    );
    document.documentElement.style.setProperty(
      "--app-font-sans",
      `'${opt.body}', sans-serif`
    );

    setActive(opt.id);
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.id = "font-picker-override";
    style.textContent = `
      h1, h2, h3, h4, h5, h6, .font-display {
        font-family: var(--app-font-display, 'Rajdhani', sans-serif) !important;
      }
      body, p, span, a, li, input, textarea, button {
        font-family: var(--app-font-sans, 'DM Sans', sans-serif);
      }
    `;
    document.head.appendChild(style);
    document.documentElement.style.setProperty(
      "--app-font-display",
      `'Rajdhani', sans-serif`
    );
    return () => {
      document.getElementById("font-picker-override")?.remove();
    };
  }, []);

  return (
    <div className="fixed bottom-24 left-4 z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2.5 bg-foreground text-background text-xs font-semibold uppercase tracking-widest shadow-lg hover:bg-primary transition-colors rounded-sm"
      >
        <i className="fa-solid fa-font text-sm"></i>
        {open ? "Close Fonts" : "Choose Font"}
      </button>

      {open && (
        <div className="absolute bottom-12 left-0 bg-background border-2 border-border shadow-2xl rounded-sm w-72 overflow-hidden">
          <div className="px-4 py-3 bg-foreground text-background text-xs font-semibold uppercase tracking-widest">
            Select Font Pair
          </div>
          <div className="divide-y divide-border">
            {fontOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => applyFont(opt)}
                className={`w-full text-left px-4 py-3 hover:bg-secondary transition-colors group ${
                  active === opt.id ? "bg-primary/10 border-l-4 border-primary" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="text-base font-semibold text-foreground"
                    style={{ fontFamily: `'${opt.display}', sans-serif` }}
                  >
                    {opt.display}
                  </span>
                  {active === opt.id && (
                    <i className="fa-solid fa-check text-primary text-xs"></i>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">
                  Body: <span style={{ fontFamily: `'${opt.body}', sans-serif` }}>{opt.body}</span>
                </div>
                <div className="text-xs text-primary mt-0.5">{opt.note}</div>
              </button>
            ))}
          </div>
          <div className="px-4 py-3 bg-secondary text-xs text-muted-foreground border-t border-border">
            Click any option to preview it live on the page. Tell me which one you like to apply it permanently.
          </div>
        </div>
      )}
    </div>
  );
}
