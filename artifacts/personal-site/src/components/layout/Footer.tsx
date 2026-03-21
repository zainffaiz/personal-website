import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
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
        
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/zainf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            aria-label="Email"
            onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:hello@example.com";
            }}
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Zain Faiz. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with intention.</p>
      </div>
    </footer>
  );
}
