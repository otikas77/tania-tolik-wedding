import { BLOCKS_ID } from "../../../constants/common";
import car from "../../../assets/car.png";
import cake from "../../../assets/cake.png";
import eat from "../../../assets/eat.png";
import glasses from "../../../assets/glasses.png";
import wedding from "../../../assets/wedding.png";
import "./plan.styles.scss";

const PLAN = [
  { img: car, time: "11:30", description: ["Трансфер з", "Шептицького"] },
  { img: glasses, time: "13:30", description: ["Збір гостей", "та Welcome drink"] },
  { img: wedding, time: "14:00", description: ["Церемонія"] },
  { img: eat, time: "15:00", description: ["Святковий бенкет"] },
  { img: cake, time: "22:00", description: ["Завершення святкування"] },
];

export const Plan = () => {
  return (
    <section id={BLOCKS_ID.planSection}>
      <h2>Як все буде відбуватись?</h2>
      <div className="plan_wrapper">
        {PLAN.map(({ img, time, description }, i) => (
          <div className="plan_block" key={i}>
            <img src={img} alt={time} />
            <div className="plan_block__description">
              <p className="time">{time}</p>
              <div className="description_block">
                {description.map((val, i) => (
                  <span className="description" key={i}>{val}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
