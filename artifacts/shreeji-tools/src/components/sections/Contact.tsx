import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">GET IN TOUCH</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">Visit our shop or drop us a message for quotes and inquiries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-background border-2 border-border p-8 md:p-12 shadow-xl">
          
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold font-display mb-8 pb-4 border-b">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Our Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Shreeji Tools and Hardware, Radhe Estate,<br/>
                    Balaji Industrial Area, B/H. Maldhari Hotel,<br/>
                    Gondal Road, Kothariya,<br/>
                    Rajkot – 360004
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-phone text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone Number</h4>
                  <p className="text-muted-foreground text-lg font-semibold">+91 98765 43210</p>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#25D366] hover:underline mt-2"
                  >
                    <i className="fa-brands fa-whatsapp mr-1"></i> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-clock text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                  <p className="text-muted-foreground text-destructive font-semibold mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form & Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-secondary p-6 md:p-8 border border-border">
              <h3 className="text-xl font-semibold font-display mb-6">Send an Enquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Replace YOUR_ACCESS_KEY with your Web3Forms key from https://web3forms.com */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
                <input type="hidden" name="subject" value="New Enquiry from Shreeji Tools Website" />
                <input type="hidden" name="from_name" value="Shreeji Tools System" />

                <div>
                  <Input name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <Input name="phone" type="tel" placeholder="Phone Number" required />
                </div>
                <div>
                  <Textarea name="message" placeholder="Message or Product Enquiry" required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>
                
                {isSuccess && (
                  <div className="p-3 bg-green-100 text-green-800 text-sm font-semibold rounded border border-green-200 text-center">
                    Message sent successfully! We will contact you soon.
                  </div>
                )}
              </form>
            </div>

            <div className="w-full h-[300px] border-2 border-border overflow-hidden bg-muted">
              <iframe 
                src="https://www.google.com/maps?q=22.2396696,70.8028702&hl=en&z=18&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shreeji Tools Google Maps Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
