import React, { useRef, useState } from "react";
import { FormControl, FilledInput, InputAdornment, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AttachFileSharp } from "@material-ui/icons";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import ImageInput, { hostImage, verifyFile } from "./ImageInput";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
    "&:hover": {
      backgroundColor: "#F4F6FA"
    }
  },
}));

const Input = (props) => {
  const classes = useStyles();
  const selectedFile = useRef(null);
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const updateFiles = (newFile) => {
    const fileName = `${newFile.original_filename}.${newFile.format}`;
    const newFiles = [...files, newFile.secure_url];
    setFileNames([...fileNames, fileName]);
    setFiles(newFiles);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: files
    };
    await postMessage(reqBody);
    setText("");
    setFiles([]);
    setFileNames([]);
  };
  const imageSelected = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (verifyFile(file)) {
      const data = await hostImage(file);
      const res = await data.json();
      updateFiles(res);
    }
    selectedFile.current.blur();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <input
        type="file"
        ref={selectedFile}
        style={{ display: "none" }}
        onChange={imageSelected}
      />
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <>
              <InputAdornment position="end">
                <IconButton
                  aria-label="attach image"
                  onClick={() => selectedFile.current.click()}
                  edge="end"
                >
                  <AttachFileSharp />
                </IconButton>
              </InputAdornment>
            </>
          }
        />
      </FormControl>
      <ImageInput
        files={fileNames}
        updateFiles={updateFiles}
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
