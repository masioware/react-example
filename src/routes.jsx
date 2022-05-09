import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

import NavBar from "./components/NavBar";

const Routing = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Project3" element={<Project3 />} />
      </Routes>
    </Router>
  );
};

export default Routing;
