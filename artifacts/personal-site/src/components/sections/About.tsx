import { motion } from "framer-motion";
import { BrainCircuit, PenTool, Rocket } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: <Rocket className="text-primary w-6 h-6" />,
      title: "Action Over Theory",
      desc: "I believe in building real solutions. Execution matters more than perfection."
    },
    {
      icon: <BrainCircuit className="text-primary w-6 h-6" />,
      title: "AI Enthusiast",
      desc: "Deeply interested in machine learning and creating applications that leverage AI."
    },
    {
      icon: <PenTool className="text-primary w-6 h-6" />,
      title: "Product Design",
      desc: "Designing clean, intuitive interfaces that solve actual user problems."
    }
  ];

  return (
    <section id="about" className="pt-10 pb-24 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Beyond the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-300">
                Classroom.
              </span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                My name is Zain Faiz. I'm a student based in Dubai, but my real education happens when I'm building.
              </p>
              <p>
                Through the TKS Innovate program, I've developed a mindset that prioritizes <strong className="text-foreground">execution over perfection</strong> and <strong className="text-foreground">discipline over motivation</strong>.
              </p>
              <p>
                I write monthly on Medium, documenting my journey, the lessons I've learned, and the mental frameworks that keep me pushing forward.
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-foreground">500+</span>
                <span className="text-sm text-muted-foreground">Connections on LinkedIn</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl bg-black/[0.04] border border-black/[0.07] hover:border-primary/30 transition-all duration-300 hover:bg-black/[0.07] ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
