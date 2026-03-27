import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: "lovable",
      title: "TKS x Lovable Challenge",
      tagline: "in collaboration with Lovable",
      description: "Out of hundreds of teams globally, we made it to the top 7. We worked on a real-world challenge through TKS in collaboration with Lovable, and now we're presenting directly to Lovable's executive team.",
      date: "Top 7 Globally — Presenting to Lovable",
      image: "lovable-project.png",
      featured: true
    },
    {
      id: "routinely",
      title: "Routinely",
      tagline: "Routine Tracking App",
      description: "A comprehensive routine tracking application I've built to help users forge discipline. Designed with a clean, intuitive interface to make habit formation seamless and rewarding.",
      date: "Active Project",
      image: "routinely-app.png",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black/[0.03] border-y border-black/[0.07]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Applying my skills to real-world problems. Here's what I'm actively building right now.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-black/[0.10] hover:border-primary/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[250px] sm:h-[300px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img
                  src={`${import.meta.env.BASE_URL}images/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {project.featured && (
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-medium text-white shadow-lg">
                    <Sparkles size={14} className="text-primary" />
                    Global Challenge
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 relative z-20 bg-gradient-to-t from-card via-card to-card/90">
                <div className="flex items-center mb-2">
                  <span className="text-primary text-sm font-bold tracking-wider uppercase">
                    {project.tagline}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                  <Calendar size={16} className="text-muted-foreground" />
                  {project.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
