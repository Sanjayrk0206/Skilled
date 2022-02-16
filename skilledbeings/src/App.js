import Achievement from "./components/Achievements";
import Blog from "./components/blog";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Pathfinder from "./components/pathfinder";
import Why from "./components/why";

function App() {
  return (
    <div>
      <Navigation />
      <Why />
      <Pathfinder />
      <Achievement />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
