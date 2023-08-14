import { useNavigate } from "react-router-dom";

import Title from "../components/UI/Title";
import classes from "./Menu.module.css";

import { VOCABULARY_DATA_UNATI } from "../data/DataVocabulary";

//Vocabulário
//quizType 1: Desafio imagens áudios e texto.
//quizType 2: Desafio imagens e texto
//quizType 3: Desafio áudio e texto

const MenuVocabulary = () => {
  const navigate = useNavigate();

  const navigateMainMenu = () => {
    navigate("/unati");
  };

  const navigateQuiz1 = (event) => {
    navigate("/quiz", {
      state: {
        quizTypeMode: event.target.name,
        quizTitle: "Desafio 1: Que palavra é essa?",
        hasImage: true,
        hasAudio: true,
        isPhrase: false,
        data: VOCABULARY_DATA_UNATI.filter((dataItem) => {
          return dataItem.desafio1 === 1;
        }),
        pathBack: "/menuVocabulary",
      },
    });
  };

  const navigateQuiz2 = (event) => {
    navigate("/quiz", {
      state: {
        quizTypeMode: event.target.name,
        quizTitle: "Desafio 2: Olhe o desenho e escolha a palavra correta.",
        hasImage: true,
        hasAudio: false,
        isPhrase: false,
        data: VOCABULARY_DATA_UNATI.filter((dataItem) => {
          return dataItem.desafio2 === 1;
        }),
        pathBack: "/menuVocabulary",
      },
    });
  };

  const navigateQuiz3 = (event) => {
    navigate("/quiz", {
      state: {
        quizTypeMode: event.target.name,
        quizTitle: "Desafio 3: Ouça o áudio e escolha a palavra correta.",
        hasImage: false,
        hasAudio: true,
        isPhrase: false,
        data: VOCABULARY_DATA_UNATI.filter((dataItem) => {
          return dataItem.desafio3 === 1;
        }),
        pathBack: "/menuVocabulary",
      },
    });
  };

  return (
    <div className={classes.mainContainer}>
      <Title>VOCABULÁRIO</Title>
      <div className={classes.container}>
        <div>
          <button
            className={classes.button}
            name="vocabulário_completo"
            onClick={navigateQuiz1}
          >
            DESAFIO IMAGENS, ÁUDIO E TEXTO
          </button>
          <button
            className={classes.button}
            name="vocabulário_imagem_texto"
            onClick={navigateQuiz3}
          >
            DESAFIO ÁUDIO E TEXTO
          </button>
        </div>
        <div>
          <button
            className={classes.button}
            name="vocabulário_audio_texto"
            onClick={navigateQuiz2}
          >
            DESAFIO IMAGENS E TEXTO
          </button>

          <button className={classes.button} onClick={navigateMainMenu}>
            VOLTAR AO MENU ANTERIOR
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuVocabulary;
