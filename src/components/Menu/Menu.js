import React from 'react';
import { bool } from 'prop-types';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {

    const isHidden = open ? true : false;
    // const tabIndex = isHidden ? 0 : -1;

    return (
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <AniLink aria-hidden="true" paintDrip hex="#f0f8ff" to="/">
          Home
        </AniLink>
        <AniLink aria-hidden="true" paintDrip hex="#f0f8ff" to="/about">
          Our Story
        </AniLink>
        <AniLink aria-hidden="true" paintDrip hex="#f0f8ff" to="/podcast">
          Podcast
        </AniLink>
        <AniLink aria-hidden="true" paintDrip hex="#f0f8ff" to="/blog/">
          Blog
        </AniLink>
        {/* <AniLink aria-hidden="true" to="/games/">Games</AniLink> */}
        <AniLink aria-hidden="true" paintDrip hex="#f0f8ff" to="/newsletters/">
          Newsletters
        </AniLink>
      </StyledMenu>
    );
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;