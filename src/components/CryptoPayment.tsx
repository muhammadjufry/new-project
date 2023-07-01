type Props = {};

function CryptoPayment({}: Props) {
  return (
    <section className="cryptoPayment">
      <div className="container">
        <div className="content1">
          <img src="/assistCryptoPayments.svg" alt="" />
        </div>
        <div className="content2">
          <h2>Assisting Crypto Payments Support</h2>
          <p>
            Utilizing Jamali Pay, users can complete transactions via digital
            assets
          </p>
          <button className="btn fill">Join Now</button>
        </div>
      </div>
    </section>
  );
}

export default CryptoPayment;
