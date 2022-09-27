import "./app.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import AboutMe from "./pages/aboutMe/AboutMe";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Welcome />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
