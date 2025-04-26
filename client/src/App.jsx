import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/AboutPage";
import Achievements from "./pages/Achievements";
import Career from "./pages/CareerPage";
import Gallery from "./pages/Gallery";
import Facilities from "./pages/Facilities";
import Events from "./pages/EventPage";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/career" element={<Career />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
