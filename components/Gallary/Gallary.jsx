import axios from "axios";
import { useState, useRef, useMemo } from "react";

const Gallery = ({
  notEditable,
  multiple = true,
  width = 140,
  height = 90,
  aspectRatio,
  rounded = false,
  accept = "",
  resolution,
  format,
  errorFormatText,
}) => {
  const inputRef = useRef(null);
  const [gallery, setGallery] = useState(null);

  const addNewImage = (image) => {
    setGallery(image);
  };

  const inputChangeHandler = (files) => {
    const formData = new FormData();
    formData.append("file", files.target.files[0]);
    inputRef.current.value = "";
    axios
      .post("https://shipper.api.rasta.app/v1/upload", formData, {
        headers: {
          "Content-Type": "mulpipart/form-data",
        },
      })
      .then((res) => {
        addNewImage(res.data.filename);
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="Gallery">
      <div
        onClick={() => handleClick()}
        className="block"
        style={
          aspectRatio
            ? { width, aspectRatio, borderRadius: rounded ? "50%" : 8 }
            : { width, height, borderRadius: rounded ? "50%" : 8 }
        }
      >
        <img
          src={
            gallery
              ? `${`https://cdn.rasta.app/rasta/${gallery}`}`
              : "/images/user.png"
          }
          alt=""
        />
      </div>

      <div style={{ display: "none" }}>
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={inputChangeHandler}
          accept={accept}
        />
      </div>
    </div>
  );
};

export default Gallery;
