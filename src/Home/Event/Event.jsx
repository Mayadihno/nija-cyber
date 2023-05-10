import React from "react";
import "./Event.css";
import { data } from "./eventData";
import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
const Event = () => {
  return (
    <React.Fragment>
      <div className="event">
        <div className="event__content">
          <div className="event__heading">
            <h2>OUR EVENT</h2>
          </div>
          <div className="event__grid">
            {data.map((data) => {
              return (
                <div className="card" key={data.id}>
                  <Card maxW="sm">
                    <Image
                      src={data.image}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <CardBody>
                      <Stack mt="2" spacing="3">
                        <Heading size="md">{data.text}</Heading>
                        <Text>{data.date}</Text>
                      </Stack>
                      <Button
                        sx={{ mt: "20px" }}
                        variant="solid"
                        colorScheme="whatsapp"
                      >
                        Register Now
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Event;
