const FOLLOW = "FFOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS"

const initialState = {
  users: []
};

const friendsReducer = (state = initialState, action) => {
  let stateCopy ={};
  switch(action.type){
    case FOLLOW:
      stateCopy = {...state,
        users: state.users.map(user => {
          if(user.id === action.id){
            return {...user, folowed:true}
          } return user
        })
      };
      return stateCopy;
      case UNFOLLOW:
        stateCopy = {...state,
          users: state.users.map(user => {
            if(user.id === action.id){
              return {...user, folowed:false}
            } return user
          })
        };
        return stateCopy;
        case SETUSERS:
          stateCopy = {...state,
          users:[...state.users, ...action.users]}
          return stateCopy
    default: return state;
  }
};

export const followActionCreator = (id)=>({type:FOLLOW,id:id});
export const unFollowActionCreator = (id)=>({type:UNFOLLOW,id:id});
export const setUsersActioinCreator = (users)=>({type:SETUSERS, users:users});
export default friendsReducer;
