import React from "react";
import Card from "../card/card";

const Mapping = ({
  arrayToRender,
  handleDataCard,
  handleDelete,
  state,
  priority,
}) => {
  // console.log(arrayToRender);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        // border: "1px solid black",
        borderRadius: "10px",
        padding: "2rem",
        width: "700px",
        // backgroundColor: "#EAE6F2",
      }}
    >
      <h1>{priority}</h1>
      {arrayToRender.map((item, index) => {
        return (
          <Card
            key={index}
            {...item}
            handleDataCard={handleDataCard}
            handleDelete={handleDelete}
            state={state}
          />
        );
      })}
    </div>
  );
};

export default Mapping;
