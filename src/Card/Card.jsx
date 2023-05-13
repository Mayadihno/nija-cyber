import React from "react";
import "./Card.css";
import { Box, Button, Card, CardBody } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Cards = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="cards">
        <div className="card__content">
          <Card maxW={"md"}>
            <CardBody>
              <h2>
                Welcome to Omotosho Oluwagbeminija Cyber Security Assignment
              </h2>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant={"outline"}
                  colorScheme="whatsapp"
                  onClick={() => navigate("/login")}
                >
                  Click here to sign up
                </Button>
              </Box>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
