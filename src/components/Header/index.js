import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useState, useRef } from "react";

import { Burger, Menu } from "../";
import { ThemeContext } from "../ThemeContext";
import { useOnClickOutside } from "../../hooks";

import "../../styles/main.css";
import "../../styles/bootstrap.min.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "menu-panel";
  const { colorMode } = React.useContext(ThemeContext);

  useOnClickOutside(node, () => setOpen(false));

  const bgImage = `url(/img/circles-${colorMode}.png) 
        center / cover   /* position / size */ 
        no-repeat        /* repeat */ 
        fixed            /* attachment */ 
        padding-box      /* origin */ 
        content-box      /* clip */ 
        white            /* color */`;

  const logo =
    colorMode === "light"
      ? "/img/logo-classic-100p.png"
      : "/img/logo-light-100p.png";

  return (
    <header id="header">
      <div className="row align-items-center justify-content-between d-flex">
        <div id="logo">
          {/* paintDrip, fade, swipe, cover  */}
          <AniLink
            cover
            bg={bgImage}
            to="/"
            aria-label="Winter Hearth Home Page Icon"
            name="navbar-logo-link"
          >
            {colorMode && (
              <img
                style={{ maxHeight: "56px" }}
                src={logo}
                alt="Winter Hearth Logo"
                title="Winter Hearth Logo"
                name="navbar-logo-image"
              />
            )}
          </AniLink>
        </div>
        <nav>
          <div id="menu-panel" ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div id="nav-menu-container">
            <ul className="nav-menu">
              <li>
                <AniLink name="navbar-link-home" cover bg={bgImage} to="/">
                  Home
                </AniLink>
              </li>
              <li>
                <AniLink
                  name="navbar-link-story"
                  cover
                  bg={bgImage}
                  to="/about"
                >
                  Our Story
                </AniLink>
              </li>
              <li>
                <AniLink
                  name="navbar-link-podcast"
                  cover
                  bg={bgImage}
                  to="/podcast"
                >
                  Podcast
                </AniLink>
              </li>
              <li>
                <AniLink name="navbar-link-blog" cover bg={bgImage} to="/blog/">
                  Blog
                </AniLink>
              </li>
              {/* <li><Link to="/games/">Games</Link></li> */}
              <li>
                <AniLink
                  name="navbar-link-newsletters"
                  cover
                  bg={bgImage}
                  to="/newsletters/"
                >
                  Newsletters
                </AniLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
