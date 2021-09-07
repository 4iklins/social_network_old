import './Content.css';
import CreatePost from '../Create_post/Create_post';

function Content() {
  return (
    <div className="Content">
      <div className="main_content">
        <CreatePost/>
      </div>
      <div className="other_content"></div>
    </div>
  );
}

export default Content