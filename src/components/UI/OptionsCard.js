import soundIcon from "../../assets/images/icons/sound-icon.png";
import "../UI/OptionsCard.css";

const OptionsCard = (props) => {

  //Vocabulário
  //quizType 1: Desafio imagens áudios e texto.
  //quizType 2: Desafio áudio e texto
  //quizType 3: Desafio imagens e texto  

  const PlaySound = () => {
    const audio = new Audio(props.audio);
    audio.play();
  };  

  var classNameButton = "button";
  var classNameButtonContainer = "button-container";
  var classNameTextContainer = "text-container";
  var classNameText = "text";

  if (props.onIsPhrase){
    classNameButton = classNameButton + "-phrase";
    classNameButtonContainer = classNameButtonContainer + "-phrase";
    classNameTextContainer = classNameTextContainer  + "-phrase";
    classNameText = classNameText  + "-phrase";
  }

  return (
    <div className={"options"}>
      <div className={classNameTextContainer}>
        <label className={classNameText}>{props.optionPt}</label>
        <div>
          {props.onHasAudio &&
          <img
            src={soundIcon}
            alt="audio icon"
            className="sound-icon"
            onClick={PlaySound}
          /> 
          }          
        </div>
      </div>
      <div className={classNameButtonContainer}>
        <div>
          <button
            className={classNameButton}
            id={props.option1}
            onClick={props.onButtonClicked}
          >
            {props.option1}
          </button>
        </div>
        <div>
          <button
            className={classNameButton}
            id={props.option2}
            onClick={props.onButtonClicked}
          >
            {props.option2}
          </button>
        </div>
      </div>
      <div>
        {!props.onIsCorrect && (
          <label className="message-label">
            Opção incorreta! Tente novamente!
          </label>
        )}
      </div>
    </div>
  );
};

export default OptionsCard;
