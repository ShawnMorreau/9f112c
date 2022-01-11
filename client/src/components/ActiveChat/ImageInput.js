import axios from "axios";
import React from "react";
const ACCEPTED_FILETYPES = ["JPEG", "PNG", "GIF","JPG"];

export const hostImage = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
  const axiosSetup = {
    method: 'post',
    url: process.env.REACT_APP_CLOUDINARY_URL,
    data: data,
    transformRequest: [(data, headers) => {
      delete headers["x-access-token"]
      return data;
    }],
  }
  return await axios(axiosSetup);
}
export const verifyFile = (file) => {
  if (file === undefined) {
    return false;
  }
  const fileNameArr = file.name.split(".");
  return ACCEPTED_FILETYPES.includes(fileNameArr.slice(-1)[0].toUpperCase());
};

const ImageInput = (props) => {
  const { files } = props;
  return (
    <>
      {!!files.length && (
        <ul>
          {files.map((file, i) => (
            <li key={i}>{file}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ImageInput;
