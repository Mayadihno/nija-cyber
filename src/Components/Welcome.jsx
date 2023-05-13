import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase/Config";
import { Box, Button, Card, CardBody } from "@chakra-ui/react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const Welcome = () => {
  const [allData, setAllData] = useState({});

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut(auth);
    localStorage.removeItem("email");
    navigate("/", { replace: true });
  };

  const getDetails = async () => {
    const docRefs = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRefs);
    if (docSnap.exists()) {
      setAllData(docSnap.data());
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <React.Fragment>
      <div className="welcome">
        <div className="welcome__content">
          <Card maxW={"md"}>
            <CardBody sx={{ color: "black" }}>
              <h2>Welcome user</h2>
              <h5>Thanks for making donation {allData.email} </h5>
              <p>
                Your Password Strength is score is {allData.score * 25}% Strong
              </p>
            </CardBody>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant={"outline"}
                colorScheme="whatsapp"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
