import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
