const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_ENTERED_POST_TEXT = 'UPDATE-ENTERED-POST-TEXT';
let initialState = {
  posts: [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio, cum alias deserunt esse voluptatibus totam unde consequatur, quos assumenda. Dolorem unde minima non?",
      likes: 1337,
      comments: 10,
    },
    {
      id: 0,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio.",
      likes: 1303,
      comments: 15,
    },
  ],
  newPostText: "",
}


const newPost = (state) => {
  let post = {};
  post.id = state.posts.length;
  post.text = state.newPostText;
  post.likes = 0;
  post.comments = 0;
  state.posts.unshift(post);
  state.newPostText = "";
};

const updateEnteredPostText = (state, text)=> {
  debugger
  return {
    ...state,
    newPostText: text,
  }
};

const postsReducer = (state = initialState, action) => {
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