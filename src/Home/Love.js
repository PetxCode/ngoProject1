import React from "react";
import love from "../videos/love.svg";

const Love = ({ bg, text, img, bg1 }) => {
  return (
    <div
      style={{
        backgroundColor: bg1,
        width: "100%",
        margin: "0px 0",
      }}
    >
      <center>
        <br />
        <div
          style={{
            backgroundColor: bg,
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <img
            src={img}
            alt="love"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "35px",
            // marginBottom: "50px",
            padding: "10px 0",
          }}
        >
          {" "}
          {text}{" "}
        </div>
      </center>
    </div>
  );
};

export default Love;
