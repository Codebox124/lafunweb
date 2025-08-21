'use client';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, MessageCircle, Star, Clock, Award, Users, ChefHat, Truck, Heart, Phone, Bell, CheckCircle } from 'lucide-react';
import './App.css';
import NavBar from './components/NavBar';
import WaitList from './components/WaitList';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Menu from './components/home/Menu';
import Testimonials from './components/home/Testimonials';
import Contact from './components/home/Contact';
import Footer from './components/Footer';
import FixedOrderButton from './components/FixedOrderButton';
import PickADrinkModal from './components/PickADrinkModal';
import Cart from './components/Cart';

const LafunWebsite = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [cart, setCart] = useState([/*{
          id: 1,
          name: "LÀFÙN & ABÙLÁ COMBO",
          price: 8500,
          description:
            "Lafun, Gbegiri and Ewedu. Protein Options: Beef, Titus fish, Goat meat, Ponmon, Snail",
          image: "/abula.JPG",
          currency: "₦",
          quantity:2
        }*/]);
  const [scrollY, setScrollY] = useState(0);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [showDrinkModal, setShowDrinkModal] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [quantites, setQuantites] = useState({})
  const [total, setTotal] = useState(0)
  const [interest, setInterest] = useState(false)
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
          //id: 1,
          name: "LÀFÙN & ABÙLÁ COMBO",
          price: 8500,
          description:
            "Lafun, Gbegiri and Ewedu. Protein Options: Beef, Titus fish, Goat meat, Ponmon, Snail",
          image: "/abula.JPG",
          currency: "₦",
          total:8500
        },
        {
          //id: 2,
          name: "LÀFÙN WITHOUT GBÈGÌRÌ",
          price: 8000,
          description:
            "Lafun with Ewedu and Pepper Stew. Protein Options: Beef, Titus fish, Goat meat, Ponmon, Snail",
          image: "/ewedu.JPG",
          currency: "₦",
          total:8000
        },
        {
          //id: 3,
          name: "Láfún mini abula combo",
          price: 6500,
          description:
            "“Proteins are fixed” small sizes of ponmon and small sizes of beef",
          image: "/ewedu.JPG",
          currency: "₦",
          total:6500
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

  /*const updateQuantity = (itemId, change) => {
    setCart(prev => {
      const newCart = { ...prev };
      const currentQty = newCart[itemId] || 0;
      const newQty = Math.max(0, currentQty + change);

      if (newQty === 0) {
        delete newCart[itemId];
      } else {
        newCart[itemId] = newQty;
      }
      console.log(newCart)
      return newCart;
      
    });
    
  };*/

  function addToCart(item){
    let newQuantities = quantites
    const itemName = item.name
    setCart([...cart, {...item, quantity:1}])
    newQuantities[itemName] = 1
    setQuantites(newQuantities)
    computeTotal("add",item.price)
  }

  function addQuantity(passedItem){
    let isIn = false
    cart.forEach(item=>{
      if(item.name===passedItem.name){
        isIn = true
      }
    })
    if(isIn){
      let newQuantities = quantites
    let newQuant
    const newCart = cart.map(item=>{
      if(item.name===passedItem.name){
        const itemQuant = item.quantity
        newQuant = itemQuant+1
        return {...item, quantity: newQuant, total:(itemQuant * (item.price))}
      }else{
        return item
      }
    })

    newQuantities[passedItem.name] = newQuant
    setCart(newCart)
    setQuantites(newQuantities)
    computeTotal("add", passedItem.price)
    }
  }

  function subQuantity(passedItem){
     let isIn = false
    cart.forEach(item=>{
      if(item.name===passedItem.name){
        isIn = true
      }
    })
    if(isIn){
      let newQuantities = quantites
    let newQuant
    const newCart = cart.map(item=>{
      if(item.name===passedItem.name){
        const itemQuant = item.quantity
        newQuant = itemQuant-1
        return {...item, quantity: newQuant, total:(itemQuant * (item.price))}
      }else{
        return item
      }
    })

    newQuantities[passedItem.name] = newQuant
    setCart(newCart)
    setQuantites(newQuantities)
    computeTotal("sub", passedItem.price)
    }
  }

  function removeItem(passedItem){
    quantites[passedItem.name] = null
    const newCart = cart.filter(item=>item.name!=passedItem.name)
    setCart(newCart)
    computeTotal("sub", passedItem.price)
  }


  function computeTotal(type, price){
    console.log(price)
    if(type==="add"){
      setTotal(total + price)
    }else{
      setTotal(total - price)
    }
  }

  /*function updateQuantity(passedItem, change){
    const itemName = passedItem.name
    let isIn = false
    let newCart
    cart.forEach(item=>{
      if(item.name===itemName){
        isIn=true
      }
    })

    if(isIn && change===1){

      newCart = cart.map(item=>{
        if(item.name===itemName){
          setQuantites({...quantites, itemName:(item.quantity)+1})
          return {...item, quantity:(item.quantity)+1}
        }else{
          return item
        }
      })
      
       setCart(newCart)

    }else if(!isIn && change===1){
      setQuantites({...quantites, itemName:1})
      setCart([...cart, {...passedItem, quantity:1}])

    }else if(isIn && change===-1){

      newCart = cart.map(item=>{
        if(item.name===itemName){
          setQuantites({...quantites, itemName:(item.quantity)-1})
          return {...item, quantity:(item.quantity)-1}
        }else{
          return item
        }
      })
       setCart(newCart)

    }else{
      newCart = cart.filter(item=>item.name!=itemName)
      setCart(newCart)
    }
  }*/

  /*const getCartTotal = () => {
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

    return { total, itemCount };
  };*/

  const generateWhatsAppMessage = () => {
    let message = "🍲 *New Order from LÀFÙN Website!*\n\n";
    let total = 0;

    Object.entries(cart).forEach(([itemId, quantity]) => {
      const item = menus.flat().find(menu =>
        menu.items?.find(item => item.id === parseInt(itemId))
      )?.items?.find(item => item.id === parseInt(itemId));

      if (item && item.price) {
        const subtotal = item.price * quantity;
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
    const phoneNumber = "2349055797913";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (!waitlistEmail) return;

    setWaitlistSubmitted(true);
    setTimeout(() => {
      setShowWaitlist(false);
      setWaitlistSubmitted(false);
      setWaitlistEmail('');
    }, 3000);
  };

  //const { total, itemCount } = getCartTotal();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NavBar cart={cart} setShowCart={setShowCart} showCart={showCart} scrollY={scrollY} setShowWaitlist={setShowWaitlist} /*itemCount={itemCount}*/ total={total} />
      {showCart && <Cart addQuantity={addQuantity} subQuantity={subQuantity} removeItem={removeItem} cart={cart} setCart={setCart} />}
      {/* Waitlist Modal */}
      {showWaitlist && (
        <WaitList waitlistSubmitted={waitlistSubmitted} waitlistEmail={waitlistEmail} setShowWaitlist={setShowWaitlist} setWaitlistEmail={setWaitlistEmail} handleWaitlistSubmit={handleWaitlistSubmit} />
      )}

      {/*Drink Modal */}
      {
        showDrinkModal && <PickADrinkModal interest={interest} setInterest={setInterest} quantities={quantites} cart={cart} addToCart={addToCart} addQuantity={addQuantity} subQuantity={subQuantity} removeItem={removeItem}  setShowDrinkModal={setShowDrinkModal} />
      }
      {/* Hero Section */}
     <Hero setShowWaitlist={setShowWaitlist} />
      {/* About Section */}
     <About />

      {/* Menu Section */}
      <Menu addToCart={addToCart} quantities={quantites} menus={menus} setActiveTab={setActiveTab} activeTab={activeTab} addQuantity={addQuantity} subQuantity={subQuantity} removeItem={removeItem} cart={cart} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />

      {/* Fixed Order Button */}
      {/*itemCount > 0 && (
        <FixedOrderButton showDrinkModal={showDrinkModal} setShowDrinkModal={setShowDrinkModal} handlePlaceOrder={handlePlaceOrder} total={total} />
      )*/}
      {
        cart.length>0 && <FixedOrderButton showDrinkModal={showDrinkModal} setShowDrinkModal={setShowDrinkModal} handlePlaceOrder={handlePlaceOrder} total={total} />
      }
    </div>
  );
};

export default LafunWebsite;
