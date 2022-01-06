import './Events.scss';

function Events() {
  return (
    <div className="events">
      <p className="events_description">Events</p>
      <ul className="events_list">
        <li className="event_item">
          <div className="event_date">FEB<span>22</span></div>
          <div className="event_box">
            <div className="event_head">Developer Programe</div>
            <div className="event_descr">41 madison ave, floor 24 new work, NY 10010</div>
          </div>
        </li>
        <li className="event_item">
          <div className="event_date">MAR<span>13</span></div>
          <div className="event_box">
            <div className="event_head">B-day</div>
            <div className="event_descr">46 pritickogo str, 3rd entrance, floor 7, BY 220082</div>
          </div>
        </li>
        <li className="event_item">
          <div className="event_date">APR<span>30</span></div>
          <div className="event_box">
            <div className="event_head">Aniversary Event</div>
            <div className="event_descr">41 madison ave, floor 24 new work, NY 10010</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Events