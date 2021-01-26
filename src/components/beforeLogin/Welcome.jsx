import React from "react";
import cars from "../cars.jpg";

const style = {
  padding: "10px",
  overflow: "hidden",
  height: "100vh",
  fontFamily: "Serif",
  color: "black",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url(${cars})`,
  backgroundColor: "white",
  backgroundAttachment: "fixed"
};

function Welcome() {
  return (
    <div className="container-fluid" style={style}>
      <div className="row justify-content-center">
        <h1>Welcome to Incentive System for Car Dealers </h1>
      </div>
    </div>
  );
}

export default Welcome;
