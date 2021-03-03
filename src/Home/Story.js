import React from "react";
import alfred from "../videos/alfred.png";
import fatima from "../videos/fatma.png";

const Story = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#F4F6FC",
        paddingTop: "30px",
        // backgroundColor: "red",
        marginTop: "-15px",
      }}
    >
      <div
        style={{
          width: "300px",
          // backgroundColor: "red",
          marginTop: "20px",
          display: "flex",
        }}
      >
        <div>
          <img
            src={fatima}
            alt="fatima"
            style={{
              width: "300px",
              height: "350px",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "60px",
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            fontSize: "12px",
            right: "70px",
            textAlign: "left",
          }}
        >
          <h3>SOFTWARE DEVELOPER</h3>
          <div>Fatma</div>
          <p>5 years of experience Kenya</p>
        </div>
      </div>

      <div
        style={{
          width: "300px",
          // backgroundColor: "blue",
          marginTop: "20px",
          display: "flex",
        }}
      >
        <div>
          <img
            src={alfred}
            alt="fatima"
            style={{
              width: "280px",
              height: "350px",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "60px",
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            fontSize: "12px",
            right: "40px",
            textAlign: "left",
          }}
        >
          <h3>FRONT-END ENGINEER</h3>
          <div>Alfred</div>
          <p>4 years of experience Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
