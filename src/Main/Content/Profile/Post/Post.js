import './Post.scss';
import avatar from '../../../../img/avatar.jpg'
import MediaButton from '../../../../common/MediaButton/MediaButton';
import likeIcon from '../../../../img/like_border_icon.svg';
import commentIcon from '../../../../img/comment_icon.svg';
import shareIcon from '../../../../img/share_icon.svg';

function Post(props) {
  return (
    <div className="post">
      <div className="post_user_info">
        <div className="post_user_avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="post_user_name">
          Andrei Bortnik
          <p className="post_time">3 hour ago</p>
        </div>
      </div>
      <div className="post_text">
        {props.postData.text}
      </div>
      <div className="post_media"></div>
      <div className="post_grades">
      <div className="post_grade like">
        <MediaButton icon={likeIcon} type="button"/>
        <div className="post_grade_likeCount">{props.postData.likes}</div>
      </div>
      <div className="post_grade comment">
        <MediaButton icon={commentIcon} type="button"/>
        <div className="post_grade_commentCount">{props.postData.comments}</div>
      </div>
      <div className="post_grade share">
        <MediaButton icon={shareIcon} type="button"/>
      </div>
      </div>
    </div>
  );
}

export default Post