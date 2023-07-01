import { Link } from "react-router-dom";
import { useState } from "react";

type Props = {};

function Header({}: Props) {
  const [activeOrNot, setActiveOrNot] = useState("");
  const menuToggleClick = () => {
    if (activeOrNot === "active") {
      setActiveOrNot("");
    } else {
      setActiveOrNot("active");
    }
  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">Jamali Pay</Link>
        </div>
        <ul className={`menu-lists ${activeOrNot}`}>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <button className="btn">
              <Link to="/join-waitlist">Join Now</Link>
            </button>
          </li>
        </ul>
        <div
          className={`menuToggle ${activeOrNot}`}
          onClick={() => menuToggleClick()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
