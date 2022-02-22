import Achievement from "./components/Achievements";
import Blog from "./components/blog";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Pathfinder from "./components/pathfinder";
import Why from "./components/why";
import WhatWeDo from "./components/whatWeDo";
import Testimonials from "./components/testimonials";
import Sections from "./components/sections";

import "mdb-react-ui-kit/dist/css/mdb.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <WhatWeDo />
      <Why />
      <Pathfinder />
      <Sections />
      <Achievement />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
