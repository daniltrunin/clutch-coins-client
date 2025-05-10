import { Routes, Route, BrowserRouter } from "react-router";

import "./App.css";

import Layout from "./Layout";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
