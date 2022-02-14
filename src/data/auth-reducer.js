import {authMe, getProfile} from '../api/api'

const SET_AUTH_DATA = "SET-AUTH-DATA";
const SET_MY_PROFILE = 'SET-MY-PROFILE';

let intialState = {
  id: null,
  email: null,
  login: null,
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
   default: return state;
 }
}
export const setAuthData = (id,login,email)=>({type:SET_AUTH_DATA, data: {id,login,email} });
export const setMyProfile = (profile) => ({type: SET_MY_PROFILE, profile:profile});

export const auth = () => (dispatch) => {
  authMe().then(response =>{
    if(response.resultCode === 0){
      let {id, login, email} = response.data
      dispatch(setAuthData(id,login,email));
      getProfile(id)
      .then(response =>{
        dispatch(setMyProfile(response.data));
      })
    }
  })
}


export default authReducer;



