import React from 'react';
import Login from "./pages/login/Login";
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";

function App() {
  return (
      <Routes>
        <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
        </Route>
      </Routes>
  );
}

export default App;
