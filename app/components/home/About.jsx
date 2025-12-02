import React from "react";
import { Award, ChefHat, Heart, Truck, Star } from "lucide-react";

function About() {
  const features = [
    {
      icon: ChefHat,
      title: "Authentic Nigerian",
      description: "Traditional recipes passed down through generations.",
    },
    {
      icon: Truck,
      title: "We Deliver",
      description: "Stay at home, we come to you. Hot and fresh.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients for authentic taste.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish crafted with passion and care.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#F5F3EF] text-[#1C1917] overflow-hidden"
    >
      <div className="border-y border-[#1C1917]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#1C1917]/10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 lg:p-12 transition-colors duration-500 hover:bg-white"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#CF0106] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="flex flex-col h-full justify-between gap-8">
                  <div className="w-12 h-12 rounded-full border border-[#1C1917]/10 flex items-center justify-center text-[#1C1917] group-hover:bg-[#CF0106] group-hover:text-white group-hover:border-[#CF0106] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl mb-3 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[#1C1917]/60 text-sm font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#CF0106]">
              Our Story
            </div>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none">
              Why Choose <br />
              <span className="text-[#CF0106]">LÁFÚN?</span>
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-[#1C1917]/70 leading-relaxed font-medium">
              <p>
                We're not just serving food, we're preserving culture and
                delivering authentic experiences.
              </p>
              <p>
                LÁFÚN brings you the true taste of tradition, crafted from the
                most authentic roots. Loved for its nostalgic flavor and
                unforgettable experience.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-8">
              <div className="inline-flex items-center gap-4 px-6 py-3 border border-[#1C1917] rounded-full">
                <span className="font-display font-bold text-lg uppercase tracking-tight">
                  Proudly ÍbÍlè
                </span>
                <span className="w-px h-4 bg-[#1C1917]"></span>
                <span className="font-display font-bold text-lg uppercase tracking-tight text-[#CF0106]">
                  Purely LÁFÚN
                </span>
              </div>

              {/* Relocated Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center text-[#CF0106]">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="font-display font-bold text-xl">
                  5.0 Rating
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative mt-12 lg:mt-0">
            <div className="absolute top-4 -right-4 w-full h-full border-2 border-[#1C1917] rounded-2xl z-0 hidden sm:block"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] bg-[#E5E5E5]">
              <img
                src="/about.jpg"
                alt="Chef preparing food"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
