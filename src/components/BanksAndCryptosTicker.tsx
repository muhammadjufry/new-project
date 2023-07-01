import Marquee from "react-fast-marquee";

type Props = {};

function BanksAndCryptosTicker({}: Props) {
  return (
    <section className="banksTicker">
      <div className="container">
        <span>
          We integrate and support to all Banks & Cryptocurrencies in the world
        </span>
      </div>
      <Marquee direction="left" speed={70}>
        <div className="image_wrapper">
          <img src="/bank-logos/1.png" alt="" />
        </div>
        <div className="image_wrapper">
          <img src="/bank-logos/2.png" alt="" />
        </div>
        <div className="image_wrapper">
          <img src="/bank-logos/3.png" alt="" />
        </div>
        <div className="image_wrapper">
          <img src="/bank-logos/4.png" alt="" />
        </div>
        <div className="image_wrapper">
          <img src="/bank-logos/5.png" alt="" />
        </div>
        <div className="image_wrapper fill">
          <img src="/bank-logos/6.png" alt="" />
        </div>
        <div className="image_wrapper">
          <img src="/bank-logos/7.png" alt="" />
        </div>
        <div className="image_wrapper">
          <img src="/bank-logos/8.jpg" alt="" />
        </div>
        <div className="image_wrapper">
          <img src="/bank-logos/9.png" alt="" />
        </div>
        <div className="image_wrapper">
          <img src="/bank-logos/10.png" alt="" />
        </div>
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

export default BanksAndCryptosTicker;
