import './Post.scss';
import avatar from '../img/avatar.jpg'
import MediaButton from '../MediaButton/MediaButton';

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio, cum alias deserunt esse voluptatibus totam unde consequatur, quos assumenda. Dolorem unde minima non?
      </div>
      <div className="post_media"></div>
      <div className="post_grades">
      <div className="post_grade like">
        <MediaButton icon="like"/>
        <div className="post_grade_likeCount">{props.like}</div>
      </div>
      <div className="post_grade comment">
        <MediaButton icon="comment"/>
        <div className="post_grade_commentCount">{props.like}</div>
      </div>
      <div className="post_grade share">
        <MediaButton icon="share"/>
      </div>
      </div>
    </div>
  );
}

export default Post