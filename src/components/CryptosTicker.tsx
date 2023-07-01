import Marquee from "react-fast-marquee";

type Props = {};

function CryptosTicker({}: Props) {
  return (
    <section className="cryptosTicker">
      <div className="container">
        <span>We Support all Crypto payment wallets</span>
      </div>
      <Marquee direction="left" speed={70}>
        <div className="image_wrapper crypto">
          <img src="/crypto-logos/1.jpg" alt="" />
        </div>
        <div className="image_wrapper crypto">
          <img src="/crypto-logos/2.jpg" alt="" />
        </div>
        <div className="image_wrapper crypto">
          <img src="/crypto-logos/3.jpg" alt="" />
        </div>
        <div className="image_wrapper crypto">
          <img src="/crypto-logos/4.jpg" alt="" />
        </div>
        <div className="image_wrapper crypto">
          <img src="/crypto-logos/5.jpg" alt="" />
        </div>
        <div className="image_wrapper crypto">
          <img src="/crypto-logos/6.jpg" alt="" />
        </div>
        <div className="image_wrapper crypto">
          <img src="/crypto-logos/7.jpg" alt="" />
        </div>
        <div className="image_wrapper crypto">
          <img src="/crypto-logos/8.jpg" alt="" />
        </div>
        <div className="image_wrapper crypto">
          <img src="/crypto-logos/9.jpg" alt="" />
        </div>
        <div className="image_wrapper crypto">
          <img src="/crypto-logos/10.jpg" alt="" />
        </div>
      </Marquee>
    </section>
  );
}

export default CryptosTicker;
