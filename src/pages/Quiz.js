import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Options from "../components/UI/Options";
import BackButton from "../components/UI/BackButton";

const Quiz = () => {
  //USAR USESTATE COM O ID TAMBEM
  const [selectedWordItems, setSelectedWordItems] = useState(0);

  const location = useLocation();

  var dataItems;
  var quizTitle = location.state.quizTitle.trim();
  var hasAudio = location.state.hasAudio;
  var isPhrase = location.state.isPhrase;
  var hasImage = location.state.hasImage;
  var data = location.state.data;
  var pathBack = location.state.pathBack;

  dataItems = data[selectedWordItems];

  console.log(dataItems);

  const generateWordId = () => {
    //Atingiu a quantidade máxima da matriz.
    if (selectedWordItems === data.length - 1) {
      console.log("atingiu o fim da matriz");

      //setSelectedWordItems(props.data[0]);
      setSelectedWordItems(0);
    } else {
      setSelectedWordItems(selectedWordItems + 1);
    }
  };

  if (dataItems.option1 !== undefined) {
    var rndNum = Math.floor(Math.random() * (3 - 1) + 1);

    var optionWord1 = dataItems.option1;
    var optionWord2 = dataItems.option2;

    if (rndNum === 2) {
      optionWord1 = dataItems.option2;
      optionWord2 = dataItems.option1;
    }
  }

  return (
    <div>
      <BackButton path={pathBack}/>
      <Options
        items={dataItems}
        option1random={optionWord1}
        option2random={optionWord2}
        onCorrectAnswer={generateWordId}
        quizTitle={quizTitle}
        hasImage={hasImage}
        hasAudio={hasAudio}
        isPhrase={isPhrase}
      />
    </div>
  );
};

export default Quiz;
