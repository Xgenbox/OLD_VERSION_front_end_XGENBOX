import { Box, SimpleGrid } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faPrint,
  faSmoking,
  faTools,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import Feature from "components/Feature";
// import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

export default function MoreFeatures() {
  return (
    <Box p={4} alignContent={"center"} justifyContent={"center"} marginTop={20}>
      <SimpleGrid
        columns={{ base: 2, md: 5 }}
        spacing={20}
        justifyItems={"center"}
        alignItems={"flex-start"}
      >
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faPrint}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"Graphic wraps"}
        />
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faImage}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"Advertisement signage"}
        />
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faWifi}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"WI-FI router"}
        />
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faTools}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"mounting bracket"}
        />
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faSmoking}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"Ashtray"}
        />
      </SimpleGrid>
    </Box>
  );
}
