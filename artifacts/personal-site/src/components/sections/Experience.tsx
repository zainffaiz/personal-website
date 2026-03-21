import { motion } from "framer-motion";
import { Trophy, Code2, Briefcase, Target, Database, Leaf, Users } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Symbiosis AI Hackathon 2026",
      date: "Feb 11",
      icon: <Code2 size={20} />,
      desc: "My first hackathon. Built a working AI web app in just 2 hours using Lovable. Didn't win, but gained massive real-world building experience.",
      highlight: true
    },
    {
      id: 2,
      title: "Harvard Business Case Study",
      date: "TKS Event",
      icon: <Briefcase size={20} />,
      desc: "Analyzed a 23-page complex case document on Starbucks' strategy in China, presenting actionable insights.",
      highlight: false
    },
    {
      id: 3,
      title: "TKS Demo Day",
      date: "Dec 7",
      icon: <Trophy size={20} />,
      desc: "Presented my core work and learnings to The Knowledge Society audience.",
      highlight: false
    },
    {
      id: 4,
      title: "Xpanceo Mini-Challenge",
      date: "TKS Sprint",
      icon: <Target size={20} />,
      desc: "Completed an intense 1-week strategic challenge focusing on deep tech and execution.",
      highlight: false
    },
    {
      id: 5,
      title: "MNIST Digit Recognition",
      date: "ML Project",
      icon: <Database size={20} />,
      desc: "My 'Replicate' project: built a machine learning model using Python and TensorFlow/Keras to recognize handwritten digits.",
      highlight: true
    },
    {
      id: 6,
      title: "School Garden Project",
      date: "Leadership",
      icon: <Leaf size={20} />,
      desc: "Led fundraising efforts and cultivated tomatoes, radishes, mint, and carrots.",
      highlight: false
    },
    {
      id: 7,
      title: "Basketball Team Vice-Captain",
      date: "Falcon House",
      icon: <Users size={20} />,
      desc: "Serving as Vice-Captain, leading practices and fostering team resilience and discipline.",
      highlight: false
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Highlights & Milestones</h2>
          <p className="text-lg text-muted-foreground">The sprints, projects, and roles shaping my journey.</p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
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
              } ${exp.highlight ? "text-primary border-primary/20" : "text-muted-foreground border-white/10"}`}>
                {exp.icon}
              </div>

              <div className={`p-6 rounded-2xl bg-white/5 border transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 ${
                exp.highlight ? "border-primary/30 shadow-[0_4px_20px_-5px_rgba(249,115,22,0.15)]" : "border-white/5"
              }`}>
                <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  exp.highlight ? "text-primary" : "text-muted-foreground"
                }`}>
                  {exp.date}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{exp.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
          {/* Centered line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-px w-[2px] bg-white/10 z-0"></div>
        </div>
      </div>
    </section>
  );
}
