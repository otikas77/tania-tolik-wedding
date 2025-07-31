import { BLOCKS_ID } from "../../../constants/common";
import calendar from "../../../assets/calendar.png";
import map from "../../../assets/map.png";
import "./details.styles.scss";

const ADDRESS = "Зимна Вода, вул. Юліана Опільського, 15";

export const Details = () => {
  return (
    <section id={BLOCKS_ID.detailsSection}>
      <div className="bg"></div>
      <div className="when">
        <img src={calendar} alt="Calendar" className="calendar-img" />
      </div>

      <div className="where">
        <h2>Локація святкування</h2>
        <div className="where__content content">
          <div className="text-wrapper">
            <div className="address address--desktop">
              <span>Ресторан "Скіфія"</span>
              <span className="address address--desktop">{ADDRESS}</span>
            </div>
            <a
              id="build_rout"
              href="https://www.google.com/maps/dir/?api=1&destination=%D1%81.%2015,%20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%AE%D0%BB%D1%96%D0%B0%D0%BD%D0%B0%20%D0%9E%D0%BF%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE,%20%D0%97%D0%B8%D0%BC%D0%BD%D0%B0%20%D0%92%D0%BE%D0%B4%D0%B0,%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%2081110"
              target="_black"
            >
              Побудувати маршрут
            </a>
          </div>
          <img src={map} alt="MAP" id="map" />
          <div className="address address--mobile">
            <span>Ресторан "Скіфія"</span>
            <span>Зимна Вода,</span>
            <span>вул. Юліана Опільського, 15</span>
          </div>
        </div>
      </div>
    </section>
  );
};
