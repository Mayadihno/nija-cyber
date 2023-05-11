import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Login from "./Auth/Login";
import Welcome from "./Components/Welcome";
import { SignIn } from "./Auth/SignIn";
import ProtectedRoute from "./Components/Protected/ProtectedRouth";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/*" element={<ProtectedRoute />}>
          <Route path="/*/welcome" element={<Welcome />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
