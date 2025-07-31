import { LINKS } from "../../../constants/common";
import "./header.styles.scss";

export const Header = () => {
  return (
    <header>
      {Object.entries(LINKS).map(([href, text]) => (
        <a href={`#${href}`} key={href}>
          {text}
        </a>
      ))}
    </header>
  );
};
