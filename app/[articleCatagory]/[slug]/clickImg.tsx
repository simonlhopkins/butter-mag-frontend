"use client";
import React, { useState } from "react";

const ClickImg = () => {
  const [pos, setPos] = useState<{ x: number; y: number }>();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const x = event.clientX; // X-coordinate relative to the viewport
    const y = event.clientY; // Y-coordinate relative to the viewport
    setPos({ x, y });
    console.log(`Click position: (${x}, ${y})`);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        left: "0px",
        top: "0px",
        width: "100%",
        height: "100%",
        zIndex: "1",
        // backgroundColor: "red",
      }}
    >
      {pos && (
        <div
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            backgroundColor: "green",
          }}
        >
          <video
            autoPlay={true}
            width={"700px"}
            height={"auto"}
            src="/catalina fight song - tylenol addict.mp4"
          ></video>
        </div>
      )}
    </div>
  );
};

export default ClickImg;
