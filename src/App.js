import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./pages/Demo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
