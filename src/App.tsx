import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
