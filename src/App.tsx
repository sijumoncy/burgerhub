import About from "./components/About/About";
import Category from "./components/Category/Category";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Offers from "./components/Offers/Offers";

function App() {

  return (
    <div className="max-w-[1440px] mx-auto">
      <Header/>
      <Hero/>
      <Category/>
      <Offers/>
      <Menu/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
