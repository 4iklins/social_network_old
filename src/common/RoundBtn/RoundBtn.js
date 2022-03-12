import './RoundBtn.scss';

function RoundBtn(props) {
  return (
    <button className="round_btn" type={props.type}>
      <img src={props.icon}></img>
    </button>
  );
}

export default RoundBtn