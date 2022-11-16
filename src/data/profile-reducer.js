import {profileApi} from "../api/api";
import {showSomeError} from "./auth-reducer";

const ADD_NEW_POST = 'profile/ADD-NEW-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET-USER-STATUS';
const STATUS_ERROR = 'profile/STATUS-ERROR';
const LOADING_DATA = 'profile/LOADING-DATA';



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
  status:null,
  loadingData: true
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


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      return _newPost(state, action.text);
    case SET_USER_PROFILE:
      return {
        ...state,
        profile:action.profile
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status:action.status
      }
    case STATUS_ERROR:
      return {
        ...state,
        statusError:action.error,
        statusErrorMessage:action.errorMessage
      }
    case LOADING_DATA:
      return {
        ...state,
        loadingData:action.loadingData
      }

    default: return state;
  }
}

export const addPost= (text) => ({type:ADD_NEW_POST, text:text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile:profile});
export const setUserStatusText = (status) => ({type:SET_USER_STATUS,status:status});
export const loadData = (loadingData) => ({type:LOADING_DATA,loadingData});


export const requestUserProfile = (userId,setProfileAction) => async (dispatch) => {
  try{
  let response = await profileApi.getProfile(userId)
  dispatch(setProfileAction(response.data));
  } catch(error){
    dispatch(showSomeError(true,"Some Error :("))
    setTimeout(()=>{
      dispatch(showSomeError(false,""))
    },4000)
  }
}

export const requestUserStatus = (userId,setStatusAction) => async (dispatch) => {
  try{
  let response = await profileApi.getStatus(userId)
  dispatch(setStatusAction(response.data))
  } catch(error) {
    dispatch(showSomeError(true,"Some Error :("))
    setTimeout(()=>{
      dispatch(showSomeError(false,""))
    },4000)
  }
}

export const requestUserData = (userId,loadDataAction,setProfileAction,setStatusAction) => (dispatch) => {
  dispatch(loadDataAction(true))
  const profile = dispatch(requestUserProfile(userId,setProfileAction))
  const status = dispatch(requestUserStatus(userId,setStatusAction))
  Promise.all([profile,status])
  .then(() => dispatch(loadDataAction(false)))
}

export default profileReducer;