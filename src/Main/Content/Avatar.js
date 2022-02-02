
let Avatar = (props) => {
  let name
  if("name" in props.user){
    name = props.user.name;
  }
  if("fullName" in props.user){
    name = props.user.fullName;
  }
  
  let out = '';
  name.split(' ').map((word) =>
    out += word[0].toUpperCase()
    )
  if(props.user.photos.small !== null){
    return <img src={props.user.photos.small} alt="" />
    }
  else return <p className="user_without_avatar">{out}</p>
};

export default Avatar