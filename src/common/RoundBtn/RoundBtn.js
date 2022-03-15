import './RoundBtn.scss';

function RoundBtn(props) {
  return (
    <button className="round_btn" type={props.type} disabled={props.disabled}>
      <img src={props.icon}></img>
    </button>
  );
}

export default RoundBtn