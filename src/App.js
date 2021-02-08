import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
