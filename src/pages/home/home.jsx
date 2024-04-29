import React, { useState } from "react";
import Mapping from "../../components/mappingComp/mapping";
import data from "../../components/card/data";

const Home = () => {
  const [stateOne, setStateOne] = useState(data);
  const [stateTwo, setStateTwo] = useState([]);
  const [stateThree, setStateThree] = useState([]);
  // const [arrayId] = data;
  const handleDataCard = (upLift) => {
    if (stateOne.some((item) => item.id === upLift.id)) {
      setStateOne(stateOne.filter((item) => item.id !== upLift.id));
      setStateTwo([...stateTwo, upLift]);
    } else if (stateTwo.some((item) => item.id === upLift.id)) {
      setStateTwo(stateTwo.filter((item) => item.id !== upLift.id));
      setStateThree([...stateThree, upLift]);
    }
    console.log(upLift);
  };

  const handleDelete = (upLift) => {
    if (stateThree.some((item) => item.id === upLift.id)) {
      setStateTwo([...stateTwo, upLift]);
      setStateThree(stateThree.filter((item) => item.id !== upLift.id));
    } else if (stateTwo.some((item) => item.id === upLift.id)) {
      setStateOne([...stateOne, upLift]);
      setStateTwo(stateTwo.filter((item) => item.id !== upLift.id));
    }
    // console.log(upLift);
  };
  return (
    <div
      style={{ display: "flex", justifyCotent: "space-around", gap: "2rem" }}
    >
      <Mapping
        arrayToRender={stateOne}
        handleDataCard={handleDataCard}
        state={stateOne}
        priority="Task Given"
      />
      <Mapping
        arrayToRender={stateTwo}
        handleDataCard={handleDataCard}
        handleDelete={handleDelete}
        priority="In Review"
      />
      ;
      <Mapping
        arrayToRender={stateThree}
        handleDelete={handleDelete}
        priority="Completed"
        handleDataCard={() => {
          return null;
        }}
      />
      ;
    </div>
  );
};

export default Home;
