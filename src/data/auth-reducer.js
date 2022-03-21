import {authMe, getProfile, loginMe, logoutMe} from '../api/api'

const SET_AUTH_DATA = "SET-AUTH-DATA";
const SET_MY_PROFILE = 'SET-MY-PROFILE';
const AUTH_PROGRESS = "AUTH-PROGRESS";
const RESET_AUTH_DATA = "RESET-AUTH-DATA";

let intialState = {
  id: null,
  email: null,
  login: null,
  authProgress:true,
  isAuth:false,
  profile:null,
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
          profile:null
       }
   default: return state;
 }
}
export const setAuthData = (id,login,email)=>({type:SET_AUTH_DATA, data: {id,login,email} });
export const setMyProfile = (profile) => ({type: SET_MY_PROFILE, profile:profile});
export const authProgress = (progress) => ({type: AUTH_PROGRESS, progress:progress});
export const resetAuthData = () => ({type: RESET_AUTH_DATA});

export const auth = () => (dispatch) => {
  dispatch(authProgress(true))
  authMe().then(response =>{
    dispatch(authProgress(false))
    if(response.resultCode === 0){
      let {id, login, email} = response.data
      dispatch(setAuthData(id,login,email));
      getProfile(id)
      .then(response =>{
        dispatch(setMyProfile(response.data));
      })
    }
    if(response.resultCode === 1){
      
    }
  })
}
export const login = (email,password,rememderMe) => (dispatch) => {
  loginMe(email,password,rememderMe).then(response =>{
    if(response.data.resultCode === 0){
      dispatch(auth())
    }
  })
}

export const logout = () => (dispatch) => {
  debugger
  logoutMe().then(response => {
    if (response.data.resultCode === 0){
      dispatch(resetAuthData());
      dispatch(auth());
    }
  })
}



export default authReducer;



