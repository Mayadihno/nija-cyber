import { Box, Button, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import "./SignUp.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import zxcvbn from "zxcvbn";
import ReCAPTCHA from "react-google-recaptcha";
import { auth, db } from "../Firebase/Config";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [change, setChange] = useState("");

  const [score, setScore] = useState("null");
  const [token, setToken] = useState(false);
  const captchaRef = useRef(null);
  const navigate = useNavigate();

  function onChange(value) {
    setToken(value);
  }
  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setChange({ ...change, ...newInput });
    if (e.target.value !== "") {
      const formDataCopy = { ...change };
      let pass = zxcvbn(formDataCopy.password);
      setScore(pass.score);
    } else {
      setScore(0);
    }
  };

  const { password, fullname, email, phoneNumber } = change;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: fullname,
        PhoneNumber: phoneNumber,
        Email: email,
      });

      const usersData = users.user;
      const formDataCopy = { ...change, score: score };
      delete formDataCopy.password;
      delete formDataCopy.confirm;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", usersData.uid), formDataCopy);
      toast.success("You have successfull create account");
      navigate("/signIn", { replace: true });
      e.target.reset();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email have already been used");
        console.log(error);
      } else if (error.code === "auth/weak-password") {
        toast.warning("Password should be more than 6 letters");
      } else {
        toast.error("Something went wrong");
        // console.log(error.message);
      }
    }
  };
  return (
    <React.Fragment>
      <div className="signUp">
        <div className="signUp__background">
          <div className="signUp__content">
            <h2>Create Account as local user</h2>
            <form onSubmit={handleSubmit}>
              <div className="name">
                <label htmlFor="name">Username</label>
                <Input
                  type="text"
                  placeholder="Enter Username"
                  id="name"
                  size="md"
                  name="fullname"
                  variant="outline"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  size="md"
                  variant="outline"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  required
                  onChange={handleChange}
                  size="md"
                  variant="outline"
                />
              </div>

              <span className="password-strength" data-score={score} />
              <div className="privacy">
                <input type="checkbox" style={{ marginRight: "10px" }} /> I
                accept the terms and privacy policy
              </div>
              <ReCAPTCHA
                sitekey="6Les7PolAAAAAEbGHpgfEDckNoKB04CcBaMKZ6T9"
                onChange={onChange}
                ref={captchaRef}
              />
              <Box sx={{ pt: "20px" }}>
                {token ? (
                  <Button
                    type="submit"
                    variant={"solid"}
                    colorScheme="whatsapp"
                  >
                    Sign Up
                  </Button>
                ) : (
                  <Button variant={"outline"} colorScheme="gray">
                    Sign Up
                  </Button>
                )}
              </Box>
            </form>
            <div className="already">
              <p>
                Already have an account? <Link to={"/signIn"}>Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
