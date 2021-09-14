import './Create_post.css';
import avatar from  '../img/avatar.jpg';
import RoundBtn from '../Round_btn/Round_btn';
import SmallBtn from '../Small_btn/Small_btn';
import Post from '../Post/Post';


function CreatePost() {
  return (
    <div className="create_post_wrapper">
    <div className="create_post">
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
              <div className="create_post_image photo">
              <SmallBtn />
              </div>
            </a>
          </li>
          <li className="create_post_media_item video">
            <a href="">
              <div className="create_post_image video">
              <SmallBtn />
              </div>
            </a>
          </li>
          <li className="create_post_media_item audio">
            <a href="">
              <div className="create_post_image audio">
              <SmallBtn />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="create_post_button">
        <RoundBtn/>
      </div>
    </div>
    <Post like='1337'/>
    <Post like='1990'/>
    </div>
  );
}

export default CreatePost;