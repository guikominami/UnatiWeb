import { useNavigate } from "react-router-dom";

import classesMenu from "../../pages/Menu.module.css";

const BackButton = (props) => {
  const navigate = useNavigate();

  const navigateMainMenu = () => {
    navigate(props.path);
  };

  return (
    <div className={classesMenu.containerBackButton}>
      <button className={classesMenu.menuButtonBack} onClick={navigateMainMenu}>
        Voltar
      </button>
    </div>
  );
};

export default BackButton;
