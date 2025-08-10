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
          name: "LÀFÙN & GBÈGÌRÌ COMBO",
          price: 85.00,
          description: "Traditional Lafun served with rich Gbegiri soup and your choice of protein: Beef, Titus fish, Goat meat, Ponmon, Snail",
          image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        },
        {
          id: 2,
          name: "LÀFÙN SOLO",
          price: 70.00,
          description: "Pure Lafun served with your choice of protein: Beef, Titus fish, Goat meat, Ponmon, Snail",
          image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        },
        {
          id: 3,
          name: "GBÈGÌRÌ SOUP BOWL",
          price: 60.00,
          description: "Rich, traditional bean soup served with your choice of protein",
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        }
      ]
    },
    {
      name: "Protein Options",
      items: [
        {
          id: 4,
          name: "Beef (Ẹran)",
          price: 30.00,
          description: "Premium tender beef pieces, perfectly seasoned",
          image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        },
        {
          id: 5,
          name: "Titus Fish",
          price: 25.00,
          description: "Fresh Titus fish, grilled to perfection",
          image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        },
        {
          id: 6,
          name: "Goat Meat (Ògúnfẹ)",
          price: 40.00,
          description: "Succulent goat meat with authentic Nigerian spices",
          image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        },
        {
          id: 7,
          name: "Cow Skin (Pònmọ́n)",
          price: 20.00,
          description: "Soft, well-prepared cow skin with traditional seasoning",
          image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        },
        {
          id: 8,
          name: "Snail (Ìgbín)",
          price: 35.00,
          description: "Fresh African snail, a delicacy prepared the traditional way",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        }
      ]
    },
    {
      name: "Extra Soup",
      items: [
        {
          id: 9,
          name: "Extra Gbègìrì",
          price: 15.00,
          description: "Additional portion of our traditional bean soup",
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        },
        {
          id: 10,
          name: "Extra Làfùn",
          price: 20.00,
          description: "Additional portion of our signature Lafun",
          image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        }
      ]
    },
    {
      name: "Beverages",
      items: [
        {
          id: 12,
          name: "Zobo Drink",
          price: 10.00,
          description: "Refreshing hibiscus drink with natural spices",
          image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        },
        {
          id: 13,
          name: "Palm Wine",
          price: 15.00,
          description: "Fresh palm wine, naturally fermented",
          image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop&crop=center",
          currency: "₦"
        },
        {
          id: 14,
          name: "Soft Drinks",
          price: 5.00,
          description: "Cold soft drinks - Coke, Sprite, Fanta",
          image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop&crop=center",
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

      if (item) {
        total += item.price * quantity;
        itemCount += quantity;
      }
    });

    return { total: total * 100, itemCount }; // Convert to actual Naira
  };

  const generateWhatsAppMessage = () => {
    let message = "🍲 *New Order from LÀFÙN Website!*\n\n";
    let total = 0;

    Object.entries(cart).forEach(([itemId, quantity]) => {
      const item = menus.flat().find(menu =>
        menu.items?.find(item => item.id === parseInt(itemId))
      )?.items?.find(item => item.id === parseInt(itemId));

      if (item) {
        const subtotal = item.price * quantity * 100; // Convert to Naira
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
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div >
              <img className='w-full h-[90px]' src='/logo.png' />
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-8 text-gray-300">
                <a href="#about" className="hover:text-red-400 transition-colors">About</a>
                <a href="#menu" className="hover:text-red-400 transition-colors">Menu</a>
                <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  Waitlist
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <ShoppingCart className="w-8 h-8 text-white" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                      {itemCount}
                    </span>
                  )}
                </div>
                <span className="text-xl font-bold text-red-400">₦{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-md w-full border border-red-500/30 shadow-2xl shadow-red-600/20">
            <div className="text-center">
              {!waitlistSubmitted ? (
                <>
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Bell className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Join Our Waitlist</h3>
                  <p className="text-gray-400 mb-8">
                    Be the first to know about new menu items, special offers, and exclusive LÀFÙN experiences!
                  </p>
                  <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-all"
                      required
                    />
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setShowWaitlist(false)}
                        className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-bold transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-full font-bold transition-all"
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">You're In!</h3>
                  <p className="text-gray-400 mb-4">
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
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none">
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
              LÀFÙN
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white drop-shadow-2xl">
            PROUDLY ÌBÍLÈ. PURELY LÀFÚN.
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            "Babes, If your dream is steamy, stretchy, and smells like gbęgìrì...it's not real! wake up!. it's hunger"
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#menu" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-600/50 backdrop-blur-sm">
              Order Now 🍲
            </a>
            <button
              onClick={() => setShowWaitlist(true)}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center gap-3"
            >
              <Bell className="w-6 h-6" />
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Why Choose LÀFÙN?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Authentic Nigerian cuisine delivered with love and tradition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50 transition-all">
                <ChefHat className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Authentic Nigerian</h3>
              <p className="text-gray-400">Traditional recipes passed down through generations</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50 transition-all">
                <Truck className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">We Deliver</h3>
              <p className="text-gray-400">Stay at home, we will come to you. Hot and fresh!</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50 transition-all">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Premium Quality</h3>
              <p className="text-gray-400">Only the finest ingredients for authentic taste</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50 transition-all">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Made with Love</h3>
              <p className="text-gray-400">Every dish prepared with passion and care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-black text-white mb-4">10+</div>
              <div className="text-xl text-red-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-black text-white mb-4">10+</div>
              <div className="text-xl text-red-100">Orders Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-black text-white mb-4">4.9</div>
              <div className="text-xl text-red-100 flex items-center justify-center gap-2">
                Rating <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-black text-white mb-4">24/7</div>
              <div className="text-xl text-red-100">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Our Menu
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Authentic Nigerian dishes that will transport you home with every bite
            </p>
          </div>

          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {menus.map((menu, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${activeTab === index
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-xl shadow-red-600/30 scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-700'
                  }`}
              >
                {menu.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menus[activeTab].items.map((item) => (
              <div
                key={item.id}
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/30 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 hover:scale-105"
              >
                {/* Food Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ₦{(item.price * 100).toLocaleString()}
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 flex items-center justify-center transition-all duration-300 disabled:opacity-50 hover:scale-110"
                        disabled={!cart[item.id]}
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="text-2xl font-bold w-12 text-center text-red-400">
                        {cart[item.id] || 0}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-red-400">₦{(item.price * 100).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black to-red-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready for authentic LÀFÙN? Contact us now and satisfy that craving!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Call Us</h3>
              <p className="text-gray-400">+234 905 579 7913</p>
              <p className="text-gray-400">+234 916 936 0999</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">WhatsApp</h3>
              <p className="text-gray-400">Quick orders & support</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-red-600/50">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">We Deliver</h3>
              <p className="text-gray-400">Osogbo & surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Summary & WhatsApp Button */}
      {itemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-6 shadow-2xl backdrop-blur-xl z-40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white text-lg">
                <span className="font-bold text-2xl">{itemCount}</span> items •
                <span className="font-black text-3xl ml-2">₦{total.toLocaleString()}</span>
              </p>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
              🍲 Order via WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-red-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            LÀFÙN
          </div>
          <p className="text-gray-400 mb-6">PROUDLY ÌBÍLÈ. PURELY LÀFÚN.</p>
          <p className="text-gray-400 mb-4">houseoflafun.co@gmail.com</p>
          <p className="text-gray-500">© 2025 LÀFÙN. All rights reserved. E se! 🙏</p>
        </div>
      </footer>
    </div>
  );
};

export default LafunWebsite;