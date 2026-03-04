import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/Footer";
import { Send, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20 md:pt-24">
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-3 block">Get in Touch</span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              We'd Love to Hear From You
            </h1>
            <p className="text-muted-foreground text-sm">
              Questions about our products? Want to collaborate? Drop us a line.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              hello@lumiere.beauty
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Paris, France
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <p className="font-serif text-xl text-foreground mb-2">Thank you! ✨</p>
              <p className="text-sm text-muted-foreground">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-xs tracking-wider uppercase">Name</Label>
                  <Input id="name" required className="mt-1.5 rounded-lg" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs tracking-wider uppercase">Email</Label>
                  <Input id="email" type="email" required className="mt-1.5 rounded-lg" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="text-xs tracking-wider uppercase">Message</Label>
                <Textarea id="message" required className="mt-1.5 rounded-lg min-h-[120px]" placeholder="Tell us what's on your mind..." />
              </div>
              <Button type="submit" className="rounded-full px-8 font-sans text-xs tracking-wider uppercase gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
