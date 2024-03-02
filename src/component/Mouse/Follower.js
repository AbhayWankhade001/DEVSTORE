import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Follower() {
  return (
    <Box />
  );
}

const css = {
  box: {
    position: "fixed", // Adjusted to fixed position
    top: 0, // Covering the entire viewport
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none", // Prevents the box from intercepting mouse events
  },
  fly: {
    position: "absolute",
    width: "20px",
    height: "20px",
    margin: "-10px",
    backgroundColor: "red",
    borderRadius: 10,
  },
};

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

const Box = () => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };
  return (
    <motion.div
      ref={boxRef}
      style={{ ...css.box, perspective: 600 }}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <motion.div
        style={{ ...css.fly, backgroundColor: "gold", top: mousePosition.y, left: mousePosition.x }} // Adjusted position based on mouse coordinates
        transition={{ type: "spring" }}
      />
    </motion.div>
  );
};
