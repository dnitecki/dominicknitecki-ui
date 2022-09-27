import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import AboutMe from "./pages/aboutMe/AboutMe";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
