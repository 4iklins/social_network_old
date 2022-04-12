import {getProfile, getStatus, setStatus} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';


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
  profile: null,
  status:null
}


const _newPost = (state,text) => {
  let post = {};
  post.id = state.posts.length;
  post.text = text;
  post.likes = 0;
  post.comments = 0;
  return {
      ...state,
      posts:[post, ...state.posts]
  }
};


const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      return _newPost(state, action.text);
    case SET_USER_PROFILE:
      return {
        ...state,
        profile:action.profile
      }
    case SET_USER_STATUS:
      debugger
      return {
        ...state,
        status:action.status
      }
    default: return state;
  }
}

export const addPost= (text) => ({type:ADD_NEW_POST, text:text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile:profile});
export const setUserStatusText = (status) => ({type:SET_USER_STATUS,status:status});

export const getUserStatus = (userId) => (dispatch) => {
  getStatus(userId)
  .then(response => {
    dispatch(setUserStatusText(response.data))
  })
}

export const setUserStatus = (statusText) => (dispatch) => {
  return setStatus(statusText)
  .then(response => {
    if(response.resultCode === 0){
      dispatch(setUserStatusText(statusText))
    }
    if(response.resultCode === 1){
      
    }
  })
}

export const getUserProfile = (userId) => (dispatch) => {
   return getProfile(userId)
  .then(response => {
    dispatch(setUserProfile(response.data));
  })
}


export default postsReducer;