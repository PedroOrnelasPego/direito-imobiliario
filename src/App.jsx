import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Products from "./components/Products";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="location">
        <Location />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}

export default App;
