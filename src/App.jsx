import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import AboutMe from "./pages/aboutMe/AboutMe";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="app">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
