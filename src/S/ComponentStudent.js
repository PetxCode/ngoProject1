import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, useEffect } from "react";
import { app } from "../base";

const student = app.firestore().collection("students");
const ComponentStudent = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [interest, setInterest] = useState("");
  const [profile, setProfile] = useState("");
  const [logic, setLogic] = useState(0);
  const [leadership, setLeadership] = useState(0);
  const [pychology, setPychology] = useState(0);
  const [show, setShow] = useState(false);

  const uploadAvatar = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setAvatar(await fileRef.getDownloadURL());
    console.log(avatar);
  };

  const onPreview = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setImgPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const pushToFirebase = async () => {
    await student.doc().set({
      name,
      email,
      address,
      profile,
      interest,
      logic,
      leadership,
      pychology,
      avatar,
      show,
      createdAt: new Date().toLocaleString(),
      time: new Date().toString(),
    });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <br />
      <br />
      <center>
        <div>Component Student</div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "320px",
              backgroundColor: "lightblue",
              borderRadius: "5px",
              margin: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <label>Choose Avatar</label>
              <Input
                type="file"
                onChange={(uploadAvatar, onPreview)}
                style={{
                  width: "200px",
                  backgroundColor: "transparent",
                  borderWidth: "0",
                }}
              />
              <br />
              {imgPreview ? (
                <img
                  src={imgPreview}
                  alt="img"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              ) : (
                <img
                  // src={}
                  // alt="img"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    backgroundColor: "red",
                    marginBottom: "20px",
                  }}
                />
              )}

              {imgPreview ? (
                <Button
                  type="primary"
                  danger
                  style={{
                    width: "200px",
                    marginTop: "5px",
                    marginBottom: "10px",
                  }}
                  onClick={() => {
                    setAvatar(null);
                    setImgPreview(null);
                  }}
                >
                  Remove
                </Button>
              ) : null}
            </div>
          </div>
          <div
            style={{
              width: "320px",
              backgroundColor: "lightblue",
              borderRadius: "5px",
              margin: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  // marginRight: "10px",
                  width: "70px",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Name:{" "}
              </label>
              <Input
                style={{
                  width: "230px",
                }}
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  // marginRight: "10px",
                  width: "70px",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Email:{" "}
              </label>
              <Input
                style={{
                  width: "230px",
                }}
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  // marginRight: "10px",
                  width: "70px",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Address:{" "}
              </label>
              <Input
                style={{
                  width: "230px",
                }}
                placeholder="Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  // marginRight: "10px",
                  width: "70px",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Interest:{" "}
              </label>
              <Input
                style={{
                  width: "230px",
                }}
                placeholder="AI/ML | Mobile Dev | Web Dev"
                value={interest}
                onChange={(e) => {
                  setInterest(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  // marginRight: "10px",
                  width: "70px",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Profile:{" "}
              </label>

              <TextArea
                style={{
                  width: "230px",
                }}
                placeholder="Profile"
                value={profile}
                onChange={(e) => {
                  setProfile(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <Button
          type="primary"
          // danger
          style={{
            width: "200px",
            marginTop: "5px",
            marginBottom: "10px",
          }}
          onClick={pushToFirebase}
        >
          Register
        </Button>
      </center>
    </div>
  );
};

export default ComponentStudent;
