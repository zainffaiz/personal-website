import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-6 lg:min-h-screen lg:flex lg:items-center lg:pt-20 lg:pb-16 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.10] text-xs font-medium text-muted-foreground mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            2026 TKS Innovate Participant
          </div>

          {/* Mobile: heading + photo side by side */}
          <div className="flex items-start justify-between gap-4 lg:block">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-0 lg:mb-5">
              Student.<br />
              <span className="text-primary">Builder.</span><br />
              Innovator.
            </h1>

            {/* Mobile-only photo beside heading */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:hidden flex-shrink-0"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-black/[0.10] shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}images/zain-avatar.JPG`}
                  alt="Zain Faiz"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <p className="text-base md:text-xl text-muted-foreground mt-4 mb-6 leading-relaxed max-w-lg">
            I build things, not just study. Passionate about AI, product design, and turning ideas into real-world impact.
          </p>

          <div className="flex flex-row gap-3 items-center flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base lg:text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(214,82,61,0.4)]"
            >
              See my work
              <ArrowRight size={18} />
            </a>
            
            <div className="inline-flex items-center gap-2 px-2 py-3 text-muted-foreground font-medium text-sm lg:text-base">
              <MapPin size={16} className="text-primary" />
              Dubai, UAE
            </div>
          </div>
        </motion.div>

        {/* Desktop-only full photo */}
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
