import { extendTheme } from '@chakra-ui/react';

const colors = {
            orange: {
                        50: '#DC8063',
                        100: '#DC8062',
                        200: '#DC7F61',
                        300: '#DB7D5F',
                        400: '#DA7A5B',
                        500: '#D87353',
                        600: '#D67252',
                        700: '#D37151',
                        800: '#CE6E4F',
                        900: '#C4694B',
            },
            white: {
                        50: '#F2FDFF',
                        100: '#F2FDFF',
                        200: '#F2FDFF',
                        300: '#F1FDFF',
                        400: '#F1FDFF',
                        500: '#EDF8FA',
                        600: '#E8F4F6',
                        700: '#E4EFF1',
                        800: '#DFEBED',
                        900: '#DFDFDF',
            },
            black: {
                        50: '#908987',
                        100: '#343130',
                        200: '#312E2D',
                        300: '#2F2C2B',
                        400: '#2C2928',
                        500: '#2B2827',
                        600: '#2A2726',
                        700: '#2A2726',
                        800: '#292625',
                        900: '#282524',
            },
            blue: {
                        50: '#5FC0D5',
                        100: '#5BBFD4',
                        200: '#57BDD3',
                        300: '#53BCD2',
                        400: '#4FBAD1',
                        500: '#4EB7CD',
                        600: '#4CB3C9',
                        700: '#4BB0C6',
                        800: '#49ACC2',
                        900: '#48A9BE',
            },
}

const fonts = {
            heading: `'Poppins', sans-serif`,
            body: `'Poppins', sans-serif`,
}

export const theme = extendTheme({ colors, fonts })