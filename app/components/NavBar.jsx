import { Bell, ShoppingCart } from "lucide-react";
import React, { useState, useEffect } from "react";

function NavBar({
  setShowWaitlist,
  itemCount,
  total,
  scrollY,
  setShowCart,
  showCart,
  cart,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        scrollY > 50 ? "py-0 bg-black shadow-2xl" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-modern">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              className="md:w-[150px] w-[100px] relative z-10 transition-all duration-500 hover:scale-110 drop-shadow-2xl"
              src="/logo.png"
              alt="LÁFÚN Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-8 mr-8">
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-red-500 transition-colors duration-300 text-lg font-semibold"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-white hover:text-red-500 transition-colors duration-300 text-lg font-semibold"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-red-500 transition-colors duration-300 text-lg font-semibold"
                >
                  Contact
                </a>
              </li>
              <li>
                {/* <button
                  onClick={() => setShowWaitlist(true)}
                  className="group relative px-5 py-2.5 bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/20 hover:border-red-500/50 text-white rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-bold backdrop-blur-xl hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Bell className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10">Waitlist</span>
                </button> */}
              </li>
            </ul>
          </div>

          {/* Right side: Cart + Total + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative cursor-pointer group bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 p-3 rounded-2xl transition-all duration-300 backdrop-blur-xl border border-white/20 hover:border-red-500/50 hover:scale-110 shadow-lg hover:shadow-red-500/20"
            >
              <ShoppingCart className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 text-white text-xs font-black rounded-full min-w-[1.5rem] h-6 px-2 flex items-center justify-center shadow-xl shadow-red-500/50 border-2 border-white/20 animate-pulse">
                  {cart.length}
                </span>
              )}
            </button>

            <div className="text-white font-bold text-lg">
              ₦{total.toLocaleString()}
            </div>

            {/* Hamburger Menu */}
            <div
              className={`md:hidden navTrigger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden main_list ${menuOpen ? "show_list" : ""}`}>
          <ul className="navlinks">
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                <span className="menu-item-inner">About</span>
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => setMenuOpen(false)}>
                <span className="menu-item-inner">Menu</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                <span className="menu-item-inner">Contact</span>
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowWaitlist(true);
                  setMenuOpen(false);
                }}
                className="waitlist-btn"
              >
                <Bell className="w-5 h-5" />
                <span>Join Waitlist</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Hamburger Menu Styles */
        .navTrigger {
          cursor: pointer;
          width: 30px;
          height: 25px;
          position: relative;
        }

        .navTrigger i {
          background-color: #fff;
          border-radius: 2px;
          content: "";
          display: block;
          width: 100%;
          height: 4px;
          transition: all 0.3s ease;
        }

        .navTrigger i:nth-child(1) {
          animation: outT 0.8s backwards;
          animation-direction: reverse;
        }

        .navTrigger i:nth-child(2) {
          margin: 5px 0;
          animation: outM 0.8s backwards;
          animation-direction: reverse;
        }

        .navTrigger i:nth-child(3) {
          animation: outBtm 0.8s backwards;
          animation-direction: reverse;
        }

        .navTrigger.active i:nth-child(1) {
          animation: inT 0.8s forwards;
        }

        .navTrigger.active i:nth-child(2) {
          animation: inM 0.8s forwards;
        }

        .navTrigger.active i:nth-child(3) {
          animation: inBtm 0.8s forwards;
        }

        /* Mobile Menu - Ultra Modern */
        .main_list {
          width: 100%;
          height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 20px;
        }

        .main_list.show_list {
          height: auto;
        }

        .main_list ul {
          list-style: none;
          margin: 0 20px;
          padding: 30px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: linear-gradient(
            135deg,
            rgba(31, 41, 55, 0.95) 0%,
            rgba(17, 24, 39, 0.98) 100%
          );
          backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(239, 68, 68, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .main_list ul li {
          width: 100%;
          padding: 0 20px;
        }

        .main_list ul li a {
          display: block;
          color: #fff;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          padding: 16px 24px;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }

        .main_list ul li a .menu-item-inner {
          position: relative;
          z-index: 2;
        }

        .main_list ul li a::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(239, 68, 68, 0.1) 0%,
            rgba(249, 115, 22, 0.1) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 16px;
        }

        .main_list ul li a:hover::before {
          opacity: 1;
        }

        .main_list ul li a:hover {
          color: #ef4444;
          transform: translateX(8px);
        }

        .waitlist-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: calc(100% - 40px);
          margin: 10px 20px 0;
          padding: 16px 24px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          border: none;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
        }

        .waitlist-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(239, 68, 68, 0.4);
        }

        .waitlist-btn:active {
          transform: translateY(0);
        }

        /* Animations */
        @keyframes inM {
          50% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }

        @keyframes outM {
          50% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }

        @keyframes inT {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(9px) rotate(0deg);
          }
          100% {
            transform: translateY(9px) rotate(135deg);
          }
        }

        @keyframes outT {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(9px) rotate(0deg);
          }
          100% {
            transform: translateY(9px) rotate(135deg);
          }
        }

        @keyframes inBtm {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(0deg);
          }
          100% {
            transform: translateY(-9px) rotate(135deg);
          }
        }

        @keyframes outBtm {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(0deg);
          }
          100% {
            transform: translateY(-9px) rotate(135deg);
          }
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
