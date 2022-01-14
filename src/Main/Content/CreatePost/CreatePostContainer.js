
import CreatePost from './CreatePost';
import { connect } from 'react-redux';
import {addPostActionCreator, updateEnteredPostTextActionCreator} from '../../../data/posts-reduser'

const mapStateToProps = (state) => {
  return {postsPage:state.postsPage}
}

const mapDispatchToProps = (dispatch) => {
  return {
    enteredTextChange:(text) => {dispatch(updateEnteredPostTextActionCreator(text))},
    addPost:() => {dispatch(addPostActionCreator())}
  }
}

const CreatePostContainer = connect(mapStateToProps,mapDispatchToProps)(CreatePost);

export default CreatePostContainer;