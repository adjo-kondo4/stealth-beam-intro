import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Code, Zap, ArrowRight, Menu, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

const services = [
  {
    icon: Shield,
    title: "Pentesting",
    desc: "Identification proactive des failles via des simulations d'attaques réelles contrôlées.",
  },
  {
    icon: Code,
    title: "Audit de Code",
    desc: "Analyse statique et dynamique de vos applications pour garantir un déploiement sécurisé.",
  },
  {
    icon: Zap,
    title: "Incident Response",
    desc: "Intervention rapide en cas de compromission pour limiter les dommages et restaurer l'intégrité.",
  },
];

const credentials = [
  "Certification OSCP & CISSP",
  "Spécialiste Cloud Security (AWS/Azure)",
  "Expert en conformité RGPD/ISO 27001",
];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-extrabold tracking-tighter text-xl">
              CYBER<span className="text-primary">SENTINEL</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("services")} className="nav-link">// SERVICES</button>
            <button onClick={() => scrollTo("about")} className="nav-link">// À PROPOS</button>
            <button onClick={() => scrollTo("contact")} className="btn-primary !py-2 !px-4 !rounded-md text-sm">
              CONTACT
            </button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollTo("services")} className="nav-link text-left">// SERVICES</button>
            <button onClick={() => scrollTo("about")} className="nav-link text-left">// À PROPOS</button>
            <button onClick={() => scrollTo("contact")} className="btn-primary text-center !rounded-md">CONTACT</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="glow-blob top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-6"
          >
            STATUS: SYSTEM SECURED
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            Protégez vos actifs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              dans le cyberespace.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Audit de sécurité, tests d'intrusion et réponse aux incidents. Je transforme vos vulnérabilités en forteresses numériques.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <button onClick={() => scrollTo("contact")} className="btn-primary w-full md:w-auto">
              Demander un Audit
            </button>
            <button onClick={() => scrollTo("services")} className="btn-ghost w-full md:w-auto">
              Voir les Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-16">
          <p className="section-label">// Expertise</p>
          <h2 className="text-3xl font-bold">Solutions de Défense</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              className="glass-card p-8"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden grayscale contrast-125 border border-border">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                alt="Cybersecurity Lab"
                className="object-cover w-full h-full opacity-50"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 hidden md:block">
              <p className="font-mono text-primary text-2xl font-bold">10+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-tighter">Années d'expérience</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <p className="section-label">// Profil</p>
            <h2 className="text-4xl font-bold mb-6">Expert en infiltration et défense.</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ancien analyste SOC, j'accompagne aujourd'hui les entreprises dans la sécurisation de leurs infrastructures critiques. Mon approche combine la rigueur méthodologique et la créativité offensive.
            </p>
            <ul className="space-y-4 font-mono text-sm text-foreground/80">
              {credentials.map((c, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-primary">0{i + 1}.</span> {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          className="max-w-4xl mx-auto glass-card p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Initialiser la connexion</h2>
            <p className="text-muted-foreground">Une question ? Un projet urgent ? Envoyez un message sécurisé.</p>
          </div>

          <form action="https://formspree.io/f/votre_id_ici" method="POST" className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-muted-foreground uppercase ml-1">Nom complet</label>
              <input type="text" name="name" required placeholder="John Doe" className="input-field" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-muted-foreground uppercase ml-1">Email de contact</label>
              <input type="email" name="email" required placeholder="john@company.com" className="input-field" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-mono text-muted-foreground uppercase ml-1">Message</label>
              <textarea name="message" rows={5} required placeholder="Décrivez votre besoin..." className="input-field resize-none" />
            </div>
            <button type="submit" className="md:col-span-2 btn-primary flex items-center justify-center gap-2">
              <span>ENVOYER LE MESSAGE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border text-center px-6">
        <p className="font-mono text-xs text-muted-foreground/50">
          &copy; 2026 CYBERSENTINEL // TOUS DROITS RÉSERVÉS // <span className="text-primary/30">ENCRYPTED_CONNECTION</span>
        </p>
      </footer>
    </div>
  );
}
