import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import Message from "./Message";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
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
  }
}));

const OtherUserBubble = (props) => {
  const classes = useStyles();
  const { text, time, otherUser, attachments } = props;
  return (
    <Box className={classes.root}>
      <Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar}></Avatar>
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <Message
          attachments={attachments}
          text={text}
          type={"Reciever"}
        />
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
