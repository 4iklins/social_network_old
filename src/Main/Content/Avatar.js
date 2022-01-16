
let Avatar = (props) => {
  let name = props.user.name;
  let out = '';
  name.split(' ').map((word) =>
    out += word[0].toUpperCase()
    )
  if(props.user.avatar !== ""){
    return <img src={props.user.avatar} alt="" />
    }
  else return <p className="user_without_avatar">{out}</p>
};

export default Avatar