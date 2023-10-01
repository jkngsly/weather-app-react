import { useState, React } from "react";
import Today from "./components/Today.jsx";
import Forecast from "./components/Forecast.jsx";
import AppFooter from "./components/AppFooter.jsx";
import { AppContext } from "./AppContext.js";
import "./App.scss";

export default function App() {
  const [unit, setUnit] = useState("f");

  return (
    <AppContext.Provider value={{ unit, setUnit }}>
      <Today />
      <Forecast />
      <AppFooter />
    </AppContext.Provider>
  );
}
