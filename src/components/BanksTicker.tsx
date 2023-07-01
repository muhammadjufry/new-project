import Marquee from "react-fast-marquee";

type Props = {};

function BanksTicker({}: Props) {
  return (
    <section className="banksTicker">
      <div className="container">
        <span>We integrate to all Banks in the world</span>
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
      </Marquee>
    </section>
  );
}

export default BanksTicker;
