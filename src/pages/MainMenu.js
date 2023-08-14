import { useNavigate } from "react-router-dom";

import Title from "../components/UI/Title";
import classes from './Menu.module.css';

const MainMenu = () => {

  const navigate = useNavigate();

  const navigateMenuPhrases = () => {
    navigate('/menuPhrases');
  }

  const navigateMenuVocabulary = () => {
    navigate('/menuVocabulary');
  }
  
  const navigateAbout = () => {
    navigate('/about');
  }    

  return (
    <div className={classes.mainContainer}>
      <Title>UNATI</Title>      
      <div className={classes.container}>
        <div>
          <button className={classes.button} onClick={navigateMenuVocabulary}>
            DESAFIO VOCABULÁRIO
          </button>   
          <button className={classes.button} onClick={navigateAbout}>
            FICHA TÉCNICA
          </button>              
        </div>
        <div>
          <button className={classes.button} onClick={navigateMenuPhrases}>
            DESAFIO FRASES
          </button>          
          <div className={classes.space}>
          </div>           
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
