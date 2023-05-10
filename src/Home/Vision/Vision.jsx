import React from "react";
import { Button } from "@chakra-ui/react";
import "./Vision.css";
const Vision = () => {
  return (
    <React.Fragment>
      <div className="vision">
        <div className="vision__content">
          <div className="vision__flex">
            <div className="vision__image">
              <img
                src="https://images.pexels.com/photos/6994993/pexels-photo-6994993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="vision__text">
              <h2>Our Vision: An Africa without Hunger</h2>
              <p>
                Feeding Africa is the largest charity working to end hunger in
                the world. We partner with world food banks, food pantries, and
                local food programs to bring food to people facing hunger. We
                advocate for policies that create long-term solutions to hunger.
              </p>
              <Button variant={"solid"} colorScheme="whatsapp">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Vision;
