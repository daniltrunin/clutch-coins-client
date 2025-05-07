import { Routes, Route, BrowserRouter } from "react-router";

import "./App.css";

import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
