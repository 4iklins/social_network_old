const FOLLOW = "FFOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const RESET_USERS = "RESET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENTPAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const IS_FETCHING = "IS-FETCHING";
const IS_FOLLOWING_PROGRESS = "IS-FOLLOWING-TOGGLE"

const initialState = {
  users: [],
  currentPage:1,
  usersCount: 7,
  totalCount:0,
  isFetching: false,
  isFollowing:[]
};

const friendsReducer = (state = initialState, action) => {
  let stateCopy = {};
  switch (action.type) {
    case FOLLOW:
      stateCopy = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: true };
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
            return { ...user, followed: false };
          }
          return user;
        }),
      };
      return stateCopy;

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    case RESET_USERS:
      return { ...state, users: [] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage:action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount:action.totalCount };
    case IS_FETCHING:
      stateCopy = {...state}
      stateCopy.isFetching = !stateCopy.isFetching
      return stateCopy
    case IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowing:action.followInProgress
        ?[...state.isFollowing, action.id]
        :[state.isFollowing.filter(id => id !== action.id)]
      }
      
    default:
      return state;
  }
};

export const follow = (id) => ({ type: FOLLOW, id: id });
export const unFollow = (id) => ({ type: UNFOLLOW, id: id });
export const setUsers = (users) => ({type: SET_USERS,users: users,});
export const resetUsers = () => ({ type: RESET_USERS });
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage:currentPage});
export const setTotalCount = (totalCount) => ({type:SET_TOTAL_COUNT, totalCount:totalCount});
export const isFetchingToggle = () => ({type: IS_FETCHING});
export const isFollowingProgress = (followInProgress,id) => ({type:IS_FOLLOWING_PROGRESS, followInProgress:followInProgress, id:id})
export default friendsReducer;
