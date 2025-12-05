import React from "react";
import { Star, Quote, ArrowRight, ArrowLeft } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Aisha B.",
      location: "Lagos, NG",
      rating: 5,
      text: "LÁFÚN is simply the best! The taste takes me right back to Nigeria. The Abula combo is a must-try!",
      highlight: "Abula combo",
    },
    {
      name: "Roqeeb R.",
      location: "London, UK",
      rating: 4,
      text: "I've tried many Nigerian restaurants, but LÁFÚN stands out. The goat meat is incredibly tender and flavorful.",
      highlight: "Goat meat",
    },
    {
      name: "Chidinma O.",
      location: "Abuja, NG",
      rating: 5,
      text: "The delivery was fast, and the food was still hot! The LÁFÚN without Gbègìrì is my new favorite.",
      highlight: "Fast delivery",
    },
    {
      name: "David K.",
      location: "Lagos, NG",
      rating: 5,
      text: "Authentic is an understatement. This tastes exactly like my grandmother's cooking in Ibadan.",
      highlight: "Authentic",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#F5F3EF] border-t border-[#1C1917]/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#CF0106]">
              Community Love
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-[#1C1917]">
              The People <br />
              Have <span className="text-[#CF0106]">Spoken.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#CF0106] text-[#CF0106]"
                />
              ))}
            </div>
            <p className="text-[#1C1917] font-medium text-lg">
              <span className="font-bold">5.0</span> Average Rating based on{" "}
              <br className="hidden lg:block" /> 100+ reviews.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-12 px-6 lg:px-12 scrollbar-hide snap-x snap-mandatory">
        <div className="flex gap-6 lg:gap-8 w-max">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="snap-center w-[85vw] md:w-[450px] flex-shrink-0 bg-white border border-[#1C1917]/10 p-8 lg:p-10 flex flex-col justify-between group hover:border-[#CF0106] transition-colors duration-300"
            >
              <div>
                <Quote className="w-10 h-10 text-[#CF0106] mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />

                <p className="font-display text-2xl lg:text-3xl font-bold leading-tight text-[#1C1917] mb-8">
                  "{item.text}"
                </p>

                <div className="inline-block bg-[#F5F3EF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1C1917]/70 rounded-full mb-8">
                  Mentioned: {item.highlight}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#1C1917]/5 pt-6">
                <div>
                  <p className="font-bold text-[#1C1917]">{item.name}</p>
                  <p className="text-sm text-[#1C1917]/50">{item.location}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-[#1C1917] text-[#1C1917]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="snap-center w-[85vw] md:w-[300px] flex-shrink-0 bg-[#1C1917] text-[#F5F3EF] p-8 lg:p-10 flex flex-col justify-center items-center text-center gap-6 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[#333] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold">
              Taste the hype yourself.
            </h3>
            <a
              href="#menu"
              className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
