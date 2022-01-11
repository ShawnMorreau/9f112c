import React, { useRef, useState } from "react";
import { FormControl, FilledInput, InputAdornment, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FileCopyOutlined } from "@material-ui/icons";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import ImageInput, { hostImage, verifyFile } from "./ImageInput";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15
  },
  input: {
    height: 70,
    backgroundColor: theme.palette.chatbox,
    borderRadius: 8,
    marginBottom: 20,
    "&:hover": {
      backgroundColor: theme.palette.chatbox
    }
  },
  icon: {
    opacity: "60%",
    "&:hover": {
      opacity: 1,
    }
  },
  iconHolder: {
    "&:hover": {
      backgroundColor: theme.palette.chatbox,
    }
  }
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

  const updateFiles = (newFiles) => {
    let urls = [];
    let fileNames = [];
    const files = newFiles.forEach(newFile => {
      fileNames.push(`${newFile.data.original_filename}.${newFile.data.format}`);
      urls.push(newFile.data.secure_url);
    })
    setFiles(urls, ...[files]);
    setFileNames(fileNames, ...[fileNames])
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
    let files = []
    e.preventDefault();
    for (const file of [...e.target.files]) {
      if (verifyFile(file)) {
        const res = await hostImage(file);
        files = [res, ...files];
      }
    }
    selectedFile.current.blur();
    updateFiles(files);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <input
        type="file"
        ref={selectedFile}
        style={{ display: "none" }}
        onChange={imageSelected}
        name="files[]"
        multiple="multiple"
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
                  className={classes.iconHolder}
                >
                  <FileCopyOutlined
                    className={classes.icon}
                  />
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
