import React from "react";
import Category from "./components/Category";
import Foods from "./components/Foods";
import HeadLineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Foods />
      <Category/>
    </div>
  );
}

export default App;
