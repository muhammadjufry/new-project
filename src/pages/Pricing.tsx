import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingPlan from "../components/Pricing";
import BanksAndCryptosTicker from "../components/BanksAndCryptosTicker";
type Props = {};

function Pricing({}: Props) {
  return (
    <>
      <Header />
      <PricingPlan />
      <BanksAndCryptosTicker />
      <Footer />
    </>
  );
}

export default Pricing;
