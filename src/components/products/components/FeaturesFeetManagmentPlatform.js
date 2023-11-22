import { Box, SimpleGrid } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faCogs,
  faMapLocation,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";
import Feature from "components/Feature";
// import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

export default function FeaturesFeetManagmentPlatform() {
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
              icon={faCogs}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"Intégration de matériel et d’actifs"}
        />
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faMapLocation}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"Optimisation automatisée des itinéraires"}
        />
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faTruckMoving}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"Fonctions de gestion de flotte avancées"}
        />
        <Feature
          icon={
            <FontAwesomeIcon
              icon={faChartArea}
              style={{ color: "#3C976E", width: 40, height: 40 }}
            />
          }
          title={"Rapports de consultation et d’analyse"}
        />
      </SimpleGrid>
    </Box>
  );
}
