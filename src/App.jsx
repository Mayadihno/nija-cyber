import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Login from "./Auth/Login";
import Welcome from "./Components/Welcome";
import { SignIn } from "./Auth/SignIn";
import ProtectedRoute from "./Components/Protected/ProtectedRouth";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [scores, setScores] = useState(null);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signIn"
          element={<SignIn setScores={setScores} scores={scores} />}
        />
        <Route path="/protected" element={<ProtectedRoute />}>
          <Route
            path="/protected/welcome"
            element={<Welcome scores={scores} />}
          />
        </Route>
      </Routes>
      <ToastContainer position="top-left" />
      <Footer />
    </>
  );
}

export default App;
