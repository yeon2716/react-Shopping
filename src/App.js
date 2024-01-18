import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import { Route, Routes } from "react-router-dom";
import PrivatgeRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate]=useState(false);
//authenticate가 true면 로그인 , authenticate가 false면 로그아웃

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login"
         element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivatgeRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
