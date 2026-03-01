import React from "react";
import Link from "@docusaurus/Link";
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Globe,
  Heart,
  Code2,
} from "lucide-react";

const socialLinks = [
  { href: "https://github.com/ajay-dhangar", label: "GitHub", icon: Github },
  { href: "https://twitter.com/CodesWithAjay", label: "Twitter / X", icon: Twitter },
  { href: "https://linkedin.com/in/ajay-dhangar", label: "LinkedIn", icon: Linkedin },
  { href: "https://youtube.com/@ajay-dhangar", label: "YouTube", icon: Youtube },
  { href: "https://codeharborhub.github.io", label: "CodeHarborHub", icon: Globe },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-border/40 bg-[var(--background)] backdrop-blur-xl">
      
      {/* Gradient Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 blur-3xl opacity-40" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/99037494?v=4"
                alt="Ajay Dhangar"
                className="h-12 w-12 rounded-full ring-2 ring-primary/30 shadow-lg"
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
            </div>

            <div>
              <p className="text-base font-semibold text-foreground">
                Ajay Dhangar
              </p>
              <p className="text-sm text-muted-foreground">
                MERN Stack Engineer • Open Source Contributor
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-muted/40 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg"
              >
                <link.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

                {/* Tooltip */}
                <span className="absolute -top-10 scale-0 rounded-md bg-foreground px-2 py-1 text-xs text-background transition-all duration-200 group-hover:scale-100">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border/40" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ajay Dhangar. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Built with
            <Heart className="h-3 w-3 text-red-500" />
            &nbsp;using
            <Code2 className="h-3 w-3 text-primary" />
            React + Docusaurus
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;