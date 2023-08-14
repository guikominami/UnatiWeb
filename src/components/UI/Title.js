import '../UI/Title.css';

const Title = (props) => {
  return(
    <div className='title'>
      <label className='title-text'>{props.children}</label>
    </div>
  );
}

export default Title;