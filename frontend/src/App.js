import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero section/Hero";
import Register from "./Components/Header/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginuser from "./Components/Header/Loginuser";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Header/>} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/" element={<Loginuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
