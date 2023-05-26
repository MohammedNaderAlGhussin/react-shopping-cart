import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container xl:max-w-[1210px] mx-auto">
        <AppRoutes />
      </div>
    </Fragment>
  );
}

export default App;
