import {authMe, getProfile, loginMe, logoutMe, getCaptcha} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_AUTH_DATA = "SET-AUTH-DATA";
const SET_MY_PROFILE = 'SET-MY-PROFILE';
const AUTH_PROGRESS = "AUTH-PROGRESS";
const RESET_AUTH_DATA = "RESET-AUTH-DATA";
const SET_CAPTCHA = "SET-CAPTCHA";

let intialState = {
  id: null,
  email: null,
  login: null,
  authProgress:true,
  isAuth:false,
  profile:null,
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
      profile:action.profile
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
          profile:null,
          captchaUrl:null
       }
       case SET_CAPTCHA:
         debugger
         return{
           ...state,
           captchaUrl:action.url
         }
   default: return state;
 }
}
export const setAuthData = (id,login,email)=>({type:SET_AUTH_DATA, data: {id,login,email} });
export const setMyProfile = (profile) => ({type: SET_MY_PROFILE, profile:profile});
export const authProgress = (progress) => ({type: AUTH_PROGRESS, progress:progress});
export const resetAuthData = () => ({type: RESET_AUTH_DATA});
export const setCaptcha = (url) => ({type:SET_CAPTCHA, url:url})

export const auth = () => (dispatch) => {
  dispatch(authProgress(true))
  authMe().then(response =>{
    if(response.resultCode === 0){
      let {id, login, email} = response.data
      dispatch(setAuthData(id,login,email));
      getProfile(id)
      .then(response =>{
        dispatch(setMyProfile(response.data));
        dispatch(authProgress(false))
      })
    }
  })
}
export const login = (email,password,rememderMe,captcha) => (dispatch) => {
  loginMe(email,password,rememderMe,captcha).then(response =>{
    if(response.data.resultCode === 0){
      dispatch(auth())
    }
    if(response.data.resultCode === 1){
      
      dispatch(stopSubmit('login', {_error:response.data.messages[0]}))
    }
    if(response.data.resultCode === 10){
      debugger
      let errorMessage = response.data.messages[0]
      getCaptcha().then(response =>{
        dispatch(setCaptcha(response.data.url));
        dispatch(stopSubmit('login', {_error:errorMessage}))
      })
    }
  })
}

export const logout = () => (dispatch) => {
  
  logoutMe().then(response => {
    if (response.data.resultCode === 0){
      dispatch(resetAuthData());
      dispatch(auth());
    }
  })
}



export default authReducer;



