const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_ENTERED_POST_TEXT = 'UPDATE-ENTERED-POST-TEXT';

const newPost = (state) => {
  let post = {};
  post.id = state.posts.length;
  post.text = state.newPostText;
  post.likes = 0;
  post.comment = 0;
  state.posts.unshift(post);
  state.newPostText = "";
};

const updateEnteredPostText = (state, text)=> {
  state.newPostText = text;
};

const postsReducer = (state, action) => {
  debugger
  switch (action.type) {
    case ADD_NEW_POST:
      newPost(state);
      return state;
    case UPDATE_ENTERED_POST_TEXT:
      updateEnteredPostText(state, action.text);
      return state;
    default: return state;
  }
}

export const addPostActionCreator = () => ({type:ADD_NEW_POST});
export const updateEnteredPostTextActionCreator = (text) => ({type:UPDATE_ENTERED_POST_TEXT, text:text});

export default postsReducer;