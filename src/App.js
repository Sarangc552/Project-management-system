import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext } from "react";
import axios from "axios";
import Editform from "./components/editform/Editform";
import Add from "./components/Addform/Add";

const projectmanagement = createContext();
const App = () => {
  const [product, setproduct] = useState([]);
  const [edit, setedit] = useState([])
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setproduct(res.data.products));
  }, []);

  return (
    <>
      <projectmanagement.Provider value={{product,setproduct,edit,setedit}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/edit" element={<Editform/>}></Route>
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </projectmanagement.Provider>
    </>
  );
};

export default App;
export { projectmanagement };
