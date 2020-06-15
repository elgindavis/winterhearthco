import PropTypes from "prop-types"
import React, { useState, useEffect } from "react";

import { GlobalStyles } from '../GlobalStyles';
import { ThemeProvider } from './ThemeContext';
import { Header, DarkToggle, Footer } from './';

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

export default Layout;