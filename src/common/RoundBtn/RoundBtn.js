import './RoundBtn.scss';

function RoundBtn(props) {
  return (
    <button className="round-btn" type={props.type} disabled={props.disabled}>
      <img classNmae="round-btn__img" src={props.icon} alt="btn-icon"></img>
    </button>
  );
}

export default RoundBtn