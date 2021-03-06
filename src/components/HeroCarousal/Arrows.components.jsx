import React from "react";

export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "black",
          borderRadius: "100%",
        }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "black",
          borderRadius: "100%",
        }}
        onClick={props.onClick}
      />
    </>
  );
};
