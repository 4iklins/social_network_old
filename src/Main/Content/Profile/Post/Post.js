import './Post.scss';
import avatar from '../../../../img/avatar.jpg'
import MediaButton from '../../../../common/MediaButton/MediaButton';
import likeIcon from '../../../../img/like_border_icon.svg';
import commentIcon from '../../../../img/comment_icon.svg';
import shareIcon from '../../../../img/share_icon.svg';
import Avatar from '../../../../common/Avatar/Avatar';

function Post(props) {
  return (
    <div className="post">
      <div className="post__user-info">
        <div className="post__user-avatar">
          <Avatar user={props.profile}/>
        </div>
        <div className="post__user-name">
          {props.profile.fullName}
          <p className="post__time">3 hour ago</p>
        </div>
      </div>
      <div className="post__text">
        {props.postData.text}
      </div>
      <div className="post__media"></div>
      <div className="post__grades">
      <div className="post__grade like">
        <MediaButton icon={likeIcon} type="button"/>
        <div className="post__grade-likeCount">{props.postData.likes}</div>
      </div>
      <div className="post__grade comment">
        <MediaButton icon={commentIcon} type="button"/>
        <div className="post__grade-commentCount">{props.postData.comments}</div>
      </div>
      <div className="post__grade share">
        <MediaButton icon={shareIcon} type="button"/>
      </div>
      </div>
    </div>
  );
}

export default Post