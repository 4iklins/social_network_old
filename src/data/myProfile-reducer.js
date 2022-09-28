import { profileApi} from '../api/api';
import {requestUserData} from './profile-reducer';

const SET_MY_PROFILE = 'myProfile/SET-MY-PROFILE';
const SET_MY_PHOTO = 'myProfile/SET-MY-PHOTO';
const RESET_AUTH_DATA = "myProfile/RESET-AUTH-DATA";
const SET_MY_STATUS = 'myProfile/SET-MY-STATUS';
const STATUS_ERROR = 'myProfile/STATUS-ERROR';


const initialState = {
  myProfile:null,
  myStatus:null,
  statusError:false,
  statusErrorMessage:"",
}

const myProfileReducer = (state=initialState,action)=> {
  switch(action.type){
    case SET_MY_PROFILE:
      return {
        ...state,
        myProfile:action.profile
      };
    case SET_MY_STATUS:
      return {
        ...state,
        myStatus:action.status
      };
    case STATUS_ERROR:
      return {
        ...state,
        statusError:action.error,
        statusErrorMessage:action.errorMessage
      };
    case SET_MY_PHOTO:
      debugger
      return {
        ...state,
        myProfile:{
          ...state.myProfile,
          photos:action.photos
        }
      };

    default: return state;
  }
}

export const setMyProfile = (profile) => ({type: SET_MY_PROFILE, profile:profile});
export const resetAuthData = () => ({type: RESET_AUTH_DATA});
export const setMyProfilePhoto = (photos) => ({type:SET_MY_PHOTO,photos});
export const showStatusError = (error,errorMessage) => ({type:STATUS_ERROR, error, errorMessage});
export const setMyStatusText = (status) => ({type:SET_MY_STATUS,status:status});

export const requestMyData = (myId,authProgressAction,setProfileAction,setStatusAction) => (dispatch) => {
  dispatch(requestUserData(myId, authProgressAction,setProfileAction,setStatusAction))
}

export const setPhoto = (photo) => async (dispatch) => {
  let response = await profileApi.editPhoto(photo)
  if(response.data.resultCode === 0){
    dispatch(setMyProfilePhoto(response.data.data.photos))
  }
  if(response.data.resultCode === 1){

  }
}

export const setMyStatus = (statusText) => async (dispatch) => {
  let response = await profileApi.setStatus(statusText)
  if(response.resultCode === 0){
    dispatch(setMyStatusText(statusText))
  }
  if(response.resultCode === 1){
    dispatch(showStatusError(true,response.messages[0]))
    setTimeout(()=>{
      dispatch(showStatusError(false,""))
    },4000)
  }
}

export default myProfileReducer;