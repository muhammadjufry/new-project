import Header from "../components/Header";
import Banner from "../components/Banner";
import BanksTicker from "../components/BanksTicker";
import Offers from "../components/Offers";
import Features from "../components/Features";
import CryptoPayment from "../components/CryptoPayment";
import CryptosTicker from "../components/CryptosTicker";
import Footer from "../components/Footer";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <Header />
      <Banner />
      <BanksTicker />
      <Offers />
      <Features />
      <CryptoPayment />
      <CryptosTicker />
      <Footer />
    </>
  );
}

export default Home;
