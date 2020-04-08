import React from 'react';

const Header = (props) => {
    return (
        <header id="header">
            <div className="container main-menu">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <a href={(props.isNotRootDirectory ? props.changeLinkDirectory : "") + "."} aria-label="Winter Hearth Home Page Icon">
                            <img 
                                style={{"maxHeight": "56px"}} 
                                src={(props.isNotRootDirectory ? props.changeLinkDirectory : "") + "img/logo-100p.jpg"} 
                                alt="" 
                                title="Winter Hearth Logo" 
                            />
                        </a>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><a href={props.isNotRootDirectory ? props.changeLinkDirectory : "."}>Home</a></li>
                            <li><a href={(props.isNotRootDirectory ? props.changeLinkDirectory : "") + "about"}>Our Story</a></li>
                            <li><a href={(props.isNotRootDirectory ? props.changeLinkDirectory : "") + "blog/"}>Blog</a></li>
                            <li><a href={(props.isNotRootDirectory ? props.changeLinkDirectory : "") + "newsletters/"}>Newsletters</a></li>
                            <li><a href={(props.isNotRootDirectory ? props.changeLinkDirectory : "") + "games/"}>Games</a></li >
                        </ul >
                    </nav>
                </div >
            </div >
		</header>
    );
};

export default Header;