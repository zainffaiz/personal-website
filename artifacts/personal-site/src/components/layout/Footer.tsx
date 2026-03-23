import { useState } from "react";
import { Linkedin, Mail, Youtube, Copy, Check, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const EMAIL = "zainffaiz@gmail.com";

export function Footer() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-white/5 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl font-bold">Zain Faiz</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Student. Builder. Innovator. <br className="hidden md:block" />
            Based in Dubai, UAE.
          </p>
        </div>

        <div className="flex items-center gap-6 relative">
          <a
            href="https://www.linkedin.com/in/zain-faiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.youtube.com/@zainffaiz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>

          {/* Email button */}
          <div className="relative">
            <button
              onClick={() => setShowEmail(!showEmail)}
              className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
              aria-label="Email"
            >
              <Mail size={20} />
            </button>

            <AnimatePresence>
              {showEmail && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute bottom-full right-0 mb-3 z-50"
                >
                  <div className="bg-card border border-white/10 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 flex items-center gap-3 whitespace-nowrap">
                    <span className="text-sm text-foreground font-medium">{EMAIL}</span>
                    <button
                      onClick={handleCopy}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Copy email"
                    >
                      {copied ? <Check size={15} className="text-green-400" /> : <Copy size={15} />}
                    </button>
                    <button
                      onClick={() => setShowEmail(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Close"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Zain Faiz. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with intention.</p>
      </div>
    </footer>
  );
}
