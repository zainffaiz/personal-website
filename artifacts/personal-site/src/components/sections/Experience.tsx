import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Code2, Briefcase, Target, Database, Leaf, Users, Sparkles, FileText, Youtube, X } from "lucide-react";

interface ExperienceLink {
  label: string;
  url: string;
  icon: React.ReactNode;
}

interface ExperienceItem {
  id: number;
  title: string;
  date: string;
  icon: React.ReactNode;
  desc: string;
  highlight: boolean;
  links?: ExperienceLink[];
  image?: string;
}

export function Experience() {
  const [openPopup, setOpenPopup] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Vice-Captain, Falcon House",
      date: "Sep 2025",
      icon: <Users size={20} />,
      desc: "Took on the Vice-Captain role for Falcon House, leading with discipline and drive.",
      highlight: false
    },
    {
      id: 2,
      title: "MNIST Digit Recognition",
      date: "Nov 2025",
      icon: <Database size={20} />,
      desc: "My 'Replicate' project: built a machine learning model using Python and TensorFlow/Keras to recognize handwritten digits from scratch.",
      highlight: true,
      image: "project-mnist.png",
      links: [
        {
          label: "Read the Article",
          url: "https://medium.com/@zainffaiz/understanding-how-machines-learn-building-a-neural-network-for-handwritten-digit-recognition-e7c0a3772cc1",
          icon: <FileText size={15} />
        },
        {
          label: "Watch the Video",
          url: "https://www.youtube.com/watch?v=7C_Yu6adJe8",
          icon: <Youtube size={15} />
        }
      ]
    },
    {
      id: 3,
      title: "TKS Demo Day",
      date: "Dec 7, 2025",
      icon: <Trophy size={20} />,
      desc: "Presented my core work and learnings to The Knowledge Society audience.",
      highlight: false
    },
    {
      id: 4,
      title: "Xpanceo Mini-Challenge",
      date: "Dec 13–20, 2025",
      icon: <Target size={20} />,
      desc: "Completed an intense 1-week strategic challenge through TKS focusing on deep tech and team execution.",
      highlight: false
    },
    {
      id: 5,
      title: "School Garden Project",
      date: "Jan 2026",
      icon: <Leaf size={20} />,
      desc: "Led fundraising efforts and oversaw the growing of tomatoes, radishes, mint, carrots, and more.",
      highlight: false
    },
    {
      id: 6,
      title: "Symbiosis AI Hackathon 2026",
      date: "Feb 11, 2026",
      icon: <Code2 size={20} />,
      desc: "My first hackathon. Built a working AI web app in just 2 hours using Lovable. Didn't win, but gained massive real-world building experience.",
      highlight: true
    },
    {
      id: 7,
      title: "Harvard Business Case Study",
      date: "Feb 2026",
      icon: <Briefcase size={20} />,
      desc: "Analyzed a 23-page case document on Starbucks' strategy in China through a TKS session, presenting actionable insights.",
      highlight: false
    },
    {
      id: 8,
      title: "TKS x Lovable Challenge",
      date: "Feb – Mar 2026",
      icon: <Sparkles size={20} />,
      desc: "Selected as one of the top 7 teams globally out of hundreds. Worked on a real-world challenge through TKS in collaboration with Lovable — now presenting directly to their executive team.",
      highlight: true
    },
    {
      id: 9,
      title: "Text Emotion Classifier",
      date: "Mar 2026",
      icon: <Database size={20} />,
      desc: "Built an NLP model trained on the GoEmotions dataset that analyzes a sentence and predicts its emotional tone across 10 emotions — joy, sadness, anger, fear, surprise, and more. A deep-dive into how transformer-based models interpret emotional signals in text.",
      highlight: true,
      image: "project-emotion-classifier.png"
    },
    {
      id: 10,
      title: "Started Building Routinely",
      date: "Mar 2026",
      icon: <Target size={20} />,
      desc: "Began developing Routinely, a routine tracking app designed to make habit formation seamless and help users build real discipline.",
      highlight: true
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Highlights & Milestones</h2>
          <p className="text-lg text-muted-foreground">The sprints, projects, and roles shaping my journey.</p>
        </div>

        <div className="relative ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:mr-auto md:w-[calc(50%-20px)] md:pr-12 md:text-right" : "md:ml-auto md:w-[calc(50%-20px)] md:pl-12 md:text-left"
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-background bg-card shadow-lg z-10 ${
                index % 2 === 0 ? "left-[-20px] md:left-auto md:-right-5" : "left-[-20px] md:-left-5"
              } ${exp.highlight ? "text-primary border-primary/20" : "text-muted-foreground border-black/[0.10]"}`}>
                {exp.icon}
              </div>

              <div
                onClick={() => exp.links ? setOpenPopup(openPopup === exp.id ? null : exp.id) : null}
                className={`p-6 rounded-2xl bg-black/[0.04] border transition-all duration-300 hover:-translate-y-1 hover:bg-black/[0.07] ${
                  exp.highlight ? "border-primary/30 shadow-[0_4px_20px_-5px_rgba(214,82,61,0.15)]" : "border-black/[0.07]"
                } ${exp.links ? "cursor-pointer" : ""}`}
              >
                <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  exp.highlight ? "text-primary" : "text-muted-foreground"
                }`}>
                  {exp.date}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{exp.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
                {exp.image && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-black/[0.08]">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${exp.image}`}
                      alt={exp.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                {exp.links && (
                  <p className="text-xs text-primary/70 mt-3 font-medium">Click to see links →</p>
                )}
              </div>

              {/* Popup */}
              <AnimatePresence>
                {openPopup === exp.id && exp.links && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 mt-2 w-full left-0 md:left-auto"
                  >
                    <div className="bg-card border border-primary/30 rounded-2xl p-4 shadow-xl shadow-black/40">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Links</span>
                        <button
                          onClick={(e) => { e.stopPropagation(); setOpenPopup(null); }}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div className="flex flex-col gap-2">
                        {exp.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1.5 px-2 rounded-lg hover:bg-black/[0.05]"
                          >
                            <span className="text-primary">{link.icon}</span>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          {/* Centered line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-px w-[2px] bg-white/10 z-0"></div>
        </div>
      </div>
    </section>
  );
}
