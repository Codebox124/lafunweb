import React from "react";
import { Heart, Send, MapPin } from "lucide-react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: BsInstagram,
      href: "https://www.instagram.com/lafunofficial",
      name: "Instagram",
    },
    { icon: BsWhatsapp, href: "https://wa.me/2349169360999", name: "WhatsApp" },
  ];

  return (
    <footer className="relative bg-[#1C1917] py-16 lg:py-20 border-t border-white/10 overflow-hidden text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center space-y-4">
            <a
              href="#"
              className="inline-block transition-transform hover:scale-105"
            >
              <img src="/logo.png" alt="LÁFÚN" className="w-24 h-auto" />
              <h1 className="font-display text-4xl font-black text-white tracking-tighter">
                LÁFÚN
              </h1>
            </a>

            <p className="text-lg font-medium text-white/80">
              Proudly Ìbílè. Purely{" "}
              <span className="text-[#CF0106]">LÁFÚN.</span>
            </p>
          </div>

          <div className="w-full max-w-lg">
            <div className="flex justify-center gap-8 border-b border-t border-white/20 py-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-[#CF0106] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                    className="text-white/50 hover:text-[#CF0106] transition-colors duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-center space-y-3 pt-4 border-t border-white/10 w-full max-w-lg">
            <p className="text-white/50 text-sm font-medium">
              &copy; {currentYear} LÁFÚN. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-1 text-xs text-white/40">
              <MapPin className="w-3 h-3" />
              <span>Authentic Nigerian Cuisine • Made with </span>
              <Heart className="w-3 h-3 text-[#CF0106] fill-[#CF0106] animate-pulse" />
              <span> in Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
