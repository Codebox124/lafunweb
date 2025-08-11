
'use client';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, MessageCircle, Star, Clock, Award, Users, ChefHat, Truck, Heart, Phone, Bell, CheckCircle } from 'lucide-react';

const LafunWebsite = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [cart, setCart] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    {
      name: "LÀFÙN Signature",
      items: [
        {
          id: 1,
          name: "LÀFÙN & ABÙLÁ COMBO",
          price: 8500,
          description:
            "Lafun, Gbegiri and Ewedu. Protein Options: Beef, Titus fish, Goat meat, Ponmon, Snail",
          image: "/abula.JPG",
          currency: "₦"
        },
        {
          id: 2,
          name: "LÀFÙN WITHOUT GBÈGÌRÌ",
          price: 8000,
          description:
            "Lafun with Ewedu and Pepper Stew. Protein Options: Beef, Titus fish, Goat meat, Ponmon, Snail",
          image: "/ewedu.JPG",
          currency: "₦"
        }
      ]
    },
    {
      name: "Protein Options",
      items: [
        {
          id: 3,
          name: "Beef (Ẹran)",
          price: 2500,
          description: "Premium tender beef pieces, perfectly seasoned",
          image: "/asorted.JPG",
          currency: "₦"
        },
        {
          id: 4,
          name: "Titus Fish",
          price: 3000,
          description: "Fresh Titus fish, grilled to perfection",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&auto=format",
          currency: "₦"
        },
        {
          id: 5,
          name: "Goat Meat (Ògúnfẹ)",
          price: 4000,
          description: "Succulent goat meat with authentic Nigerian spices",
          image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&auto=format",
          currency: "₦"
        },
        {
          id: 6,
          name: "Ponmon",
          price: 2000,
          description: "Deliciously cooked cow skin, tender and seasoned",
          image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&auto=format",
          currency: "₦"
        },
        {
          id: 7,
          name: "Snail",
          price: 3500,
          description: "Juicy and perfectly spiced African snail",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&auto=format",
          currency: "₦"
        }
      ]
    }
  ];

  const updateQuantity = (itemId, change) => {
    setCart(prev => {
      const newCart = { ...prev };
      const currentQty = newCart[itemId] || 0;
      const newQty = Math.max(0, currentQty + change);

      if (newQty === 0) {
        delete newCart[itemId];
      } else {
        newCart[itemId] = newQty;
      }

      return newCart;
    });
  };

  const getCartTotal = () => {
    let total = 0;
    let itemCount = 0;

    Object.entries(cart).forEach(([itemId, quantity]) => {
      const item = menus.flat().find(menu =>
        menu.items?.find(item => item.id === parseInt(itemId))
      )?.items?.find(item => item.id === parseInt(itemId));

      if (item && item.price) {
        total += item.price * quantity;
        itemCount += quantity;
      }
    });

    return { total, itemCount }; // Remove the * 100 multiplication
  };

  const generateWhatsAppMessage = () => {
    let message = "🍲 *New Order from LÀFÙN Website!*\n\n";
    let total = 0;

    Object.entries(cart).forEach(([itemId, quantity]) => {
      const item = menus.flat().find(menu =>
        menu.items?.find(item => item.id === parseInt(itemId))
      )?.items?.find(item => item.id === parseInt(itemId));

      if (item && item.price) {
        const subtotal = item.price * quantity; // Remove * 100
        message += `🍽️ ${item.name} x${quantity} - ₦${subtotal.toLocaleString()}\n`;
        total += subtotal;
      }
    });

    message += `\n💰 *Total Amount: ₦${total.toLocaleString()}*\n\n`;
    message += "📍 Please confirm my order and delivery location. E se! 🙏";

    return encodeURIComponent(message);
  };

  const handlePlaceOrder = () => {
    if (Object.keys(cart).length === 0) {
      alert("🛒 Babes, add some delicious LÀFÙN to your cart first! 😋");
      return;
    }

    const whatsappMessage = generateWhatsAppMessage();
    const phoneNumber = "2349055797913"; // Your WhatsApp number from the PDF
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (!waitlistEmail) return;

    // Here you would normally send to your backend
    setWaitlistSubmitted(true);
    setTimeout(() => {
      setShowWaitlist(false);
      setWaitlistSubmitted(false);
      setWaitlistEmail('');
    }, 3000);
  };

  const { total, itemCount } = getCartTotal();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-red-600/20' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div>
              <img className='md:w-[150px] w-[90px]' src='/logo.png' alt="LÀFÙN Logo" />
            </div>
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-gray-300">
                <a href="#about" className="hover:text-red-400 transition-colors text-sm xl:text-base">About</a>
                <a href="#menu" className="hover:text-red-400 transition-colors text-sm xl:text-base">Menu</a>
                <a href="#contact" className="hover:text-red-400 transition-colors text-sm xl:text-base">Contact</a>
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="hover:text-red-400 transition-colors flex items-center gap-2 text-sm xl:text-base"
                >
                  <Bell className="w-4 h-4" />
                  Waitlist
                </button>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center animate-pulse">
                      {itemCount}
                    </span>
                  )}
                </div>
                <span className="text-sm sm:text-lg md:text-xl font-bold text-red-400">₦{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 sm:p-8 max-w-md w-full border border-red-500/30 shadow-2xl shadow-red-600/20">
            <div className="text-center">
              {!waitlistSubmitted ? (
                <>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Bell className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Join Our Waitlist</h3>
                  <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                    Be the first to know about new menu items, special offers, and exclusive LÀFÙN experiences!
                  </p>
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4 sm:space-y-6">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-all text-sm sm:text-base"
                      required
                    />
                    <div className="flex gap-3 sm:gap-4">
                      <button
                        type="button"
                        onClick={() => setShowWaitlist(false)}
                        className="flex-1 px-4 py-3 sm:px-6 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-bold transition-all text-sm sm:text-base"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-3 sm:px-6 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-full font-bold transition-all text-sm sm:text-base"
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">You're In!</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">
                    Welcome to the LÀFÙN family! We'll keep you updated on all the delicious happenings.
                  </p>
                  <p className="text-red-400 font-bold">E se! 🙏</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url('/hero.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 leading-none">
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
              LÀFÙN
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold mb-6 sm:mb-8 text-white drop-shadow-2xl">
            PROUDLY ÌBÍLÈ. PURELY LÀFÚN.
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            "Babes, If your dream is steamy, stretchy, and smells like gbęgìrì...it's not real! wake up!. it's hunger"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a href="#menu" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-full text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-600/50 backdrop-blur-sm">
              Order Now 🍲
            </a>
            <button
              onClick={() => setShowWaitlist(true)}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-full text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center gap-3"
            >
              <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Why Choose LÀFÙN?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Authentic Nigerian cuisine delivered with love and tradition
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50 transition-all">
                <ChefHat className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Authentic Nigerian</h3>
              <p className="text-sm sm:text-base text-gray-400">Traditional recipes passed down through generations</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50 transition-all">
                <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">We Deliver</h3>
              <p className="text-sm sm:text-base text-gray-400">Stay at home, we will come to you. Hot and fresh!</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50 transition-all">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Premium Quality</h3>
              <p className="text-sm sm:text-base text-gray-400">Only the finest ingredients for authentic taste</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50 transition-all">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Made with Love</h3>
              <p className="text-sm sm:text-base text-gray-400">Every dish prepared with passion and care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-red-600 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 sm:mb-4">10+</div>
              <div className="text-sm sm:text-base lg:text-xl text-red-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 sm:mb-4">10+</div>
              <div className="text-sm sm:text-base lg:text-xl text-red-100">Orders Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 sm:mb-4">4.9</div>
              <div className="text-sm sm:text-base lg:text-xl text-red-100 flex items-center justify-center gap-2">
                Rating <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 sm:mb-4">24/7</div>
              <div className="text-sm sm:text-base lg:text-xl text-red-100">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Our Menu
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
              Authentic Nigerian dishes that will transport you home with every bite
            </p>
          </div>

          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            {menus.map((menu, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 sm:px-6 sm:py-4 lg:px-8 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 ${activeTab === index
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-xl shadow-red-600/30 scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-700'
                  }`}
              >
                {menu.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {menus[activeTab].items.map((item) => (
              <div
                key={item.id}
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/30 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 hover:scale-105"
              >
                {/* Food Image */}
                <div className="relative overflow-hidden h-40 sm:h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&auto=format";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {item.price && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-600 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-bold">
                      ₦{item.price.toLocaleString()}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">{item.description}</p>
                  </div>

                  {item.price && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 flex items-center justify-center transition-all duration-300 disabled:opacity-50 hover:scale-110"
                          disabled={!cart[item.id]}
                        >
                          <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <span className="text-xl sm:text-2xl font-bold w-8 sm:w-12 text-center text-red-400">
                          {cart[item.id] || 0}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-black text-red-400">₦{item.price.toLocaleString()}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
              Ready for authentic LÀFÙN? Contact us now and satisfy that craving!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Call Us</h3>
              <p className="text-sm sm:text-base text-gray-400">+234 905 579 7913</p>
              <p className="text-sm sm:text-base text-gray-400">+234 916 936 0999</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">WhatsApp</h3>
              <p className="text-sm sm:text-base text-gray-400">Quick orders & support</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50">
                <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">We Deliver</h3>
              <p className="text-sm sm:text-base text-gray-400">Osogbo & surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Summary & WhatsApp Button */}
      {itemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-4 sm:p-6 shadow-2xl backdrop-blur-xl z-40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white text-base sm:text-lg">
                <span className="font-bold text-lg sm:text-2xl">{itemCount}</span> items •
                <span className="font-black text-xl sm:text-3xl ml-2">₦{total.toLocaleString()}</span>
              </p>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="bg-white text-red-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2 sm:gap-3 group"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
              🍲 Order via WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black py-8 sm:py-12 border-t border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            LÀFÙN
          </div>
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">PROUDLY ÌBÍLÈ. PURELY LÀFÚN.</p>
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Houseoflafun.co@gmail.com</p>
          <p className="text-gray-500 text-xs sm:text-sm">© 2025 LÀFÙN. All rights reserved. E se! 🙏</p>
        </div>
      </footer>
    </div>
  );
};

export default LafunWebsite;