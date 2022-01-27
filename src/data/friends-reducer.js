const FOLLOW = "FFOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
const RESETUSERS = "RESET-USERS";
const SETCURRENTPAGE = "SET-CURRENTPAGE";
const SETTOTALCOUNT = "SET-TOTAL-COUNT"

const initialState = {
  users: [],
  currentPage:1,
  usersCount: 7,
  totalCount:0
};

const friendsReducer = (state = initialState, action) => {
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
    case SETCURRENTPAGE:
      return { ...state, currentPage:action.currentPage };
    case SETTOTALCOUNT:
        return { ...state, totalCount:action.totalCount };
      
    default:
      return state;
  }
};

export const followActionCreator = (id) => ({ type: FOLLOW, id: id });
export const unFollowActionCreator = (id) => ({ type: UNFOLLOW, id: id });
export const setUsersActioinCreator = (users) => ({type: SETUSERS,users: users,});
export const resetUsersActionCreator = () => ({ type: RESETUSERS });
export const setCurrentPageActionCreator = (currentPage) => ({type:SETCURRENTPAGE, currentPage:currentPage});
export const setTotalCountActionCreator = (totalCount) => ({type:SETTOTALCOUNT, totalCount:totalCount})
export default friendsReducer;
