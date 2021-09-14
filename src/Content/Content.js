import './Content.css';
import CreatePost from '../Create_post/Create_post';
import Events from '../Events/Events';

function Content() {
  return (
    <div className="content">
      <div className="main_content">
        <CreatePost/>
      </div>
      <div className="other_content">
        <Events/>
      </div>
    </div>
  );
}

export default Content