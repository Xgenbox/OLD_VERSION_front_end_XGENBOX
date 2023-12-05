import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import L from "leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import "./App.css"
import {
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  CardFooter,
  Button,
} from "reactstrap";
import Header from './Headers/Header';
import {Link} from "react-router-dom"
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import 'react-toastify/dist/ReactToastify.css';

import { Tooltip } from 'primereact/tooltip';

import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers } from "Redux/actions/userAction";
import { fetchPointBinAll } from "Redux/actions/BinAction";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

function MapCollector() {
  const [currentLocation, setCurrentLocation] = useState(null);
    // const position = [51.505, -0.09];
    const [position, setposition] = useState(
      [51.505, -0.09]
    )
    const AllUsers = useSelector(state => state?.users?.users?.users);
     // ---------------------------------------------------------All Bins
     const bins = useSelector(state=>state?.fetchBins?.fetchBins) || []
     const municipal = useSelector(state=>state?.request?.request?.municipal) || []
     const BinByMunicipal = useSelector(state=>state?.fetchBinByMunicipal?.BinListByMunicipal) || []
     // console.log("bins--------------------", bins)
    //  console.log("BinByMunicipal--------------------", municipal)
     useEffect(() => {
       dispatch(fetchPointBinAll())

     }, [bins])
     useEffect(() => {
       dispatch(fetchPointBinAll())
     }, [BinByMunicipal])
     const pointBinsFull = bins && bins&& bins?.length > 0? bins?.filter((bin) => {
       return bin.bins.some((b) => parseFloat(b.niv) >= 80);
     }) : [];
     // console.log(bins)
     const BinByMunicipalFull = BinByMunicipal && BinByMunicipal.bins&& BinByMunicipal.bins.length > 0? BinByMunicipal?.bins?.filter((bin) => parseFloat(bin.niv) >= 80): [];


     const AllFull = [...BinByMunicipalFull, ...pointBinsFull];
    //  console.log("AllFull--------------------", AllFull)
     // ---------------------------------------------------------All Bins
    const defaultCenter = currentLocation || position;
    const defaultZoom = 13;
    const bounds = AllFull?.reduce(
      (acc, pointBin) => {
        const [lat, lon] = [
          pointBin?.lat,
          pointBin?.long
        ];

        if (lat && lon) {
          acc.extend([lat, lon]);
        }

        return acc;
      },
      L.latLngBounds(defaultCenter, defaultCenter)
    );
    let DefaultIcon = L.icon({

      iconUrl: require("../assets/img/brand/binMarker.png"),
      iconSize: [30, 40],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowSize: [50, 64],
      shadowAnchor: [4, 62],
      className: "my-custom-class"
    });

    L.Marker.prototype.options.icon = DefaultIcon;
    // const mapRef = useMapEvents({
    //   click(){
    //       console.log('clicked')
    //   }
    // })
    const myLocIcon = L.icon({
        iconUrl: require("../assets/img/brand/marker-courier.png"),
        iconSize: [60, 60],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [50, 64],
        shadowAnchor: [4, 62],
        className: "my-custom-class"
        });
    const myIcon = L.icon({
        iconUrl: require("../assets/img/brand/binMarker.png"),
        iconSize: [30, 40],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [50, 64],
        shadowAnchor: [4, 62],
        className: "my-custom-class"
        });

    // Full bin Icon
    const fullIcon = L.icon({
      iconUrl: require("../assets/img/brand/red_bin.png"),
      iconSize: [30, 40],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowSize: [50, 64],
      shadowAnchor: [4, 62],
      className: "my-custom-class"
      });



    // console.log(AllUsers)

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(GetAllUsers())

    }, [dispatch,AllUsers])





    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
      });
    }, []);

    const MapsMarker = () => {
      const [position1, setPosition] = useState(null);
      const map = useMapEvents({
        click() {
          map.locate();
        },
        locationfound(e) {
          setPosition(e.latlng);
          map.flyTo(e.latlng, map.getZoom());
        },
      });
      useEffect(() => {
        if (currentLocation) {
          map.flyTo(currentLocation, map.getZoom());
        }
      }, [ map]);

    };


  return (
    <>
    <Header />
    {/* Page content */}
    <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col
                  // lg="6"
                    md="10"
                  >
                <h3 className="mb-0">Map </h3>

                  </Col>
                  <Col
                  // lg="6"
                    md="2"
                  >
                     {/* <Link
                          to={`/admin/AddRequest`}
                          >
                            <Button
                            className="float-right"

                            >


                Create a Request
                <i className=" ml-2 fas fa-arrow-right" />
                            </Button>
                          </Link> */}
                  </Col>
                </Row>
              </CardHeader>



            <div className="card ">

              <Tooltip target=".export-buttons>button" position="bottom" />
              <MapContainer
        style={{ height: "60vh" }}
               center={
                  defaultCenter
               }
                zoom={defaultZoom}
                 scrollWheelZoom={true}
               bounds={bounds}



               >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletRoutingMachine
            startingPoint={
                currentLocation || position
            }
            destination={
                [
                    35.646974,
                    10.1815
                ]


            }

/>

        {AllFull &&
          AllFull?.map(e => (
            <Marker
              key={e._id}
              position={[e?.lat, e?.long]} // Update property names
                icon={
                  e.bins.some((b) => parseFloat(b.niv) >= 80)
                    ? fullIcon
                    : myIcon
                }
                eventHandlers={{
                  click: () => {
                    setposition(
                      [e?.lat, e?.long]

                    )
                  }

              // click: () => alert('A marker has been clicked!')
            }}
            >

<Popup
  minWidth={200}
  closeButton={true}
  closeOnClick={true}
  autoClose={true}


  className="text-center"

  // onClose={() => setPopupInfo(null)}
  // onOpen={() => setPopupInfo(e)}
>
 <div style={{ display: 'flex', flexDirection: 'row',
  justifyContent: 'space-between', alignItems: 'center'

  }}>


{
  e.bins &&
  e.bins?.map((el) => {
    let rgbValues;
    switch (el.type) {
      case 'organic':
        rgbValues = '255, 0, 0'; // Red
        break;
      case 'paper':
        rgbValues = '255, 255, 0'; // Yellow
        break;
      case 'plastique':
        rgbValues = '0, 0, 255'; // Blue
        break;
      case 'glass':
        rgbValues = '0, 255, 0'; // green
      default:
        // Default RGB values
        rgbValues = '62, 152, 199';
    }

    const pathColor = `rgba(${rgbValues}, ${el?.niv / 100})`;
    return (
      <CircularProgressbar
      key={el._id}

      value={
    el?.niv
  } text={`${el?.type} ${  el?.niv

  }%`}
  // text="dd"
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: pathColor,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
  />
    );
  })
}
</div>


</Popup>


            </Marker>
          ))}
          {currentLocation && (
          <Marker position={currentLocation}
            icon={myLocIcon}
            eventHandlers={{
              click: () => alert('A marker has been clicked!')
            }}

          >
            <Popup>Your current location</Popup>
          </Marker>
        )}

        <MapsMarker />
      </MapContainer>

                </div>
              <CardFooter className="py-4">

              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}

      </Container>
  </>
  )
}

export default MapCollector