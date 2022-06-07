import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Curriculo from "./pages/Curriculo/curriculo";

function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo" element={<Curriculo />} />
       
      </Routes>
    </BrowserRouter>
  );
}
export default Router;