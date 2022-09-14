import { friendsApi } from "../api/api";

const FOLLOWED_TOGGLE = "friends/FOLLOWED-TOGGLE";
const SET_USERS = "friends/SET-USERS";
const RESET_USERS = "friends/RESET-USERS";
const SET_CURRENT_PAGE = "friends/SET-CURRENTPAGE";
const SET_TOTAL_COUNT = "friends/SET-TOTAL-COUNT";
const IS_FETCHING_PROGRESS = "friends/IS-FETCHING-PROGRESS";
const IS_FOLLOWING_PROGRESS = "friends/IS-FOLLOWING-TOGGLE"

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
    case FOLLOWED_TOGGLE:
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
    case IS_FETCHING_PROGRESS:
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

export const followedToggle = (id,followed) => ({ type: FOLLOWED_TOGGLE, id: id ,followed:followed});
export const setUsers = (users) => ({type: SET_USERS,users: users,});
export const resetUsers = () => ({ type: RESET_USERS });
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage:currentPage});
export const setTotalCount = (totalCount) => ({type:SET_TOTAL_COUNT, totalCount:totalCount});
export const isFetchingProgress = (fetching) => ({type: IS_FETCHING_PROGRESS, fetching:fetching});
export const isFollowingProgress = (followInProgress,id) => ({type:IS_FOLLOWING_PROGRESS, followInProgress:followInProgress, id:id})

export const fetchUsers = (currentPage) => async (dispatch) => {
  let response = await friendsApi.getUsers(currentPage)
  dispatch(setUsers(response.items));
  dispatch(setTotalCount(response.totalCount));
  dispatch(setCurrentPage(currentPage + 1));
  dispatch(isFetchingProgress(false));
}

const followUnfollowToggle = async (userId,dispatch,apiMethod,followed) => {
  dispatch(isFollowingProgress(true, userId));
  let response = await friendsApi[apiMethod](userId)
  if(response.resultCode === 0)
  dispatch(followedToggle(userId, followed));
  dispatch(isFollowingProgress(false, userId));
}

export const follow = (userId) => (dispatch) => {
  followUnfollowToggle(userId,dispatch,"postFollow",true);
}

export const unFollow = (userId) => (dispatch) => {
  followUnfollowToggle(userId,dispatch,"deleteFollow",false);
}

export default friendsReducer;
