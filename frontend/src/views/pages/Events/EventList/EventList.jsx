import { DUMMY_LIST_DATA } from "../../../../utils/data";
import "./EventList.css";
export default function EventList() {
  return (
    <div className="event-list-container">
      <div className="row container ">
        {DUMMY_LIST_DATA.map((item) => (
          <div className="column">
            <div className="card">
              <img src={item.image} alt="poster-image" />
              <div className="card-content">
                <h3>{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
