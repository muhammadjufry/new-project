type Props = {};

function Offers({}: Props) {
  return (
    <section className="offers">
      <div className="container">
        <h2>Easy, Quick & Safe</h2>
        <div className="offerLists">
          <div className="offerItem">
            <img src="/offer-logos/secure.png" alt="" />
            <div className="offerItemInfo">
              <h3 className="offerItemTittle">Secure Payment Method</h3>
              <p className="offerItemDescription">
                Send, accept, and move funds through Jamali Pay with diverse
                banking options securely
              </p>
            </div>
          </div>
          <div className="offerItem">
            <img src="/offer-logos/easyCreateAccount.png" alt="" />
            <div className="offerItemInfo">
              <h3 className="offerItemTittle">Easy To Create Your Account</h3>
              <p className="offerItemDescription">
                You can verify your account by using your identity card or your
                business details if you are a company or contacting to us
              </p>
            </div>
          </div>
          <div className="offerItem">
            <img src="/offer-logos/supportAllBanks.png" alt="" />
            <div className="offerItemInfo">
              <h3 className="offerItemTittle">
                Supporting All Banks In The World
              </h3>
              <p className="offerItemDescription">
                Incorporate payment options in your application to enable
                transactions using various banks promptly
              </p>
            </div>
          </div>
          <div className="offerItem">
            <img src="/offer-logos/noForbidOrShutdown.png" alt="" />
            <div className="offerItemInfo">
              <h3 className="offerItemTittle">No Forbid/Shut Profile</h3>
              <p className="offerItemDescription">
                We won't shut down or prohibit your account unless there's an
                error you commit; if that occurs, we'll reach out initially
                prior to closure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
