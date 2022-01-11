import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        boxSizing: "border-box"
    },
    avatar: {
        height: 30,
        width: 30,
        marginRight: 11,
        marginTop: 6
    },
    usernameDate: {
        fontSize: 11,
        color: "#BECCE2",
        fontWeight: "bold",
        marginBottom: 5
    },
    bubble: {
        background: props => props.type === "Sender" ? theme.palette.chatBubbles.sentBG : theme.palette.chatBubbles.recievedBG,
        width: "fit-content",
        borderRadius: "0 10px 10px 10px",
        marginBottom: `${theme.spacing(5)}px`
    },
    text: {
        ...theme.typography.chatBubble,
        color: props => props.type === "Sender" ? theme.palette.chatBubbles.sent : theme.palette.chatBubbles.recieved
    },
    image: (props) => props.numAttachments > 1 ? theme.images.smallerImage : theme.images.largerImage,
    imageSpacing: {
        marginLeft: props => props.numAttachments > 1 ? theme.spacing(5) : theme.spacing(0)
    }
}));
const Message = (props) => {
    const { attachments, text } = props
    const numAttachments = attachments.length
    const classes = useStyles({ numAttachments, ...props });
    const sentImages = createImagesFromAttachmentProps(attachments || [], classes);

    return (
        <>
            {numAttachments > 1 ? (
                <>
                    {text !== "" && (
                        <Box className={classes.bubble}>
                            <Typography className={classes.text}>{text}</Typography>
                        </Box>
                    )}
                    <Box className={classes.imageContainer}>
                        {sentImages}
                    </Box>
                </>
            ) : (
                <>
                    <Box className={classes.imageContainer}>
                        {sentImages}
                    </Box>
                    {text !== "" && (
                        <Box className={classes.bubble}>
                            <Typography className={classes.text}>{text}</Typography>
                        </Box>
                    )}

                </>
            )}
        </>
    )
}
const createImagesFromAttachmentProps = (links, classes) => {
    if (links.length === 0) {
        return [];
    }
    return links.map((link, i) => (
        <img className={`${classes.image} ${classes.imageSpacing}`} src={link} key={i} alt="" />
    ));
};

export default Message;