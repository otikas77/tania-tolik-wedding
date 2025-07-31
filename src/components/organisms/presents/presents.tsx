import { BLOCKS_ID } from "../../../constants/common";
import './presents.styles.scss'

export const Presents = () => {
  return (
    <section id={BLOCKS_ID.presentsSection}>
      <h2>Подарунки</h2>
      <p>
        Ми будемо вдячні, якщо замість подарунків ви зробите грошовий внесок в
        наш сімейний бюджет.
      </p>
      <p>
        Замість квітів, просимо купувати сухий корм для стерилізованих котів чи
        собак! Будемо вдячні, якщо ви оминатимете такі торгові марки, як Felix,
        Мяу/Гав, Friskies.
      </p>
    </section>
  );
};
