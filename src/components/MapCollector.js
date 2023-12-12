import React, { useEffect, useMemo, useState } from "react";
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
import ListOfAllBins from "./ListOfAllBins";

// Data table ------------------------------
import  {  useRef } from 'react'
import { FetchAllBins } from 'Redux/actions/BinAction';
import index from './index.css'
import 'react-toastify/dist/ReactToastify.css';
// import QRCode, { QRCodeSVG } from 'qrcode.react';
import { DeleteBinByID } from 'Redux/actions/BinAction';
import { Button as Btn} from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { Tooltip } from 'primereact/tooltip';
import { useHistory } from 'react-router-dom';
import { FilterMatchMode, FilterOperator } from 'primereact/api';

import { InputText } from 'primereact/inputtext';
import { toast } from "react-toastify";
// --------------------------------------
function MapCollector() {
  const [currentLocation, setCurrentLocation] = useState([36.7496,10.2126]);
  const [tab, settab] = useState("map")
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
    const defaultZoom = 5;
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

    // const dispatch = useDispatch();

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
      console.log(position1)
      const refapp = useRef(currentLocation)
      const MemoizedCurrentLocation = useMemo(() => currentLocation, [currentLocation]);
      useEffect(() => {
        if (currentLocation) {
          map.flyTo(MemoizedCurrentLocation, map.getZoom());
          console.log("UseEffect", MemoizedCurrentLocation[0]);
          console.log("UseEffect", MemoizedCurrentLocation[1]);
        }
      }, [currentLocation[0]]);

    };

    // Data table----------------------------------------------------------------
    const [copiedText, setCopiedText] = useState();
    const profile = useSelector(state=>state?.profile?.profile)
    const listOfBins = useSelector(state=>state?.ListOfBins?.ListOfBins?.bins)
    const requestsMunicipal = useSelector(state=>state?.MunicipaRequest?.MunicipalRequest )
    const ListOfUsers = useSelector(state=>state?.users?.users)
    const isLoad = useSelector(state=>state?.isLoading?.isLoading)
    const isSuccess = useSelector(state=>state?.success?.success)
    const [selectedItem, setselectedItem] = useState(null)
    const dispatch = useDispatch()
    const [count, setCount] = useState(10);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const history = useHistory();
    const dt = useRef(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
  });
  const [globalFilterValue, setGlobalFilterValue] = useState('');
    const cols = [
        // { field: '_id', header: 'Id' },
        { field: 'name', header: 'Name' },
        { field: 'address', header: 'Address' },
        { field: 'gaz', header: 'Gaz' },
        { field: 'niv', header: 'Level' }
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));


    useEffect(() => {
      if (count > 0) {
        const timer = setTimeout(() => {
          setCount(count - 1);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [count]);




    // console.log(ListOfUsers)
      const [notificationModal, setnotificationModal] = useState(false)
    // console.log(requestsMunicipal)




    useEffect(() => {
      dispatch(FetchAllBins())
      // console.log("render")

    }, [listOfBins])




    const showToastMessage = () => {
      toast.success('Request sent successfully.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
      });
    }
    useEffect(() => {
      if (isSuccess) {

        showToastMessage()
      }
    }, [isSuccess])


    const deleteBin = (id)=> {
      // console.log("delete")

      dispatch(DeleteBinByID(id))
      // if(isSuccess){

      //   startTimer()
      // }
    }


    const exportCSV = (selectionOnly) => {
      dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
      import('jspdf').then((jsPDF) => {
          import('jspdf-autotable').then(() => {
              const doc = new jsPDF.default(0, 0);

              doc.autoTable(exportColumns, products);
              doc.save('products.pdf');
          });
      });
  };

  const exportExcel = () => {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(products);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
          });

          saveAsExcelFile(excelBuffer, 'products');
      });
  };

  const saveAsExcelFile = (buffer, fileName) => {
      import('file-saver').then((module) => {
          if (module && module.default) {
              let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
              let EXCEL_EXTENSION = '.xlsx';
              const data = new Blob([buffer], {
                  type: EXCEL_TYPE
              });

              module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          }
      });
  };
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };




    const header = (
      <>
      <Row>
          <Col >
          <span className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                  </span>
          </Col>
          <Col xs="auto">
          {/* <div className="flex align-items-center justify-content-end gap-2"> */}
          <Btn type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
          {/* <Btn type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
          <Btn type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" /> */}
          {/* </div> */}
          </Col>
      </Row>

      </>
  );
  const actionBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
          <Link
                            to={`/admin/edit-bin/${rowData?._id}`}
                            >

            <Btn icon="pi pi-pencil" rounded outlined className="mr-2"  />
                            </Link>
            <Btn icon="pi pi-trash" rounded outlined severity="danger" onClick={()=>{

  setnotificationModal(true)

  setselectedItem(rowData?._id)
  } } />
        </React.Fragment>
    );
  };
  // --------------------- Data table

const [count1, setcount1] = useState(0)
useEffect(() => {
  console.log(count1)
  setcount1(count+1)
  console.log(currentLocation)

}, [currentLocation[0]])

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
                <h3 className="mb-0">Nearby SmartBins </h3>

                  </Col>
                  <Col md="2">
  {/* <Link to={`/company/index`}> */}
    <Button className="float-right"
    onClick={() => settab("list")}
    >
      {/* <Link to="/company/List-bins"> */}
        <i className="fas fa-list-ul mr-2" />
      {/* </Link> */}
    </Button>
    <Button className="float-right"
    onClick={() => settab("map")}
    >
      {/* <Link to="/company/index"> */}
        <i className="fas fa-map mr-2" />
      {/* </Link> */}
    </Button>

  {/* </Link> */}
</Col>
                </Row>
              </CardHeader>



            <div className="card ">

              {/* <Tooltip target=".export-buttons>button" position="bottom" /> */}
              {/* <MapContainer
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
      </MapContainer> */}
      {/* <ListOfAllBins/> */}
      {
        tab =="map"?
        <MapContainer
        style={{ height: "60vh" }}
               center={
                { lat: currentLocation[0], lng: currentLocation[1] }
               }
                zoom={defaultZoom}
                 scrollWheelZoom={true}
               bounds={bounds}



               >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <LeafletRoutingMachine
            startingPoint={
                currentLocation || position
            }
            destination={
                [
                    35.646974,
                    10.1815
                ]


            }

/> */}

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
          {/* {currentLocation && (
          <Marker position={currentLocation}
            icon={myLocIcon}
            eventHandlers={{
              click: () => alert('A marker has been clicked!')
            }}

          >
            <Popup>Your current location</Popup>
          </Marker>
        )} */}

        {/* <MapsMarker /> */}
      </MapContainer>
        :
        <DataTable paginator rows={5} rowsPerPageOptions={[5, 10, 25]} ref={dt} value={listOfBins} header={header} selection={selectedProduct}
              selectionMode={true}
              onSelectionChange={(e) => setSelectedProduct(e.data)}
              filters={filters} filterDisplay="menu" globalFilterFields={['_id','name', 'address', 'gaz', 'niv', 'status']}
  //             onRowClick={
  //               (e) => {

  //                 const url = `/admin/bin-details/${e.data._id}`;
  // history.push(url);
  //               }
  //             }


               sortMode="multiple"className="thead-light" tableStyle={{ minWidth: '50rem' }}>
                {/* <Column field="_id" header="ID" sortable className="thead-light" ></Column>
                <Column field="name" header="Name" sortable className="thead-light" ></Column>
                <Column field="address" header="Address" sortable style={{ width: '25%' }}></Column>
                <Column field="gaz" header="Gaz" sortable style={{ width: '25%' }}></Column>
                <Column field="niv" header="Level" sortable style={{ width: '25%' }}>
                  hjh
                </Column> */}
                {
                  cols.map(e=>{
                    return <Column field={e.field} header={e.header} sortable style={{ width: '25%' }}></Column>
                  })
                }
                {/* <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column> */}
            </DataTable>
      }


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