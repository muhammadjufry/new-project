type Props = {};
type PropsFeatureItem = {
  featureName: string;
};

function FeatureItem({ featureName }: PropsFeatureItem) {
  return (
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm49.53125,85.78906-58.67187,56a8.02441,8.02441,0,0,1-11.0625,0l-29.32813-28a8.00675,8.00675,0,0,1,11.0625-11.57812l23.79687,22.72656,53.14063-50.72656a8.00675,8.00675,0,0,1,11.0625,11.57812Z"></path>
      </svg>
      <p>{featureName}</p>
    </li>
  );
}

function Features({}: Props) {
  return (
    <section className="features">
      <div className="container">
        <div className="content1">
          <h2>Jamali Pay Features</h2>
          <p>
            Discover the top advantages of Jamali Pay when incorporating Jamali
            Payment into your website
          </p>
          <button className="btn fill">Join Now</button>
        </div>
        <div className="content2">
          <ul className="feature-lists">
            <FeatureItem featureName="All banks support" />
            <FeatureItem featureName="Pay and transfer to different account" />
            <FeatureItem featureName="24/7 Customer Support" />
            <FeatureItem featureName="Automatically integrate payment to your website using AI" />
            <FeatureItem featureName="No Fees" />
            <FeatureItem featureName="Register using your Identiy card or giving busniess detail or by contacting us" />
            <FeatureItem featureName="We will provide best customer support 24/7" />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
