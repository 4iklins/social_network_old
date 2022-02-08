const SET_AUTH_DATA = "SET-AUTH-DATA";
const SET_USER = 'SET-USER';

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
   case SET_USER:
    return {
      ...state,
      profile:action.profile
    };
   default: return state;
 }
}
export const setAuthData = (id,login,email)=>({type:SET_AUTH_DATA, data: {id,login,email} });
export const setMyProfile = (profile) => ({type: SET_USER, profile:profile});
export default authReducer;



