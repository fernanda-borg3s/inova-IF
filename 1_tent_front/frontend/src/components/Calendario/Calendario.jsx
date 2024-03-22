import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import brLocales from '@fullcalendar/core/locales/pt-br';
import './Calendario.css'

const events = [
    { title: 'Meeting', start: new Date() }
  ]
//   let calendar = new Calendar(calendarEl, {
//     locale: brLocales
//   });
export default function Calendario(){
    return(
        <>
         <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        locale={brLocales}
        headerToolbar={{
            start: "today prev,next",
            center:"title",
            end: "dayGridMonth,dayGridWeek,dayGridDay"
            ,
        }}
        height={"85vh"}
        
        
      />
      
        </>
    )
}
// a custom render function
function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  