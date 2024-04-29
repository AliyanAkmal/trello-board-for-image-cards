import React from "react";
import "./style.css";
import Button from "../button";

const Card = ({
  image,
  titleOne,
  price,
  volume,
  handleDataCard,
  id,
  handleDelete,
  state,
}) => {
  const handleNext = () => {
    handleDataCard({
      id: id,
      image: image,
      titleOne: titleOne,
      price: price,
      volume: volume,
    });
  };
  const handlePrev = () => {
    handleDelete({
      id: id,
      image: image,
      titleOne: titleOne,
      price: price,
      volume: volume,
    });
  };
  // console.log(id);

  return (
    <div className="wholeCard">
      <div style={{ height: "200px", width: "100%" }}>
        <img className="image" src={image} alt="" />
      </div>

      <div className="mainContainer">
        <div className="title">
          <p style={{ fontSize: "16px", fontWeight: "600" }}>{titleOne}</p>
        </div>
        <div className="textContainer">
          <div>
            <p style={{ color: "grey" }}>Floor</p>
            <p style={{ fontWeight: "600" }}>{price}</p>
          </div>
          <div>
            <p style={{ color: "grey" }}>Total volume</p>
            <p style={{ fontWeight: "600" }}>{volume}</p>
          </div>
        </div>
        {state ? (
          <Button content="next" handleClick={handleNext} />
        ) : (
          <>
            <Button content="next" handleClick={handleNext} />
            <Button content="prev" handleClick={handlePrev} />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
