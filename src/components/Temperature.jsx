import React, { useState } from "react";

const TemperatureCard = ({ initialTemperature = 0 }) => {
  const [temperature, setTemperature] = useState(initialTemperature);

  const onPlusClick = () => setTemperature((prev) => prev + 1);
  const onMinusClick = () => setTemperature((prev) => prev - 1);

  // const handleTemperatureColor = () => {
  //   if (temperature < 0) {
  //     return "blue";
  //   } else if (temperature >= 0 && temperature < 15) {
  //     return "green";
  //   } else if (temperature >= 15 && temperature < 30) {
  //     return "yellow";
  //   } else if (temperature >= 30) {
  //     return "red";
  //   }
  //   return "teal";
  // };
  const handleTemperatureColor = () => {
    let style = { backgroundColor: "teal" };
    if (temperature < 0) {
      style = { backgroundColor: "blue" };
    } else if (temperature >= 0 && temperature < 15) {
      style = { backgroundColor: "green" };
    } else if (temperature >= 15 && temperature < 30) {
      style = { backgroundColor: "yellow" };
    } else if (temperature >= 30) {
      style = { backgroundColor: "red" };
    }
    return style;
  };

  return (
    <div className="container">
      <div className="card">
        <div className="temperature" style={handleTemperatureColor()}>
          {temperature}°C
        </div>
        <div className="control-container">
          <button className="controller plus" onClick={onPlusClick}>
            +
          </button>
          <button className="controller minus" onClick={onMinusClick}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCard;
