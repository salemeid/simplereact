import React from "react";
import CalendarRoster from "./components/Calender"
import "react-big-calendar/lib/css/react-big-calendar.css";
import StickyFooter from "./components/Footer";
import HeaderMUI from "./components/HeaderMUI";
import "./App.css"
import ListData from "./components/ListData";

export default function App() {
  return (
    <div className="Caleander">
      <HeaderMUI />
      {/* <CalendarRoster /> */}
      {/* <StickyFooter/> */}
      <ListData />
    
    </div>
  );
}