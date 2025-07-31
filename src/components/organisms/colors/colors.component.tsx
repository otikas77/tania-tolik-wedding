import { BLOCKS_ID } from "../../../constants/common";
import "./colors.styles.scss";
import white from "../../../assets/color-white.jpg";
import champagne from "../../../assets/color-champagne.jpg";
import brown from "../../../assets/color-brown.jpg";
import back from "../../../assets/color-black.jpg";
import cappuccino from "../../../assets/color-cappuccino.jpg";

import { capitalize } from "../../../utils/capitalize";

const colors = [
  { url: back, text: "чорний" },
  { url: brown, text: "шоколадний" },
  { url: cappuccino, text: "капучино/мокко" },
  { url: champagne, text: "шампань" },
  { url: white, text: "молочний/білий" },
];

export const Colors = () => {
  return (
    <section id={BLOCKS_ID.colorsSection}>
      <div className="text_block">
        <h2>Дрес-код</h2>
        <p>Ми просимо вас дотриматись такої кольорової гами</p>
      </div>

      <div className="colors_wrapper">
        {colors.map(({ url, text }) => (
          <div className="color_block" key={url}>
            <div
              className="color"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
            <span className="color_signature">{capitalize(text)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
