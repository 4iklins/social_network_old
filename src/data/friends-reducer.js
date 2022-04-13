import { getUsers, postFollow, deleteFollow } from "../api/api";

const FOLLOW_TOGGLE = "FOLLOW-TOGGLE";
const SET_USERS = "SET-USERS";
const RESET_USERS = "RESET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENTPAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const IS_FETCHING = "IS-FETCHING";
const IS_FOLLOWING_PROGRESS = "IS-FOLLOWING-TOGGLE"

const initialState = {
  users: [],
  currentPage:1,
  totalCount:0,
  usersCount:7,
  isFetching: true,
  isFollowing:[]
};

const friendsReducer = (state = initialState, action) => {
  let stateCopy = {};
  switch (action.type) {
    case FOLLOW_TOGGLE:
      debugger
      stateCopy = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: action.followed};
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
      return {...state, isFetching:action.fetching}
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

export const followToggle = (id,followed) => ({ type: FOLLOW_TOGGLE, id: id ,followed:followed});
export const setUsers = (users) => ({type: SET_USERS,users: users,});
export const resetUsers = () => ({ type: RESET_USERS });
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage:currentPage});
export const setTotalCount = (totalCount) => ({type:SET_TOTAL_COUNT, totalCount:totalCount});
export const isFetchingProgress = (fetching) => ({type: IS_FETCHING, fetching:fetching});
export const isFollowingProgress = (followInProgress,id) => ({type:IS_FOLLOWING_PROGRESS, followInProgress:followInProgress, id:id})

export const fetchUsers = (currentPage) => (dispatch) => {
  getUsers(currentPage)
  .then(responce=>{
    dispatch(setUsers(responce.items));
    dispatch(setTotalCount(responce.totalCount));
    dispatch(setCurrentPage(currentPage + 1))
    dispatch(isFetchingProgress(false));
  })
}

export const follow = (userId) => (dispatch) => {
  dispatch(isFollowingProgress(true, userId));
  postFollow(userId)
  .then((response) => {
    if(response.resultCode === 0)
    dispatch(followToggle(userId, true));
    dispatch(isFollowingProgress(false, userId));
  });
}

export const unFollow = (userId) => (dispatch) => {
  dispatch(isFollowingProgress(true, userId));
  deleteFollow(userId)
  .then((response) => {
    if(response.resultCode === 0)
    dispatch(followToggle(userId, false));
    dispatch(isFollowingProgress(false, userId));
  });
}

export default friendsReducer;
