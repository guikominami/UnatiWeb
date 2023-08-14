import { useNavigate } from "react-router-dom";

import classes from './Menu.module.css';

import Title from "../components/UI/Title";

import { PHRASE_DATA_UNATI } from "../data/DataPhrase";

const MenuPhrase = (props) => {

  const navigate = useNavigate();

  const navigateMainMenu = () => {
    navigate('/unati');
  }

  const navigateQuiz1 = (event) => {
    navigate('/quiz', {
      state: {
        quizTypeMode: event.target.name,
        quizTitle: "Desafio 1: Que frase é essa?",
        hasImage: false,
        hasAudio: true,
        isPhrase: true,
        data: PHRASE_DATA_UNATI.filter(dataItem => {
          return dataItem.desafio1 === 1;
        }),
        pathBack: "/menuPhrases"
      }
    });
  }
  
  const navigateQuiz2 = (event) => {
    navigate('/quiz', {
      state: {
        quizTypeMode: event.target.name,
        quizTitle: "Desafio 2: Que frase é essa?",
        hasImage: false,
        hasAudio: false,
        isPhrase: true,
        data: PHRASE_DATA_UNATI.filter(dataItem => {
          return dataItem.desafio2 === 1;
        }),
        pathBack: "/menuPhrases"        
      }
    });
  }    

  return (
    <div className={classes.mainContainer}>
      <Title>FRASES</Title>
      <div className={classes.container}>
        <div>
          <button
            className={classes.button}
            name="frase_completo"
            onClick={navigateQuiz1}
          >
            DESAFIO TEXTO E ÁUDIO
          </button>
          <button
            className={classes.button}
            onClick={navigateMainMenu}
          >
            VOLTAR AO MENU ANTERIOR
          </button>                     
        </div>
        <div>
          <button
            className={classes.button}
            name="frase_texto"
            onClick={navigateQuiz2}
          >
            DESAFIO TEXTO
          </button>
          <div className={classes.space}>
          </div>           
        </div>
      </div>
    </div>
  );
};

export default MenuPhrase;
