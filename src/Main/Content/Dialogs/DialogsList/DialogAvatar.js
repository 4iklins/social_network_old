
let DialogAvatar = (item) => {
  let name = item.user.name;
  let out = '';
  name.split(' ').map((word) =>
    out += word[0].toUpperCase()
    )
  if(item.user.avatar !== ""){
    return <img src={item.user.avatar} alt="" />
    }
  else return <p className="user_without_avatar">{out}</p>
};

export default DialogAvatar