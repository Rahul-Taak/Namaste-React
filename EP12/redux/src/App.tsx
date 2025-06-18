import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/components/Home';
import RestaurantDetail from "./components/RestaurantDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
