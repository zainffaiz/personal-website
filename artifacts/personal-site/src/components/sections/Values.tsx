import { motion } from "framer-motion";
import { Hammer, Flame, MountainSnow, ArrowUpCircle, Anchor } from "lucide-react";

export function Values() {
  const values = [
    {
      icon: <Hammer size={24} />,
      title: "Execution Over Perfection",
      desc: "Ideas are cheap. Shipping real products is what matters."
    },
    {
      icon: <Flame size={24} />,
      title: "Discipline Over Motivation",
      desc: "Motivation fades. Discipline is what keeps you building every single day."
    },
    {
      icon: <MountainSnow size={24} />,
      title: "Resilience Through Adversity",
      desc: "Challenges are just data points on what doesn't work. Adapt and try again."
    },
    {
      icon: <ArrowUpCircle size={24} />,
      title: "Exceeding Expectations",
      desc: "Standard is not enough. Aim to do more than what's asked."
    },
    {
      icon: <Anchor size={24} />,
      title: "Stoicism",
      desc: "Focus fiercely on what you can control. Let go of what you can't."
    }
  ];

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16">The Operating System</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[320px] hover:bg-white/10 hover:border-white/20 transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-primary mb-4 shadow-inner">
                {value.icon}
              </div>
              <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
