import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Youtube, Mail, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const EMAIL = "zainffaiz@gmail.com";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Writing", href: "#writing" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-black/[0.07] shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold tracking-tighter hover:text-primary transition-colors">
          Zain<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Connect Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-5 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_15px_-3px_rgba(214,82,61,0.3)] hover:shadow-[0_0_20px_0px_rgba(214,82,61,0.5)]"
            >
              Connect
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-card border border-black/[0.10] rounded-2xl shadow-lg z-50"
                >
                  <div className="flex flex-col p-2">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/zain-faiz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg text-foreground hover:bg-black/[0.06] transition-colors"
                    >
                      <Linkedin size={16} className="text-primary" />
                      LinkedIn
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/@zainffaiz"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg text-foreground hover:bg-black/[0.06] transition-colors"
                    >
                      <Youtube size={16} className="text-primary" />
                      YouTube
                    </a>

                    {/* Email */}
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg text-foreground hover:bg-black/[0.06] transition-colors text-left w-full"
                    >
                      <Mail size={16} className="text-primary" />
                      <span className="flex-1">Email</span>
                      {emailCopied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    </button>

                    {emailCopied && (
                      <div className="text-xs text-center text-primary mt-1 px-4">
                        Copied to clipboard
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-card border-b border-black/[0.07] shadow-md md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
               <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Connect Menu */}
            <div className="mt-4 pt-4 border-t border-black/[0.07] flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/zain-faiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 text-base rounded-lg text-foreground hover:bg-black/[0.06] transition-colors"
              >
                <Linkedin size={18} className="text-primary" />
                LinkedIn
              </a>

              <a
                href="https://www.youtube.com/@zainffaiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 text-base rounded-lg text-foreground hover:bg-black/[0.06] transition-colors"
              >
                <Youtube size={18} className="text-primary" />
                YouTube
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-3 px-4 py-2.5 text-base rounded-lg text-foreground hover:bg-black/[0.06] transition-colors text-left w-full"
              >
                <Mail size={18} className="text-primary" />
                <span className="flex-1">Copy Email</span>
                {emailCopied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
