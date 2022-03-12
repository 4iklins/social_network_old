import './MediaButton.scss';

function MediaButton(props) {
  return(
    <button className="media_button" type={props.type}>
      <img src={props.icon}></img>
    </button>
  )
}

export default MediaButton;