import "./App.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  const openHour = 11;
  const closeHour = 21;

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer openHour={openHour} closeHour={closeHour} />
    </div>
  );
}

export default App;
