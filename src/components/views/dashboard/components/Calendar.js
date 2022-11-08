import React from "react";

import FullCalendar, { ViewContentArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import esLocale from '@fullcalendar/core/locales/es';

import events from "./Events";

export default function Calendar() {
  const handleSize = (event) => {
    let contentAPi = event.view.calendar;
    if (window.innerWidth < 800) {
      contentAPi.changeView('listWeek');
    } else {
      contentAPi.changeView('dayGridMonth');
    }
}
  return (
    <div className="Calendar" >
      <FullCalendar
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek"
        }}
        locale={esLocale}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin ]}
        events={events}
        windowResize={handleSize}
      />
    </div>
  );
}
