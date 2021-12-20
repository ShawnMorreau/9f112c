import { makeStyles } from "@material-ui/core";
import BgImg from "../assets/bg-img.png";

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.primary.main,
        fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
        '&::before': {
            content: '""',
            backgroundColor: theme.palette.primary.main,
            opacity: 0.7,
            position: "absolute",
            zIndex: 1,
            height: '100%',
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            backgroundSize: '40% 100%',
            backgroundPosition: 'left',
        },
    },
    sidebar: {
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        top: '30vh',
        [theme.breakpoints.up('sm')]: {
            position: 'relative',
            width: '40vw'
        },
    },
    icon: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -100%)',
        [theme.breakpoints.up('sm')]: {
            transform: 'translate(-50%, 0)',
        },
    },
    slogan: {
        fontSize: '1.5rem',
        zIndex: 1,
        color: theme.palette.whiteFont,
        position: 'absolute',
        padding: 0,
        margin: 0,
        width: '100%',
        transform: 'translateY(60px)',
        [theme.breakpoints.up('sm')]: {
        transform: 'translateY(130px)',
        },
    },
    mainComponent: {
        position: 'absolute',
        zIndex: 1,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        backgroundColor: theme.palette.formBackground.main,
        bottom: 0,
        width: '100vw',
        minHeight: '100vh',
        [theme.breakpoints.up('sm')]: {
            position: 'relative',
            height: '100vh',
            width: '60vw',
            marginLeft: 'auto',
            padding: 0,
        },
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '60px',
        alignItems: 'center',
        backgroundColor: theme.palette.formBackground.main,
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
            marginTop: theme.spacing(5),
        },
    },
    switchPageMessage: {
        fontSize: theme.typography.fontSizes.small,
        color: theme.palette.secondary.main,
        padding: theme.spacing(0),
        margin: theme.spacing(0),
    },
    switchPageButton: {
        color: theme.palette.primary.main,
        boxShadow: `0 3px 2px rgba(${theme.palette.secondary.hex},${theme.palette.secondary.hex},${theme.palette.secondary.hex}, 0.5)`,
        textTransform: theme.typography.button.textTransform,
        letterSpacing: theme.typography.button.letterSpacing,
        fontWeight: theme.typography.button.fontWeight,
        fontSize: theme.typography.fontSizes.small,
        padding: `${theme.spacing(10)}px ${theme.spacing(40)}px`,
        '&:hover': {
            backgroundColor: '#fff',
        },
        [theme.breakpoints.up('sm')]: {
            margin: `0 ${theme.spacing(30)}px`
        },
        
    },
    form: {
        position: 'relative',
        zIndex: 1,
        backgroundColor: theme.palette.formBackground.main,
        width: '100%',
        marginTop: theme.spacing(100),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(100)
        },
    },
    formContainer: {
        width: '75%',
        textAlign: 'center',
        margin: '0 auto',
    },
    formMessage: {
        fontWeight: 900,
        fontSize: theme.typography.fontSizes.large,
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
        },
    },
    MuiFormControl: {
        backgroundColor: 'red',
    },
    submitButton: {
        margin: `${theme.spacing(10)}px 0`,
        color: theme.palette.whiteFont,
        backgroundColor: theme.palette.primary.main,
        boxShadow: `0 3px 2px rgba(${theme.palette.secondary.hex},${theme.palette.secondary.hex},${theme.palette.secondary.hex}, 0.5)`,
        textTransform: theme.typography.button.textTransform,
        letterSpacing: theme.typography.button.letterSpacing,
        fontWeight: theme.typography.button.fontWeight,
        fontSize: theme.typography.fontSizes.small,
        padding: `${theme.spacing(10)}px ${theme.spacing(40)}px`,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        [theme.breakpoints.up('sm')]: {
            margin: `${theme.spacing(25)}px 0`
        },
    },
}));