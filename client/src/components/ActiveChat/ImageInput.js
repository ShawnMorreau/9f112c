import React from "react";

const CLOUD_NAME = "denqioufy";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
const UPLOAD_PRESET = "hlureods";
const ACCEPTED_FILETYPES = ["JPEG", "PNG", "GIF"];

export const hostImage = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", UPLOAD_PRESET);
  data.append("cloud_name", CLOUD_NAME);

  return await fetch(CLOUDINARY_URL, {
    method: "POST",
    body: data,
  });
};

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
