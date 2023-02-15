import React from "react";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Information from "./components/imformation/Information";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Topseller from "./components/topseller/Topseller";


function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Topseller/>
      <Information/>
      <Signup />
      <Footer/>
      
     
    </div>
  );
}

export default App;
