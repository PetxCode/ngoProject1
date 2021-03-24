// import { Button } from "@material-ui/core";
import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const HeaderView = () => {
  return (
    <div>
      <Header
        style={{
          display: "flex",
          color: "white",
          textTransform: "uppercase",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              color: "white",
            }}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "white",
            }}
          >
            View Entry
          </Link>
        </div>
        <div>
          <Button type="primary">
            <Link to="/studentReg">Student Register</Link>
          </Button>
        </div>
      </Header>
    </div>
  );
};

export default HeaderView;

// <div>
//           <Button type="primary" danger>
//             <Link to="/reg">Admin Register</Link>
//           </Button>
//         </div>
