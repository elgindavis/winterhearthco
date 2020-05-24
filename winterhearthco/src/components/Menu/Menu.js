import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'gatsby';

import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {

    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <Link aria-hidden="true" to="/about">Our Story</Link>
            <Link aria-hidden="true" to="/podcast">Podcast</Link>
            <Link aria-hidden="true" to="/blog/">Blog</Link>
            <Link aria-hidden="true" to="/games/">Games</Link>
            <Link aria-hidden="true" to="/newsletters/">Newsletters</Link>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;