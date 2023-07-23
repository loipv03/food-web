import Banner from "./components/Banner/Banner";
import OfferBanner from "./components/OfferBanner/OfferBanner";
import Header from "./components/Header/Header";
import AboutBanner from "./components/AboutBanner/AboutBanner";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <OfferBanner />
      <AboutBanner />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
