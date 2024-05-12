import React from "react";

const TiltCard = ({ image,height,width }) => {
  const handleMove = (e) => {
    const el = document.getElementById("tilt");
    const height = el.clientHeight;
    const width = el.clientWidth;
    const xVal = e.nativeEvent.layerX;
    const yVal = e.nativeEvent.layerY;
    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);
    const string = `perspective(500px) scale(1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    el.style.transform = string;
  };

  const handleMouseOut = () => {
    const el = document.getElementById("tilt");
    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  };

  return (
    <div
      id="tilt"
      onMouseMove={handleMove}
      onMouseOut={handleMouseOut}
      style={{
        display: "block",
        height:height,
        width: width,
        backgroundColor: "grey",
        margin: "0 auto",
        transition: "box-shadow 0.1s, transform 0.1s",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        borderRadius: "12px",
      }}
    />
  );
};

export default TiltCard;
