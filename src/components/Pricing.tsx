import { useState } from "react";

type Props = {};
const FORMSPARK_ACTION_URL = "https://submit-form.com/qolDwRtx";

function Pricing({}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("notyet");
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    setStatus("done");
    setEmail("");
    alert("Form submitted");
  };
  return (
    <section className="pricing">
      <div className="container">
        <h2>Pricing Plan</h2>
        <p>
          Get free pricing but you will get charge for every transactions, to do
          that you just need to Join now
        </p>
        <form onSubmit={onSubmit} className="formJoinNow">
          <span>Join Now!</span>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              {status === "loading" ? (
                <img src="/loading.gif" />
              ) : status === "done" ? (
                <img src="/mark.svg" className="done" alt="" />
              ) : (
                "Join Now"
              )}
            </button>
          </div>
        </form>
        <ul className="pricingPlanLists">
          <li>
            <span>Free</span>
            <h3 className="pricePerMonth">$0/mo</h3>
            <ul className="pricingFeatures">
              <li>
                <img src="/mark.svg" alt="" />
                <span>Fast Processing</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Secure Transactions</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Support all banks in the world</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Customizable API</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Support all cryptocurrencies payment</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Create your own charge in user transaction</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>AI Feature</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>No fee for transaction</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Create your own payment design</span>
              </li>
            </ul>
            <button className="btn fill">Join Now</button>
          </li>
          <li>
            <span>Premium plan</span>
            <h3 className="pricePerMonth">$30/mo</h3>
            <ul className="pricingFeatures">
              <li>
                <img src="/mark.svg" alt="" />
                <span>Fast Processing</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Secure Transactions</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Support all banks in the world</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Customizable API</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Support all cryptocurrencies payment</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Create your own charge in user transaction</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>AI Feature</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>No fee for transaction</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Create your own payment design</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>
                  When user pay you can transfer the money to different account
                </span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>24/7 Customer support</span>
              </li>
            </ul>
            <button className="btn fill">Join Now</button>
          </li>
          <li>
            <span>Pro Plan</span>
            <h3 className="pricePerMonth">$0/mo</h3>
            <ul className="pricingFeatures">
              <li>
                <img src="/mark.svg" alt="" />
                <span>Fast Processing</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Secure Transactions</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Support all banks in the world</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Customizable API</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Support all cryptocurrencies payment</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Create your own charge in user transaction</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>AI Feature</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>No fee for transaction</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Create your own payment design</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>
                  When user pay you can transfer the money to different account
                </span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>24/7 Customer support</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>
                  You can setup an automation so every the money $1000 you will
                  withdraw to your bank account or else
                </span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Custom features</span>
              </li>
              <li>
                <img src="/mark.svg" alt="" />
                <span>Highly performance</span>
              </li>
            </ul>
            <button className="btn fill">Join Now</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Pricing;
