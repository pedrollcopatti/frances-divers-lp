import { extendTheme } from '@chakra-ui/react';

const colors = {
            orange: {
                        50: '#F48A27',
                        100: '#F48722',
                        200: '#F4841C',
                        300: '#F38117',
                        400: '#f37e11',
                        500: '#EF7C11',
                        600: '#EA7A10',
                        700: '#E67710',
                        800: '#E1750F',
                        900: '#DD730F',
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
                        50: '#3183BB',
                        100: '#2C80B9',
                        200: '#277DB8',
                        300: '#217AB6',
                        400: '#1C77B4',
                        500: '#1B75B1',
                        600: '#1B73AE',
                        700: '#1A70AA',
                        800: '#1A6EA7',
                        900: '#196CA4',
            },
}

const fonts = {
            heading: `'Poppins', sans-serif`,
            body: `'Poppins', sans-serif`,
}

export const theme = extendTheme({ colors, fonts })