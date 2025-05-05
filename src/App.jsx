import { Routes, Route, BrowserRouter } from "react-router";

import "./App.css";

import Home from "./views/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
