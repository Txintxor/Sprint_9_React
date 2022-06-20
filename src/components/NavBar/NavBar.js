import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  NaviBar,
  NavLinks,
  Listed,
  NavMenuIcon,
} from "../styled-c/styled-components.js";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const element = document.querySelector("#navMenu");

  const toggle = () => {
    if (window.screen.width < 601) {
      isOpen
        ? (element.style.display = "flex")
        : (element.style.display = "none");
    } else {
      element.style.display = "flex";
    }
  };

  const { logout } = useAuth0();

  // Recogemos el elemento del menú de la barra de navegación

  return (
    <NaviBar>
      <a id="navLogo" href="/">
        NavBar Logo
      </a>
      <NavLinks id="navMenu">
        <Listed>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
          </button>
        </Listed>
        <Listed>
          <a href="/Recetas">Recetas</a>
        </Listed>
        <Listed>
          <a href="/Escandallos">Escandallos</a>
        </Listed>
      </NavLinks>
      <NavMenuIcon onClick={toggle}>
        <div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </NavMenuIcon>
      {/* {isOpen && (
        <NavLinksMini>
          <Listed>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </button>
          </Listed>
          <Listed>
            <a href="/Recetas">Recetas</a>
          </Listed>
          <Listed>
            <a href="/Escandallos">Escandallos</a>
          </Listed>
        </NavLinksMini>
      )} */}
    </NaviBar>
  );
};

export default NavBar;
