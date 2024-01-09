import { useEffect, useState } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from './components/UI/Contact'

function App() {

  //Manage State of the Header
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {showHeader && <Header />}
      <main>
        <Hero />
        <Services />
        <Portfolio setShowHeader={setShowHeader} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
