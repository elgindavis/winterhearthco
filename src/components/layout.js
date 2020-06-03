import PropTypes from "prop-types"
import React, { useState, useEffect } from "react";

import { GlobalStyles } from '../GlobalStyles';
import { ThemeProvider } from './ThemeContext';
import { SEO, Header, DarkToggle, Footer } from './';

import "../styles/main.css"
import "../styles/linearicons.css"
import "../styles/bootstrap.min.css"

const Layout = ((props) => {
  const [isLoaded, setisLoaded] = useState(false);
    useEffect(() => {
      setisLoaded(true);
    }, []);

  return (
    <>
    <ThemeProvider>
      <GlobalStyles />
      {isLoaded && 
        <>
          <Header />
          <DarkToggle/>
          {props.children}
          <Footer/>
        </>
      }
    </ThemeProvider>
    </>
  );
});

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  author: `Winter Hearth Studios`,
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Layout;