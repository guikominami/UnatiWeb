import "../Vocabulary/List.css";
import Title from "../components/UI/Title";

const List = (props) => {

  return (
    <div className="list-container">
      <div>
        <Title>Lista de palavras</Title>
      </div>
      <ul className="list" data-col>
        {props.data.map((word) => (
          <div className="list-item" key={word.id}>
            <button 
              className="list-button" 
              id={word.id} 
              onClick={props.onListItemSelected}
            >
              {word.optionPt}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
