import './Create_post.css';
import avatar from  '../img/avatar.jpg';
import RoundBtn from '../Round_btn/Round_btn';


function CreatePost() {
  return (
    <div className="Create_post">
      <div className="create_post_text">
        <div className="create_post_user_avatar">
          <img src={avatar} alt="" />
        </div>
        <textarea name="post_text" id="" rows="5" placeholder="What's on your mind?"></textarea>
      </div>
      <div className="create_post_media">
        <ul className="create_post_media_list">
          <li className="create_post_media_item photo">
            <a href="">
              <div className="create_post_image photo"></div>
            </a>
          </li>
          <li className="create_post_media_item video">
            <a href="">
              <div className="create_post_image video"></div>
            </a>
          </li>
          <li className="create_post_media_item audio">
            <a href="">
              <div className="create_post_image audio"></div>
            </a>
          </li>
        </ul>
      </div>
      <div className="create_post_button">
        <RoundBtn/>
      </div>
    </div>
  );
}

export default CreatePost;