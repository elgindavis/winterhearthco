import { Link } from 'gatsby';
import React, { useState, useRef } from 'react'

import { Burger, Menu } from '../';
import { ThemeContext } from '../ThemeContext';
import { useOnClickOutside } from '../../hooks';

import "../../styles/main.css"
import "../../styles/bootstrap.min.css"

const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "menu-panel";
    const { colorMode } = React.useContext(ThemeContext);
    
    useOnClickOutside(node, () => setOpen(false));

   return ( 
        <header id="header">
            <div className="row align-items-center justify-content-between d-flex">
                <div id="logo">
                    <Link to="/" aria-label="Winter Hearth Home Page Icon">
                       {colorMode &&
                            <img
                                style={{ "maxHeight": "56px" }}
                                src={colorMode === "light" ? "/img/logo-classic-100p.png" : "/img/logo-light-100p.png"}
                                alt="Winter Hearth Logo"
                                title="Winter Hearth Logo"
                            />
                        }
                    </Link>
                </div>
                <nav>
                    <div id="menu-panel" ref={node}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                        <Menu open={open} setOpen={setOpen} id={menuId} />
                    </div>
                    <div id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">Our Story</Link></li>
                            {/* <li><Link to="/podcast">Podcast</Link></li> */}
                            <li><Link to="/blog/">Blog</Link></li>
                            {/* <li><Link to="/games/">Games</Link></li> */}
                            <li><Link to="/newsletters/">Newsletters</Link></li>
                        </ul >
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
