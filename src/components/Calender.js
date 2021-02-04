import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

export let navigate = {
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  TODAY: 'TODAY',
  DATE: 'DATE',
}

const locales = {
    "en-US": require("date-fns/locale/en-US")
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  });
  const myEventsList = [
    { start: "2021-02-02", end: "2021-02-02", title: "RD" },
    { start: "2021-02-03", end: "2021-02-03", title: "RD" },
    { start: "2021-02-04", end: "2021-02-04", title: "A10" },
    { start: "2021-02-05", end: "2021-02-08", title: "B20" },
    { start: "2021-02-09", end: "2021-02-15", title: "TRAINING" }
  ];

  // function Book({ event }) {
  //   return (
  //       <div className="rbc-day-bg">
  //           <button>Book Class</button>
  //       </div>
  //   )
// }

//   class CustomToolbar extends React.Component {
//     render() {
//         let { localizer: label } = this.props
//         return(
//             <div className="rbc-toolbar">
//                 <span className="rbc-btn-group">
//                     <button type="button" onClick={this.navigate.bind(null, navigate.PREVIOUS)}>Prev</button>
//                 </span>
//                 <span className="rbc-toolbar-label">{label}</span>
//                 <span className="rbc-btn-group">
//                     <button type="button" onClick={this.navigate.bind(null, navigate.NEXT)}>Next</button>
//                 </span>
//             </div>
//         )
//     }
//     navigate = action => {
//         this.props.onNavigate(action)
//     }
// }


  const CalendarRoster = () => {
    return (
      <div className="Calendar">
        <Calendar
          localizer={localizer} 
          views={['month']}
          events={myEventsList}
          style={{height: 500 }}
          S/>
      </div>
    );
  }

  export default CalendarRoster;