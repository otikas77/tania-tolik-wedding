import { useState } from "react";
import { LINKS } from "../../../constants/common";
import "./header.styles.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <button className={`drop-button ${isOpen ? 'drop-button__open' : ''}`} onClick={() => setIsOpen((val) => !val)}>
        <span></span>
      </button>

      <div className={`menu ${isOpen ? 'menu__open' : ''}`}>
        {Object.entries(LINKS).map(([href, text]) => (
          <a href={`#${href}`} key={href} onClick={() => setIsOpen(false)}>
            {text}
          </a>
        ))}
      </div>
    </header>
  );
};
