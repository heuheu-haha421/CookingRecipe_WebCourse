import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Customer/Home/Home";
import OurStory from "./Customer/Our Story/Ourstory";
import Recipes from "./Customer/Recipes/Recipes";
import News from "./Customer/News/News";
import Navbar from "./Component/Navbar";

import Opening from "./Customer/Screen/Opening";
import Login from "./Customer/Screen/Login";
import Signup from "./Customer/Screen/Signup";
import Logout from "./Customer/Screen/Logout";

function App() {
  return (
      <div>
        <Navbar />
        <Routes> {/* Routes chứa các Route định nghĩa các đường dẫn */}
          <Route path="/" element={<Home />} />
          <Route path="/OurStory" element={<OurStory />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/News" element={<News />} />
          <Route path="/opening" element={<Opening />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
  );
}

export default App;
