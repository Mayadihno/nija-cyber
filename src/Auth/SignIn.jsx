/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./SignIn.css";
import React, { useState, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";
import "./SignIn.css";
// import { toast } from "react-toastify";
import { auth } from "../Firebase/Config";
import { Box, Button, Input } from "@chakra-ui/react";
import zxcvbn from "zxcvbn";
import ReCAPTCHA from "react-google-recaptcha";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;

  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [infoMsg, setInfoMsg] = useState("");
  const [initialLoading, setInitialLoading] = useState(false);
  const [initialError, setInitialError] = useState("");
  const [token, setToken] = useState(false);
  const [score, setScore] = useState("null");
  const [change, setChange] = useState("");
  const captchaRef = useRef(null);

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

  useEffect(() => {
    if (user) {
      // user is already signed in
      navigate("/welcome");
    } else {
      // user is not signed in but the link is valid
      if (isSignInWithEmailLink(auth, window.location.href)) {
        // now in case user clicks the email link on a different device, we will ask for email confirmation
        let email = localStorage.getItem("email");
        if (!email) {
          email = window.prompt("Please provide your email");
        }
        // after that we will complete the login process
        setInitialLoading(true);
        signInWithEmailLink(
          auth,
          localStorage.getItem("email"),
          window.location.href
        )
          .then((result) => {
            // we can get the user from result.user but no need in this case
            console.log(result.user);
            localStorage.removeItem("email");
            setInitialLoading(false);
            setInitialError("");
            navigate("/welcome");
          })
          .catch((err) => {
            setInitialLoading(false);
            setInitialError(err.message);
            navigate("/welcome");
          });
      } else {
        // console.log("enter email and sign in");
        // captchaRef.current.reset();
      }
    }
  }, [user, search, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    sendSignInLinkToEmail(auth, email, {
      url: "https://nija-donation.netlify.app/welcome",
      handleCodeInApp: true,
    })
      .then(() => {
        localStorage.setItem("email", email);
        setLoginLoading(false);
        setLoginError("");
        setInfoMsg("We have sent you an email with a link to sign in");
        e.target.reset();
      })
      .catch((err) => {
        setLoginLoading(false);
        setLoginError(err.message);
      });
  };
  return (
    <React.Fragment>
      <div className="box">
        {initialLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {initialError !== "" ? (
              <div className="error-msg">{initialError}</div>
            ) : (
              <>
                {user ? (
                  <div>Please wait...</div>
                ) : (
                  <div className="form">
                    <div className="form__content">
                      <h2>Login with your register email</h2>
                      <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <Input
                          type={"email"}
                          required
                          variant={"filled"}
                          placeholder="Enter Email"
                          value={email || ""}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Password</label>
                        <Input
                          type="password"
                          required
                          onChange={handleChange}
                          name="password"
                          variant={"filled"}
                          placeholder="Enter Password"
                        />
                        <span
                          className="password-strength"
                          data-score={score}
                        />

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
                              {loginLoading ? (
                                <span>Logging you in</span>
                              ) : (
                                <span>Login</span>
                              )}
                            </Button>
                          ) : (
                            <Button variant={"outline"} colorScheme="gray">
                              Sign in
                            </Button>
                          )}
                        </Box>
                        {loginError !== "" && (
                          <div className="error-msg">{loginError}</div>
                        )}
                        {infoMsg !== "" && (
                          <div className="info-msg">{infoMsg}</div>
                        )}
                        <div className="already">
                          <p>
                            Don't have an account?
                            <Link to={"/login"}>Sign Up</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </React.Fragment>
  );
};
