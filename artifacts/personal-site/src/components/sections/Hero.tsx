import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.10] text-xs font-medium text-muted-foreground mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            2026 TKS Innovate Participant
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Student.<br />
            <span className="text-primary">
              Builder.
            </span><br />
            Innovator.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
            I build things, not just study. Passionate about AI, product design, and turning ideas into real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(214,82,61,0.4)]"
            >
              See my work
              <ArrowRight size={18} />
            </a>
            
            <div className="inline-flex items-center gap-2 px-6 py-4 text-muted-foreground font-medium">
              <MapPin size={18} className="text-primary" />
              Dubai, UAE
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-purple-500/10 rounded-[2.5rem] blur-2xl opacity-50"></div>
          <div className="relative aspect-square max-w-[420px] rounded-[2rem] overflow-hidden border border-black/[0.10] shadow-2xl bg-card">
            <img
              src={`${import.meta.env.BASE_URL}images/zain-avatar.JPG`}
              alt="Zain Faiz Avatar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.08)]"></div>
          </div>
          
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-xl border border-black/[0.10] p-4 rounded-2xl shadow-xl"
          >
            <div className="text-sm font-bold text-foreground">Arab Unity School</div>
            <div className="text-xs text-muted-foreground">IGCSE (2014-2028)</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
