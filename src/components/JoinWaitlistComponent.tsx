import { useState } from "react";
import BanksAndCryptosTicker from "./BanksAndCryptosTicker";

const FORMSPARK_ACTION_URL = "https://submit-form.com/qolDwRtx";

type Props = {};
function JoinWaitlistComponent({}: Props) {
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
    <section className="joinWaitlist">
      <div className="container">
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
        <BanksAndCryptosTicker />
      </div>
    </section>
  );
}

export default JoinWaitlistComponent;
