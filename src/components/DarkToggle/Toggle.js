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
                    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
                }}
            >
                {`${colorMode === 'dark' ? 'Light' : 'Dark' } Mode`}
            </StyledToggle>
        }
        </>
    )
}

export default ToggleColorScheme;
