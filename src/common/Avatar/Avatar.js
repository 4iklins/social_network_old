import './Avatar.scss';
import classNames from 'classnames';

let Avatar = ({userName, photo, size}) => {
  let out = '';
  userName.split(' ').map((word) =>
    out += word[0].toUpperCase()
    )
  return(
    <>
      {
      photo ?
      <img src={photo} className={classNames ("avatar__img",{"avatar__img--big":size==="big"},{"avatar__img--small":size==="small"})} alt="" />
      :
      <p className={classNames ("avatar__without-img",{"avatar__without-img--big":size==="big"},{"avatar__without-img--small":size==="small"})}>{out}</p>
  }
    </>
  )
};

export default Avatar