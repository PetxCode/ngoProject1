import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { app } from "../base";
import LogicButton from "./LogicButton";

const student = app.firestore().collection("students");
export const ViewStudents = () => {
  const [students, setStudents] = useState([]);

  const viewStudent = async () => {
    await student.onSnapshot((snapshot) => {
      const item = [];
      snapshot.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setStudents(item);
    });
  };

  useEffect(() => {
    viewStudent();
  }, []);
  return (
    <div>
      <center>
        <div>Student</div>
        {students.map(({ name, id, logic, show }) => (
          <div key={id}>
            <div>
              {" "}
              {name}
              <div>Logic Score: {logic} </div>
            </div>

            <div>
              {" "}
              <label>Logic Score</label>
              <LogicButton logic={logic} show={show} id={id} />
            </div>
          </div>
        ))}
      </center>
    </div>
  );
};
