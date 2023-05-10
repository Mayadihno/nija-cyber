import React from "react";
import "./Hunger.css";
import { Button, Input } from "@chakra-ui/react";
const Hunger = () => {
  return (
    <React.Fragment>
      <div className="hunger">
        <div className="hunger__bacground">
          <div className="hunger__text">
            <div className="text">
              <h2>No One Can Thrive on an Empty Stomach</h2>
              <p>
                34 million people face hunger in the Africa every day. —
                including more than 9 million children. Hunger knows no
                boundaries — it touches every community in the Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="join">
        <div className="join__background">
          <div className="join__content">
            <div className="join__text">
              <h2>Join Us: Get Updates & Get Involved</h2>
              <form>
                <Input type="email" placeholder="Email Address" />
                <Button variant={"solid"} colorScheme="whatsapp">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hunger;
