import { Button } from "@chakra-ui/react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { auth } from "../../Firebase/firebaseConfig";

const Manubar = () => {
  const [pageState, setPageState] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    // e.preventDefault();
    // await signOut(auth);
    // navigate("/", { replace: true });
  };

  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     setPageState(true);
    //   } else {
    //     setPageState(false);
    //   }
    // });
  }, [pageState]);
  return (
    <>
      {!pageState && (
        <>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Home
          </NavLink>
          <Button
            color={"twitter"}
            variant={"outline"}
            onClick={() => navigate("/login")}
          >
            Login/Register
          </Button>
        </>
      )}
      {pageState && (
        <>
          <Button
            variant={"outline"}
            colorScheme="blackAlpha"
            onClick={handleClick}
          >
            Sign Out
          </Button>
        </>
      )}
    </>
  );
};

export default Manubar;
