import './Post.css';
import avatar from '../img/avatar.jpg'
import SmallBtn from '../Small_btn/Small_btn';

function Post() {
  return (
    <div className="Post">
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
        <ul>
          <li className="post_grade like">
            <a href="">
              <div className="post_grade_image ">
                <SmallBtn/>
              </div>
            </a>
            <div className="post_grade_likeCount">1337</div>
          </li>
          <li className="post_grade comment">
            <a href="">
              <div className="post_grade_image ">
                <SmallBtn/>
              </div>
            </a>
            <div className="post_grade_commentCount">77</div>
          </li>
          <li className="post_grade share">
            <a href="">
              <div className="post_grade_image ">
                <SmallBtn/>
              </div>                        
            </a>         
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Post