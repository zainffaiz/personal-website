import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

export function Newsletters() {
  const articles = [
    {
      title: "February on Fire: Challenges, Clarity & Coming Through",
      date: "Feb 2026",
      link: "https://medium.com/@zainffaiz/february-on-fire-challenges-clarity-coming-through-ac54e933e71a",
      excerpt: "Reflecting on my first hackathon and the clarity that comes from intense building sprints."
    },
    {
      title: "January in Motion: Resilience, Reality & Resolve",
      date: "Jan 2026",
      link: "https://medium.com/@zainffaiz/january-in-motion-resilience-reality-resolve-21ee3226302b",
      excerpt: "Setting the tone for the year with a focus on deep technical learning and execution."
    },
    {
      title: "December Unleashed: Momentum, Mindset & Memories",
      date: "Dec 2025",
      link: "https://medium.com/@zainffaiz/december-unleashed-momentum-mindset-memories-30d2fbc8c7c6",
      excerpt: "Wrapping up the year with the TKS Demo Day and monumental shifts in mindset."
    },
    {
      title: "November in Motion: Growth, Grind & Good Times",
      date: "Nov 2025",
      link: "https://medium.com/@zainffaiz/november-in-motion-growth-grind-good-times-bf66cc0fbaea",
      excerpt: "The grind of consistency and learning to balance school with building."
    }
  ];

  return (
    <section id="writing" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
              <BookOpen size={18} />
              Monthly Reflections
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Documenting the Journey.</h2>
          </div>
          <a 
            href="https://medium.com/@zainffaiz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors pb-2"
          >
            Follow on Medium <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              target={article.link !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group block p-8 rounded-2xl bg-background border border-black/[0.10] hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-sm text-muted-foreground mb-3">{article.date}</div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {article.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
