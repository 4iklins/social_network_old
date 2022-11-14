import {authApi} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_AUTH_DATA = "auth/SET-AUTH-DATA";
const SET_MY_PROFILE = 'auth/SET-MY-PROFILE';
const AUTH_PROGRESS = "auth/AUTH-PROGRESS";
const RESET_AUTH_DATA = "auth/RESET-AUTH-DATA";
const SET_CAPTCHA = "auth/SET-CAPTCHA";
const SET_MY_PHOTO = 'profile/SET-MY-PHOTO';

let intialState = {
  id: null,
  email: null,
  login: null,
  authProgress:true,
  isAuth:false,
  captchaUrl:null,
}

function authReducer(state=intialState, action) {
 switch(action.type){
  case SET_AUTH_DATA: 
   return {
     ...state,
     ...action.data,
     isAuth:true
   };
  case SET_MY_PROFILE:
    return {
      ...state,
      authProfile:action.profile
    };
  case AUTH_PROGRESS:
    return {
      ...state,
      authProgress:action.progress
    }
  case RESET_AUTH_DATA:
    return {
      ...state,
      id: null,
      email: null,
      login: null,
      isAuth:false,
      captchaUrl:null
    }
  case SET_CAPTCHA:
    return{
      ...state,
      captchaUrl:action.url
      }

  default: return state;
 }
}
export const setAuthData = (id,login,email)=>({type:SET_AUTH_DATA, data: {id,login,email} });
export const setMyProfile = (profile) => ({type: SET_MY_PROFILE, profile:profile});
export const setAuthProgress = (progress) => ({type: AUTH_PROGRESS, progress:progress});
export const resetAuthData = () => ({type: RESET_AUTH_DATA});
export const setCaptcha = (url) => ({type:SET_CAPTCHA, url:url});
export const setMyProfilePhoto = (photos) => ({type:SET_MY_PHOTO,photos});

export const auth = () => async (dispatch) => {
  dispatch(setAuthProgress(true))
  let auth = await authApi.auth()
  if(auth.resultCode === 0){
    let {id, login, email} = auth.data
    dispatch(setAuthData(id,login,email));
    return id
  }
  if(auth.resultCode === 1){
    dispatch(setAuthProgress(false))
    return false
  }
}
export const login = (email,password,rememderMe,captcha) => async (dispatch) => {
  let response = await authApi.login(email,password,rememderMe,captcha)
  debugger
  if(response.data.resultCode === 0){
    let authId = dispatch(auth())
    return authId
  }
  if(response.data.resultCode === 1){
    dispatch(stopSubmit('login', {_error:response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])
  }
  if(response.data.resultCode === 10){
    let errorMessage = response.data.messages[0]
    let captcha = await authApi.getCaptcha()
    dispatch(setCaptcha(captcha.data.url));
    dispatch(stopSubmit('login', {_error:errorMessage}))
    return Promise.reject(errorMessage)
  }
}

export const logout = () => async (dispatch) => {
  let response = await authApi.logout()
  if (response.data.resultCode === 0){
    dispatch(resetAuthData());
    dispatch(auth());
  }
}


export default authReducer;



