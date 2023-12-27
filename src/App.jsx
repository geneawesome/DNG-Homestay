import Topnav from "./Components/Topnav";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import Footer from "./Components/Footer";
const App = () => {
  console.log(routes);

  return (
    <div className="App">
      <Topnav />

      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
