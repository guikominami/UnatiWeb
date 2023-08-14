import React, { useState } from "react";

import "../UI/Options.css";
import Title from "./Title";

import OptionsCard from "./OptionsCard";

const Options = (props) => {

  const[isCorrect, setIsCorrect] = useState(true);

  //Vocabulário
  //quizType 1: Desafio imagens áudios e texto.
  //quizType 2: Desafio áudio e texto
  //quizType 3: Desafio imagens e texto  

  const ButtonClickedHandler = (event) => {
    //console.log(props.items.optionCorrect);
    if (event.target.id === props.items.optionCorrect) {
      props.onCorrectAnswer();
      setIsCorrect(true);
    }else{
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <Title>{props.quizTitle}</Title>
      {props.hasImage &&
        <div className="image-container">
          <img src={props.items.image} alt="abacaxi" className="image" />
        </div>
      }
      {!props.hasImage &&
        <div className="phrase-space-top">
        </div>
      }         
      <OptionsCard 
        option1={props.option1random}
        option2={props.option2random}
        optionPt={props.items.optionPt}
        audio={props.items.audio}
        onButtonClicked={ButtonClickedHandler}
        onIsCorrect={isCorrect}
        onHasAudio={props.hasAudio}
        onIsPhrase={props.isPhrase}
      />
      {props.isPhrase &&       
        <div className="phrase-space-bottom">
        </div>
      }      
    </div>
  );
};

export default Options;
