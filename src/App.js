import "./App.css";
//import routes from "./router/syncRouter";
import { Route, Routes, useNavigate,Navigate,useLocation } from "react-router-dom";
import Login from "./views/login/Login";
import Index from "./views/index/Index";
import {useEffect} from "react"
function App(params) {
  const navigate=useNavigate()
  const location=useLocation()
  useEffect(()=>{
    if (localStorage.getItem("token")) {
    if(location.pathname==="/login"){
      navigate("/")
    }
  }else{
    if(location.pathname!=="/login"){
      navigate("/login")
    }
  }
  })
  return (
    <div >
      <Routes>
        <Route path="/" exact element={<Navigate to="/index" />}></Route>
        <Route path="/index"  element={<Index />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes> 
    </div>
  );
}

export default App;
