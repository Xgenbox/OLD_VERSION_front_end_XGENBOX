/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/index2";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import RequestsMunicpal from "./components/RequestsMunicpal";
import ListOfUsers from "components/ListOfUsers";
import UserDetails from "components/UserDetails";
import PartnershipList from "components/PartnershipList";
import QuoteList from "components/QuoteList";
import TechnicalAssistanceList from "components/TechnicalAssistanceList";
import ContactsList from "components/ContactsList";
import PartnerDetails from "components/DetailsPartnership";
import QuoteDetail from "components/QuoteDetails";
import TechAssistDetail from "components/TechAssistDetail";
import ContactDetails from "components/ContactDetails";
import CreateBin from "components/CreateBin";
import ListOfBins from "components/ListOfBins";
import ListOfPointBin from "components/ListOfPointBin";
import CreateBinPoint from "components/CreatePointBin";
import ShowBinDetails from "components/ShowBinDetails";
import EditBin from "components/EditBin";
import PointBinDetails from "components/PointBinDetails";
import EditPointBin from "components/EditPointBins";
import MunicipalDetails from "components/MunicipalDetails";
import MapsComponent from "components/MapsComponent";
import MapCollector from "components/MapCollector";
import SpecificRequest from "components/company dashboard/SpecificRequest";
import quoteRequest from "components/company dashboard/quoteRequest";
import AppointmentRequest from "components/company dashboard/AppointmentRequest";
import QRCodeGenerator from "components/company dashboard/QRCodeGenerator";
import addproduct from "components/company dashboard/addproduct";
import medicineDetials from "components/company dashboard/medicineDetials";
import EditMedicine from "components/company dashboard/EditMedicine";
import ScanQRCode from "components/company dashboard/ScanQRCode";
import CleaningService from "components/Citizen Dashboard/CleaningService";
import ScanQrCode from "components/Citizen Dashboard/ScanQrCode";
import ManageAccesss from "components/Citizen Dashboard/ManageAccesss";
import Users from "components/Citizen Dashboard/Users";
import CreateCleaningService from "components/Citizen Dashboard/components/CreateCleaningService";
import AddAccessCode from "components/Citizen Dashboard/components/AddAccessCode";
import MapsComponetCiti from "components/Citizen Dashboard/MapsComponetCiti";


var routes = [
  // ADmin routes
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: MapsComponent,
    layout: "/admin"
  },
  {
    path: "/List-Users",
    name: "List Of Users",
    icon: "ni ni-folder-17 text-yellow",
    component: ListOfUsers,
    layout: "/admin"
  },
  {
    path: "/List-bins",
    name: "List Of Bins",
    icon: "ni ni-folder-17 text-yellow",
    component: ListOfBins,
    layout: "/admin"
  },
  {
    path: "/List-Point-bins",
    name: "List Of Points",
    icon: "ni ni-folder-17 text-yellow",
    component: ListOfPointBin,
    layout: "/admin"
  },
  {
    path: "/user-details/:id",
    name: "User Details",
    icon: "ni ni-single-copy-04 text-grey",
    component: UserDetails,
    layout: "/admin"
  },
  {
    path: "/partner-details/:id",
    name: "Partner Details",
    icon: "ni ni-single-copy-04 text-grey",
    component: PartnerDetails,
    layout: "/admin"
  },
  {
    path: "/requests",
    name: " Municipal Requests ",
    icon: "ni ni-single-copy-04 text-grey",
    component: RequestsMunicpal,
    layout: "/admin"
  },
  {
    path: "/municipal-details/:id",
    name: " Municipal Requests details ",
    icon: "ni ni-single-copy-04 text-grey",
    component: MunicipalDetails,
    layout: "/admin"
  },
  {
    path: "/partnership-list",
    name: "Partnership Requests",
    icon: "ni ni-single-copy-04 text-grey",
    component: PartnershipList,
    layout: "/admin"
  },
  {
    path: "/quote-list",
    name: "Quote Requests",
    icon: "ni ni-single-copy-04 text-grey",
    component: QuoteList,
    layout: "/admin"
  },
  {
    path: "/quote-details/:id",
    name: "Quote Requests",
    icon: "ni ni-single-copy-04 text-grey",
    component: QuoteDetail,
    layout: "/admin"
  },
  {
    path: "/tech-assist-list",
    name: "Technical Assistance Requests",
    icon: "ni ni-single-copy-04 text-grey",
    component: TechnicalAssistanceList,
    layout: "/admin"
  },
  {
    path: "/tech-assist-detail/:id",
    name: "Technical Assistance Requests",
    icon: "ni ni-single-copy-04 text-grey",
    component: TechAssistDetail,
    layout: "/admin"
  },
  {
    path: "/contact-lists",
    name: "Contact Requests",
    icon: "ni ni-single-copy-04 text-grey",
    component: ContactsList,
    layout: "/admin"
  },
  {
    path: "/contact-detail/:id",
    name: "Contact Requests",
    icon: "ni ni-single-copy-04 text-grey",
    component: ContactDetails,
    layout: "/admin"
  },
  {
    path: "/edit-Point-bin/:id",
    name: "Edit Point of Bins",
    icon: "ni ni-planet text-blue",
    component: EditPointBin,
    layout: "/admin"
  },
  {
    path: "/point-bin-details/:id",
    name: "Point of Bin Details",
    icon: "ni ni-planet text-blue",
    component: PointBinDetails,
    layout: "/admin"
  },
  {
    path: "/edit-bin/:id",
    name: "Edit Bin",
    icon: "ni ni-planet text-blue",
    component: EditBin,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/AddBin",
    name: "create Bin",
    icon: "ni ni-building text-red",
    component: CreateBin,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/bin-details/:id",
    name: "binDetails",
    icon: "ni ni-single-02 text-yellow",
    component: ShowBinDetails,
    layout: "/admin"
  },
  // {
  //   path: "/Add-Point-Bin",
  //   name: "create Point Bin",
  //   icon: "ni ni-building text-red",
  //   component: CreateBinPoint,
  //   layout: "/admin"
  // },
  {
    path: "/Add-Point-Bin/:idQuote",
    name: "create Point Bin",
    icon: "ni ni-building text-red",
    component: CreateBinPoint,
    layout: "/admin"
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/feedbacks",
  //   name: "Feedbacks",
  //   icon: "ni ni-books text-green",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/Report",
    name: "Reports",
    icon: "ni ni-curved-next text-red",
    component: RequestsMunicpal,
    layout: "/admin"
  },
// ----------------------------------------------------------------------------------------------------------------
  // Citizen Routes
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: MapsComponetCiti,
    layout: "/citizen"
  },
  {
    path: "/cleaning-service",
    name: "Cleaning service",
    icon: "ni ni-tv-2 text-primary",
    component: CleaningService,
    layout: "/citizen"
  },
  {
    path: "/user-scan-qrcode",
    name: "Scan QR Code",
    icon: "ni ni-tv-2 text-primary",
    component: ScanQrCode,
    layout: "/citizen"
  },
  {
    path: "/manage-access",
    name: "Manage Access",
    icon: "ni ni-tv-2 text-primary",
    component: ManageAccesss,
    layout: "/citizen"
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-tv-2 text-primary",
    component: Users,
    layout: "/citizen"
  },
  {
    path: "/createCleaningservice",
    name: "create cleaning service",
    icon: "ni ni-tv-2 text-primary",
    component: CreateCleaningService,
    layout: "/citizen"
  },
  {
    path: "/AddAccesscode",
    name: "Add access code",
    icon: "ni ni-tv-2 text-primary",
    component: AddAccessCode,
    layout: "/citizen"
  },


  // ----------------------------------------------------------------------------------------------------------------
  // Company Routes
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: MapCollector,
    layout: "/company"
  },
  {
    path: "/specific-request",
    name: "Specific request",
    icon: "ni ni-chat-round text-primary",
    component: SpecificRequest,
    layout: "/company"
  },
  {
    path: "/quote-request",
    name: "Quote request",
    icon: "ni ni-align-left-2 text-primary",
    component: quoteRequest,
    layout: "/company"
  },
  {
    path: "/appointment-request",
    name: "Appointment request",
    icon: "ni ni-calendar-grid-58 text-primary",
    component: AppointmentRequest,
    layout: "/company"
  },
  {
    path: "/QRCodeGenerator",
    name: "Medicine",
    icon: "ni ni-app text-primary",
    component: QRCodeGenerator,
    layout: "/company"
  },
  {
    path: "/add-product",
    name: "Add product",
    icon: "ni ni-app text-primary",
    component: addproduct,
    layout: "/company"
  },
  {
    path: "/medicine-details/:id",
    name: "Medicine Details",
    icon: "ni ni-single-02 text-yellow",
    component: medicineDetials,
    layout: "/company"
  },
  {
    path: "/edit-medicine/:id",
    name: "Edit Medicine",
    icon: "ni ni-planet text-blue",
    component: EditMedicine,
    layout: "/company"
  },
  {
    path: "/user-qr-scanner/",
    name: "Scan QR Code",
    icon: "ni ni-key-25 text-blue",
    component: ScanQRCode,
    layout: "/company"
  },
  // ----------------------------------------------------------------------------------------------------------------
  // Collector Routes
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: ListOfBins,
  //   layout: "/collector"
  // },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: MapCollector,
    layout: "/collector"
  },


  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
