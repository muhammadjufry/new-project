import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import "./App.css";
import JoinWaitlist from "./pages/Join-Waitlist";
import Pricing from "./pages/Pricing";

function App() {
  const markupSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.jamalipay.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pricing",
        item: "https://www.jamalipay.com/pricing",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Join Waitlist Now",
        item: "https://www.jamalipay.com/join-waitlist",
      },
    ],
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/join-waitlist" element={<JoinWaitlist />} />
        </Routes>
      </Router>
      <script type="application/ld+json">{JSON.stringify(markupSchema)}</script>
    </>
  );
}

export default App;
