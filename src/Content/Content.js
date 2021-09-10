import './Content.css';
import CreatePost from '../Create_post/Create_post';
import Post from '../Post/Post';

function Content() {
  return (
    <div className="Content">
      <div className="main_content">
        <CreatePost/>
        <Post/>
        <Post/>
      </div>
      <div className="other_content"></div>
    </div>
  );
}

export default Content