import BgImg from "../assets/bg-img.png";
import { makeStyles } from "@material-ui/core";

const mobilePadding = '10px';
// const primary='#3A8DFF';
// const secondary='#B0B0B0';
/*
    I was having a strange bug with the 'sm' breakpoint not 
    adjusting properly between 600-625px, so I just raised the breakpoint
    up to 625.
*/
const smallBreakpoint='625';
export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 0,
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: 'top',
        backgroundSize: '100% 70%',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        '&::before': {
            content: '""',
            backgroundColor: '#599AF7',
            opacity: 0.75,
            position: "absolute",
            zIndex: 1,
            height: '100%',
            width: '100%',
        },
        [theme.breakpoints.up(smallBreakpoint)]:{
            backgroundSize: '40% 100%',
            backgroundPosition:'left',
            position: 'relative',
        },
    },
    mainText: {
        display: 'block',
        width: 'fit-content',
        height: 60,
        fontSize: '1.5rem',
        color: '#fff',
        position: 'relative',
        zIndex: 5,
        marginTop: 150,
        [theme.breakpoints.up(smallBreakpoint)]:{
            display: 'flex',
            height: '100vh',
            maxWidth: '250px',
            width: '250px',
            alignItems: 'center',
            margin: '0 auto',
        }
    },
    formContainer: {
        zIndex: 5,
        backgroundColor: 'rgb(255,255,255)',
        marginTop: 'auto',
        paddingBottom: mobilePadding,
        textAlign: 'center',
        width: '100vw',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.up(smallBreakpoint)]:{
            width: '60vw',
            marginTop: 0,
        },
        
    },
    switchPageContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: mobilePadding,
        height: 'fit-content',
        [theme.breakpoints.up(smallBreakpoint)]:{
            marginTop: 30,
        }
    },
    switchPageCTA: {
        fontSize: '0.9rem',
        color: "#C5C",
    },
    switchPageButton: {
        color: '#0000ff',
        fontSize: '0.9rem'
    },
    genericText: {
        fontSize: '1.5rem',
        marginTop: 2,
        padding:0,
        [theme.breakpoints.up(smallBreakpoint)]:{
            fontSize: '2rem',
        }
    },
    inputsForm:{
        width: '80%',
        height: '100%',
        [theme.breakpoints.up(smallBreakpoint)]:{
            marginTop: '15%'
        },
    },
    login:{
        width: '80%',
        height: '100%',
        marginTop: '10%',
        [theme.breakpoints.up(smallBreakpoint)]:{
            marginTop: '22%'
        },

    },
    inputContainer:{
        [theme.breakpoints.up(smallBreakpoint)]:{
            padding: '5px 0',
        }
    },
    submitButton: {
      color: "#FFF",
      margin: `${mobilePadding} 0`,
    },
}));