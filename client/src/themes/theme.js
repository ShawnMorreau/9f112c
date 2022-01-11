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
    chatBubble: {
      fontSize: 14,
      letterSpacing: -0.2,
      padding: 8,
      fontWeight: "bold",
    }
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
    whiteFont: '#FFF',
    chatBubbles: {
      sent: "#91A3C0",
      sentBG: "#F4F6FA",
      recieved: '#FFF',
      recievedBG: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    },
    chatbox: "#F4F6FA",
  },
  images:{
      largerImage: {
        maxWidth: 135,
        width: 135,
        maxHeight: 100,
        height: 100,
      },
      smallerImage: {
        maxWidth: 100,
        width: 100,
        maxHeight: 88,
        height: 88,
      },
  },
  spacing: 1
});
