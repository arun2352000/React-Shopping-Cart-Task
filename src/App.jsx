import React, { useState } from 'react';
import Carddata from './components/Carddata';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const App = () => {
  const carddata = [
    {
      id: "01",
      head: "Fancy Product",
      priceok: "$40.oo - 80.00",
      
    },
    {
      id: "02",
      head: "Special Item",
      price: "$20.00",
      priceok: "$80.00",
     
    },
    {
      id: "03",
      head: "Sale item",
      price: "$50.00",
      priceok: "$25.00",
      
    },
    {
      id: "04",
      head: "Popular Item",
      priceok: "$40.00",
      
    },
    {
      id: "05",
      head: "Sale item",
      priceok: "$25.00",
      
    },
    {
      id: "06",
      head: "Fancy Product",
      priceok: "$40.oo - 80.00",
      
    },
    {
      id: "07",
      head: "Special Item",
      price: "$20.00",
      priceok: "$80.00",
      
    },
    {
      id: "08",
      head: "Popular Item",
      priceok: "$40.00",
      
    },
  ];
 let [cart, setCart] = useState(0);
  return (
    <div>
      <Navbar cart={cart} setCart={setCart} />
      <Header />
      <Carddata cart={cart} setCart={setCart} carddata={carddata} />
      <Footer />
    </div>
  );
};

export default App;