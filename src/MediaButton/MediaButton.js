import './MediaButton.scss';
import SmallIcon from '../SmallIcon/SmallIcon';

function MediaButton(props) {
  return(
    <button className={"media_button " + props.icon}>
      <SmallIcon/>
    </button>
  )
}

export default MediaButton;