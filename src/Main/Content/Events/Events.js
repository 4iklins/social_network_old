import './Events.scss';


function Events() {
  return (
    <div className="events">
      <p className="events__description">Events</p>
      <ul className="events__list">
        <li className="event__item">
          <div className="event__date">FEB<span>22</span></div>
          <div className="event__box">
            <div className="event__head">Developer Programe</div>
            <div className="event__descr">41 madison ave, floor 24 new work, NY 10010</div>
          </div>
        </li>
        <li className="event__item">
          <div className="event__date">MAR<span>13</span></div>
          <div className="event__box">
            <div className="event__head">B-day</div>
            <div className="event__descr">46 pritickogo str, 3rd entrance, floor 7, BY 220082</div>
          </div>
        </li>
        <li className="event__item">
          <div className="event__date">APR<span>30</span></div>
          <div className="event__box">
            <div className="event__head">Aniversary Event</div>
            <div className="event__descr">41 madison ave, floor 24 new work, NY 10010</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Events