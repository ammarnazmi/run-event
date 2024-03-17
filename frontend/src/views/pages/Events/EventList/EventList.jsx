import { DUMMY_LIST_DATA } from "../../../../utils/data";
import "./EventList.css";

export default function EventList() {
  return (
    <div className="container-fluid bg-white-event-list">
      <div className="container pt-5">
        <div className="row">
          {DUMMY_LIST_DATA.map((item) => (
            <div className="col-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <img
                  className="card-img-top"
                  src={item.image}
                  alt="poster-image"
                />
                <div class="card-body d-flex flex-column pb-0">
                  <h3 className="card-title">{item.title}</h3>
                  <div className="location d-flex">
                    <i className="bi bi-geo-alt-fill"></i>
                    <p className="ps-2">Pantai Merdeka, Kedah</p>
                  </div>
                  <div className="card-footer mt-auto bg-transparent pb-0 d-flex event-date ps-0">
                    <i class="bi bi-calendar3"></i>
                    <p className="ps-2">24 march</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
