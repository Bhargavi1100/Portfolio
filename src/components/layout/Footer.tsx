import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui";
import { personalInfo, navItems } from "@/data";

function Footer() {
  return (
    <footer className="py-10 bg-slate-900 dark:bg-slate-950 text-slate-400">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">{personalInfo.name}</h3>
            <p className="text-sm">{personalInfo.title} · {personalInfo.location.city}, {personalInfo.location.country}</p>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-3">Quick Links</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/Bhargavi1100" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/bhargavi-k-pai-b44423287/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> by {personalInfo.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
