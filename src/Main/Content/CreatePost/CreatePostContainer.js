
import CreatePost from './CreatePost';
import {addPostActionCreator, updateEnteredPostTextActionCreator} from '../../../data/posts-reduser'


function CreatePostContainer(props) {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let enteredTextChange = (text) => {
    props.store.dispatch(updateEnteredPostTextActionCreator(text))
  }
  
  return (
    <CreatePost enteredTextChange={enteredTextChange} addPost = {addPost} postsPage = {state.postsPage}/>
  );
}

export default CreatePostContainer;