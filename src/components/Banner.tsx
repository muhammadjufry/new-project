import { Link } from "react-router-dom";

type Props = {};

function Banner({}: Props) {
  return (
    <section className="banner">
      <div className="container">
        <div className="content1">
          <h1>Best Payment Gateway Solutions</h1>
          <p>
            Jamali Pay provides solutions to a company/personal use to integrate
            their website using a payment gateway
          </p>
          <button className="btn fill">
            <Link to="/join-waitlist">Join now</Link>
          </button>
        </div>
        <div className="content2">
          <img src="/transaction-demo-jamaliPay.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
