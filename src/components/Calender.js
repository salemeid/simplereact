import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";




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
    { start: "2021-02-09", end: "2021-02-15", title: "TRAINING" },
  ];


  const CalendarRoster = () => {
    return (
      <div className="Calendar">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          views={['month']}
          style={{ height: 500 }}
        />
      </div>
    );
  }

  export default CalendarRoster;