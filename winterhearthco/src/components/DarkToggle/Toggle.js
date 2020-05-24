import React from 'react'
import { StyledToggle } from './Toggle.styled';
import { ThemeContext } from '../ThemeContext';

const ToggleColorScheme = () => {
    const { colorMode, setColorMode } = React.useContext(ThemeContext);
    
    return (
        <>
        {typeof colorMode !== 'undefined' && 
            <StyledToggle
                onClick={() => {
                    setColorMode(colorMode === 'light' ? 'dark' : 'light');
                }}
            >
                {`${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
            </StyledToggle>
        }
        </>
    )
}

export default ToggleColorScheme;
