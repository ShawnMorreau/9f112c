import { createTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
    },
    fontSizes: {
      small: '0.8rem',
      standard: 14,
      large: '1.3rem',
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      }
    },
    MuiFormControl: {
      root: {
        padding: 0,
        margin: 0,
        [breakpoints.up('md')]: {
          marginTop: 8,
        }
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0", hex: 176 },
    formBackground: { main: '#FFFFFF' },
    whiteFont: '#FFF'
  },
  spacing: 1
});
