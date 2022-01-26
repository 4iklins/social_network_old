const FOLLOW = "FFOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
const RESETUSERS = "RESET-USERS";
const STOPFETCHING = "STOP-FETCHING";
const STARTFETCHING = "START-FETCHING";
const SETCURRENTPAGE = "SET-CURRENTPAGE"

const initialState = {
  users: [],
  currentPage:1,
  fetching:true
};

const friendsReducer = (state = initialState, action) => {
  // debugger
  let stateCopy = {};
  switch (action.type) {
    case FOLLOW:
      stateCopy = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, folowed: true };
          }
          return user;
        }),
      };
      return stateCopy;

    case UNFOLLOW:
      stateCopy = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, folowed: false };
          }
          return user;
        }),
      };
      return stateCopy;

    case SETUSERS:
      return { ...state, users: [...state.users, ...action.users] };
    case RESETUSERS:
      return { ...state, users: [] };
    case STOPFETCHING:
      return { ...state, fetching:action.fetching };
    case STARTFETCHING:
      return { ...state, fetching:action.fetching };
    case SETCURRENTPAGE:
      return { ...state, currentPage:action.currentPage }
    default:
      return state;
  }
};

export const followActionCreator = (id) => ({ type: FOLLOW, id: id });
export const unFollowActionCreator = (id) => ({ type: UNFOLLOW, id: id });
export const setUsersActioinCreator = (users) => ({type: SETUSERS,users: users,});
export const resetUsersActionCreator = () => ({ type: RESETUSERS });
export const startFetchingActionCreator = (fetching) => ({type: STARTFETCHING, fetching:fetching});
export const stopFetchigActionCreator = (fetching) => ({type:STOPFETCHING, fetching:fetching});
export const setCurrentPageActionCreator = (currentPage) => ({type:SETCURRENTPAGE, currentPage:currentPage})
export default friendsReducer;
