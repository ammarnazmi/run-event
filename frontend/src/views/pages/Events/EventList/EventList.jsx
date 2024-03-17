import { DUMMY_LIST_DATA } from "../../../../utils/data";
import "./EventList.css";
export default function EventList() {
  let windowSize = window.matchMedia;

  return (
    <div className="container-fluid bg-white-event-list">
      <div className="container pt-5">
        <div className="row">
          {DUMMY_LIST_DATA.map((item) => (
            <div className="col-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <img className="card-img-top" src={item.image} alt="poster-image" />
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p>{windowSize}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
