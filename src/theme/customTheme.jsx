import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 320,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#269E3D',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    [theme.breakpoints.down('sm')]: {
                        color: 'red',
                    },
                    [theme.breakpoints.down('xs')]: {
                        color: 'blue',
                    }, 
                },
            },
        },
    },
})

export default customTheme;