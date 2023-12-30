import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/homePage/Home";
import SignUp from "./pages/signUpPage/SignUp";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up/*" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
