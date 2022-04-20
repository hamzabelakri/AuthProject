import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home.js";
import SignIn from "./Components/AUTH/SignIn";
import CustomNavbar from "./Components/Navbar/Navbar";
import Register from "./Components/AUTH/Register";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
