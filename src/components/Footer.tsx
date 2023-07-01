import { Link } from "react-router-dom";

type Props = {};

function Footer({}: Props) {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <Link to="/">Jamali Pay</Link>
        </div>
        <h2>Links</h2>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/join-waitlist">Join Waitlist Now</Link>
          </li>
        </ul>
        <span className="copyright">
          © 2023 Jamali Pay. All rights reserved – Best payment gateway
          solutions.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
