import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = ({ startingPoint, destination }) => {
  const map = useMap();
  useEffect(() => {

    L.Routing.control({
      waypoints: [
        L.latLng(startingPoint[0], startingPoint[1]),
        L.latLng(destination[0], destination[1]),
      ],
      routeWhileDragging: false,
    }).addTo(map);


  }, [])

}

export default LeafletRoutingMachine;
