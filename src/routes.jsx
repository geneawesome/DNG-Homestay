import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Services from "./views/Services/Services";
// import Booknow from "./views/Booknow/Booknow";
// import TravelInformations from "./views/TravelInformations/TermsandCondition";
// import Regform from "./views/Regform/Registration";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/services", element: <Services /> },
  // { path: "/booknow", element: <Booknow /> },
  //   { path: "/TermsandCondition", element: <TravelInformations /> },
  //   { path: "/Regform", element: <Regform /> },
];

export default routes;
