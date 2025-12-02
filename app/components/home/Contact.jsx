import React from "react";
import { Clock, Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

function Contact() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      value: "09066165266",
      link: "tel:09066165266",
      accent: "text-blue-600",
    },
    {
      icon: BsWhatsapp,
      title: "WhatsApp",
      value: "09169360999",
      link: "https://wa.me/2349169360999?text=Hello%20LAFUN%2C%20I%20want%20to%20place%20an%20order",
      accent: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "houseoflafun.co@gmail.com",
      link: "mailto:houseoflafun.co@gmail.com",
      accent: "text-red-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "24/7 Available",
      link: "#",
      accent: "text-yellow-600",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-[#F5F3EF] text-[#1C1917] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 mb-16 lg:mb-24 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#CF0106] mb-6">
          <MessageCircle className="w-4 h-4" />
          Contact Us
        </div>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-4">
          Get in <span className="text-[#CF0106]">Touch.</span>
        </h2>
        <p className="text-xl text-[#1C1917]/70 max-w-3xl mx-auto leading-relaxed">
          Have questions or want to place a custom order? We're here to help!
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl">
        <div className="lg:pr-12">
          <h3 className="font-display text-3xl font-black mb-10">
            Let's Talk Business
          </h3>

          <div className="space-y-0 border-t border-b border-[#1C1917]/10">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              const isLink = detail.link !== "#";
              const Wrapper = isLink ? "a" : "div";

              return (
                <Wrapper
                  key={index}
                  href={isLink ? detail.link : undefined}
                  target={
                    isLink
                      ? detail.link.startsWith("http")
                        ? "_blank"
                        : "_self"
                      : undefined
                  }
                  rel={isLink ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-between py-6 group ${
                    isLink
                      ? "hover:bg-white transition-colors duration-300 cursor-pointer"
                      : ""
                  } border-b border-[#1C1917]/10`}
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-12 h-12 rounded-full border border-[#CF0106] flex items-center justify-center text-[#CF0106] group-hover:bg-[#CF0106] group-hover:text-white transition-colors duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-sm text-[#1C1917]/50 font-medium mb-1">
                        {detail.title}
                      </p>
                      <p className="text-[#1C1917] font-bold text-lg group-hover:text-[#CF0106] transition-colors">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                  {isLink && (
                    <span className="text-sm text-[#CF0106] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      {detail.title === "WhatsApp" ? "Chat Now" : "Go"}
                    </span>
                  )}
                </Wrapper>
              );
            })}
          </div>

          <a
            href="https://www.instagram.com/lafunofficial?igsh=MWJjZ2t1NnJhNmhiOA=="
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-4 group hover:text-[#CF0106] transition-colors"
          >
            <BsInstagram className="w-6 h-6 text-[#1C1917]/50 group-hover:text-[#CF0106]" />
            <span className="font-bold text-[#1C1917] group-hover:text-[#CF0106] transition-colors">
              Follow us on Instagram: @lafunofficial
            </span>
          </a>
        </div>

        <div>
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-[#1C1917]/10 border border-[#1C1917]/10">
            <div className="mb-10">
              <h3 className="font-display text-3xl font-black mb-3">
                Send a Message
              </h3>
              <p className="text-[#1C1917]/70 text-lg">
                Fill out the form and we'll get back to you
              </p>
            </div>

            <form
              action="https://formsubmit.co/houseoflafun.co@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#1C1917] text-sm font-bold mb-3"
                >
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  id="name"
                  className="w-full px-6 py-4 bg-[#F5F3EF] border border-[#1C1917]/20 rounded-xl text-[#1C1917] placeholder:text-[#1C1917]/40 focus:border-[#CF0106] focus:bg-white focus:outline-none transition-all hover:border-[#1C1917]/40"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#1C1917] text-sm font-bold mb-3"
                >
                  Email Address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  id="email"
                  className="w-full px-6 py-4 bg-[#F5F3EF] border border-[#1C1917]/20 rounded-xl text-[#1C1917] placeholder:text-[#1C1917]/40 focus:border-[#CF0106] focus:bg-white focus:outline-none transition-all hover:border-[#1C1917]/40"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#1C1917] text-sm font-bold mb-3"
                >
                  Your Message
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows="5"
                  className="w-full px-6 py-4 bg-[#F5F3EF] border border-[#1C1917]/20 rounded-xl text-[#1C1917] placeholder:text-[#1C1917]/40 focus:border-[#CF0106] focus:bg-white focus:outline-none transition-all resize-none hover:border-[#1C1917]/40"
                  placeholder="Tell us what you need..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="relative w-full bg-[#CF0106] text-white py-5 rounded-xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:bg-red-700 hover:shadow-xl hover:shadow-[#CF0106]/40"
              >
                Send Message
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
