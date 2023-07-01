import Header from "../components/Header";
import Footer from "../components/Footer";
import JoinWaitlistComponent from "../components/JoinWaitlistComponent";

type Props = {};

function JoinWaitlist({}: Props) {
  return (
    <>
      <Header />
      <JoinWaitlistComponent />
      <Footer />
    </>
  );
}

export default JoinWaitlist;
