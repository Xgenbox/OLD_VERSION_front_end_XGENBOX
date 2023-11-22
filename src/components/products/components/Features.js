import { Box, SimpleGrid } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faMapLocationDot,
  faSignal,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Feature from "components/Feature";
// import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

export default function Features() {
  return (
    <Box p={4} alignContent={"center"} justifyContent={"center"} marginTop={20}>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        spacing={20}
        justifyItems={"center"}
        alignItems={"flex-start"}
      >
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"Powered by solar energy"}
        />
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faSignal}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"Wireless data transmission"}
        />
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faLock}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"Safety sensors"}
        />
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faMapLocationDot}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"GPS location tracking"}
        />
      </SimpleGrid>
    </Box>
  );
}
