import './Avatar.scss';
import classNames from 'classnames';

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
    return <img src={props.user.photos.small} className={classNames ("avatar__img",{"avatar__img--big":props.big},{"avatar__img--small":props.small})} alt="" />
    }
  else return <p className={classNames ("avatar__without-img",{"avatar__without-img--big":props.big},{"avatar__without-img--small":props.small})}>{out}</p>
};

export default Avatar