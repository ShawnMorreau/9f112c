import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
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
  image: {
    marginLeft: 5
  }
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  const sentImages = createImagesFromAttachmentProps(attachments || [], classes);
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.imageContainer}>
        {!!sentImages.length ? sentImages : ""}
      </Box>
      <Box className={classes.bubble}>
        {text !== "" && <Typography className={classes.text}>{text}</Typography>}
      </Box>
    </Box>
  );
};

export default SenderBubble;

const createImagesFromAttachmentProps = (links, classes) => {
  if (links.length === 0) {
    return [];
  }
  return links.map((link, i) => (
    <img className={`${(links.length > 1 ? classes.smallerImage : classes.largerImage)} ${classes.image}`} src={link} key={i} alt="" />
  ));
};
