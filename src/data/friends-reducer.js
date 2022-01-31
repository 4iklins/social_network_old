const FOLLOW = "FFOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
const RESETUSERS = "RESET-USERS";
const SETCURRENTPAGE = "SET-CURRENTPAGE";
const SETTOTALCOUNT = "SET-TOTAL-COUNT";
const ISFETCHING = "IS-FETCHING"

const initialState = {
  users: [],
  currentPage:1,
  usersCount: 7,
  totalCount:0,
  isFetching: false
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
    case ISFETCHING:
      stateCopy = {...state}
      stateCopy.isFetching = !stateCopy.isFetching
      return stateCopy
      
    default:
      return state;
  }
};

export const follow = (id) => ({ type: FOLLOW, id: id });
export const unFollow = (id) => ({ type: UNFOLLOW, id: id });
export const setUsers = (users) => ({type: SETUSERS,users: users,});
export const resetUsers = () => ({ type: RESETUSERS });
export const setCurrentPage = (currentPage) => ({type:SETCURRENTPAGE, currentPage:currentPage});
export const setTotalCount = (totalCount) => ({type:SETTOTALCOUNT, totalCount:totalCount});
export const isFetchingToggle = () => ({type: ISFETCHING});
export default friendsReducer;
