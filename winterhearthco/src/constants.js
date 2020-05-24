export const COLORS = {
    light: {
        text: 'hsl(0deg, 0%, 10%)', // black
        background: 'hsl(0deg, 0%, 100%)', // white
        primary: 'hsl(340deg, 100%, 40%)', // Pinkish-red
        secondary: 'hsl(250deg, 100%, 50%)', // Purplish-blue
        gray300: 'hsl(0deg, 0%, 70%)',
        gray500: 'hsl(0deg, 0%, 50%)',
        gray700: 'hsl(0deg, 0%, 30%)',
        white: 'hsl(0deg, 0%, 100%)', // white
        link: 'hsla(0, 50 %, 42 %, 1)',
    },
    dark: {
        text: 'hsl(0deg, 0%, 100%)', // near-white
        background: 'hsl(250deg, 70%, 7%)', // navy navy blue
        primary: 'hsl(50deg, 100%, 50%)', // Yellow
        secondary: 'hsl(190deg, 100%, 40%)', // Cyan
        gray300: 'hsl(0deg, 0%, 30%)',
        gray500: 'hsl(0deg, 0%, 50%)',
        gray700: 'hsl(0deg, 0%, 70%)',
        white: 'hsl(0deg, 0%, 100%)', // white
        link: 'hsla(0, 50 %, 42 %, 1)',
    },
    // elgin: {
    //     text
    //     background
    //     primary
    //     secondary
    //     gray300
    //     gray500
    //     gray700
    // },
    // sicko: {
    //     text
    //     background
    //     primary
    //     secondary
    //     gray300
    //     gray500
    //     gray700
    // },
}

// export const COLORS = {
//     text: {
//         light: 'hsl(0deg, 0%, 10%)', // white
//         dark: 'hsl(0deg, 0%, 100%)', // near-black
//     },
//     background: {
//         light: 'hsl(0deg, 0%, 100%)', // white
//         dark: 'hsl(250deg, 70%, 7%)', // navy navy blue
//     },
//     primary: {
//         light: 'hsl(340deg, 100%, 40%)', // Pinkish-red
//         dark: 'hsl(50deg, 100%, 50%)', // Yellow
//     },
//     secondary: {
//         light: 'hsl(250deg, 100%, 50%)', // Purplish-blue
//         dark: 'hsl(190deg, 100%, 40%)', // Cyan
//     },
//     // Grays, scaling from least-noticeable to most-noticeable
//     gray300: {
//         light: 'hsl(0deg, 0%, 70%)',
//         dark: 'hsl(0deg, 0%, 30%)',
//     },
//     gray500: {
//         light: 'hsl(0deg, 0%, 50%)',
//         dark: 'hsl(0deg, 0%, 50%)',
//     },
//     gray700: {
//         light: 'hsl(0deg, 0%, 30%)',
//         dark: 'hsl(0deg, 0%, 70%)',
//     },
// };

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

// {
//     text: {
//         light,
//         dark,
//     },
//     background: {
//         light,
//         dark,
//     }
// }
// colors.text[mode]
// or

// colors[mode].text

// {
//     light: {},
//     dark: {},
//     elgin: {},
//     sicko: {}
// }