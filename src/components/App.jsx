// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./Card";

function App() {
  return (
    <>
      <ProductCard 
      title="zestaw 1" 
      price="50zł"
      hasDiscount = {true} />

      <ProductCard 
      title="zestaw 2"
      price="100zł" 
      hasDiscount ={true} />

      <ProductCard 
      title="zestaw 3" 
      price="150zł"
      hasDiscount= {false} />
      
      <ProductCard 
      title="zestaw 4" 
      price="250zł"
      hasDiscount= {false}  />
    </>
  );
}

export default App;
