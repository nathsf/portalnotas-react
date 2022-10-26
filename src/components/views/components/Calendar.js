import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
// import esLocale from '@fullcalendar/common/locales/es';

import events from "./Events";

export default function Calendar() {
  return (
    <div className="Calendar">
      <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        // locale={esLocale}
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={events}
      />
    </div>
  );
}
