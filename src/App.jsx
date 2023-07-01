import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import { Route, Routes } from "react-router-dom";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
