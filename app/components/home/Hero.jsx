import { Bell } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Hero({ setShowWaitlist }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Nigerian food"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-500 rounded-full animate-float animation-delay-4000"></div>
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-white font-bold mb-6"
          style={{
            fontSize: "clamp(4rem, 12vw, 8rem)",
            letterSpacing: "0.02em",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          LÁFÚN
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-white uppercase tracking-widest mb-8 font-semibold"
          style={{
            fontSize: "clamp(0.875rem, 2vw, 1.25rem)",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          PROUDLY ÌBÌLẸ. PURELY LÁFÚN.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-white mb-12 max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.375rem)",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            lineHeight: "1.6",
          }}
        >
          Babes, If your dream is steamy, stretchy, and smells like gbegiri…{" "}
          <span className="font-semibold">
            it's not real! wake up! it's hunger
          </span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
            style={{
              boxShadow: "0 10px 30px rgba(220, 38, 38, 0.4)",
            }}
          >
            Order Now 🍲
          </a>

          {/* <button
            onClick={() => setShowWaitlist(true)}
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:border-red-500 hover:bg-white/10 text-white font-bold rounded-full px-10 py-4 text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <Bell className="w-5 h-5" />
            Join Waitlist
          </button> */}
        </motion.div>
      </motion.div>
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .bg-size-200 {
          background-size: 200%;
        }
        .hover\\:bg-right-bottom:hover {
          background-position: right bottom;
        }
      `}</style>
    </section>
  );
}

export default Hero;
