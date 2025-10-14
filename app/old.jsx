const [menus, setMenus] = useState([
    {
      name: "LÁFÚN  Signature",
      items: [
        {
          //id: 1,
          name: "LÁFÚN     ddd & ÀBÙLÀ COMBO",
          price: 8500,
          description:
            "Lafun, Gbegiri and Ewedu.",
          proteinOptions:["Beef", "Titus fish", "Goat meat(ògúnfe)", "Ponmon", "Croaker fish", "Dried peppered catfish"],
          selectedProtein:"",
            image: "/abula.JPG",
          currency: "₦",
          total:8500
        },
        {
          //id: 2,
          name: "LÁFÚN  WITHOUT GBÈGÌRÌ",
          price: 8000,
          description:
            "Lafun with Ewedu and Pepper Stew.",
          proteinOptions:["Beef", "Titus fish", "Goat meat(ògúnfe)", "Ponmon", "Croaker fish", "Dried peppered catfish"],
          selectedProtein:"",
          image: "/ewedu.JPG",
          currency: "₦",
          total:8000
        },
        {
          //id: 3,
          name: "LÁFÚN MINI ABÙLÁ COMBO",
          price: 6500,
          description:
            "Proteins are fixed-small sizes of ponmon and small sizes of beef",
          image: "/mini.png",
          currency: "₦",
          total:6500
        }
      ]
    },
    {
      name: "Extra Protein",
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
          image: "/titus.jpg",
          currency: "₦"
        },
        {
          id: 5,
          name: "Goat Meat (Ògúnfẹ)",
          price: 4000,
          description: "Succulent goat meat with authentic Nigerian spices",
          image: "/goatmeat.jpg",
          currency: "₦"
        },
        {
          id: 6,
          name: "Ponmon",
          price: 2000,
          description: "Deliciously cooked cow skin, tender and seasoned",
          image: "/ponmon.jpg",
          currency: "₦"
        },
        {
          id: 7,
          name: "Croaker Fish",
          price: 3500,
          description: "Spicy peppered Croaker fish, juicy and well-seasoned, bursting with flavor.",
          image: "/croakerfish.png",
          currency: "₦"
        },
        {
          id: 8,
          name: "Dried Peppered Catfish",
          price: 3500,
          description: "Flavorful dried catfish, richly spiced and coated in hot pepper.",
          image: "/driedpepperedcatfish.png",
          currency: "₦"
        },
        
      
      ]
    }
  ])