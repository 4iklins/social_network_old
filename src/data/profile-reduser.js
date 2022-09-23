import {profileApi} from "../api/api";

const ADD_NEW_POST = 'profile/ADD-NEW-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET-USER-STATUS';
const STATUS_ERROR = 'profile/STATUS-ERROR';
const LOADING_DATA = 'profile/LOADING-DATA'


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
  statusError:false,
  statusErrorMessage:"",
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
export const showStatusError = (error,errorMessage) => ({type:STATUS_ERROR, error, errorMessage});
export const loadData = (loadingData) => ({type:LOADING_DATA,loadingData})

export const setUserStatus = (statusText) => async (dispatch) => {
  let response = await profileApi.setStatus(statusText)
  if(response.resultCode === 0){
    dispatch(setUserStatusText(statusText))
  }
  if(response.resultCode === 1){
    dispatch(showStatusError(true,response.messages[0]))
    setTimeout(()=>{
      dispatch(showStatusError(false,""))
    },4000)
  }
}

export const requestUserProfile = (userId) => async (dispatch) => {
  let response = await profileApi.getProfile(userId)
  dispatch(setUserProfile(response.data));
}

export const requestUserStatus = (userId) => async (dispatch) => {
  let response = await profileApi.getStatus(userId)
  dispatch(setUserStatusText(response.data))
}

export const requestUserData = (userId) => (dispatch) => {
  dispatch(loadData(true))
  const profile = dispatch(requestUserProfile(userId))
  const status = dispatch(requestUserStatus(userId))
  Promise.all([profile,status])
  .then(() => dispatch(loadData(false)))
}

export const setPhoto = (photo, userId) => async (dispatch) => {
  let response = await profileApi.editPhoto(photo)
  debugger
  if(response.data.resultCode === 0){
    dispatch(requestUserProfile(userId))
  }
  if(response.data.resultCode === 1){

  }
}


export default profileReducer;