import React from 'react';

import GlobalStyles from '../GlobalStyles';
import { ThemeProvider } from './ThemeContext';

const App = ({ children }) => {
    console.log("from app js?")
    return (
        <ThemeProvider>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}

export default App;
