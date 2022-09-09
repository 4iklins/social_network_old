import friendsReducer, {setTotalCount} from "./friends-reducer";

let state = {
  users: [],
  currentPage:1,
  totalCount:0,
  usersCount:7,
  isFetching: true,
  isFollowing:[]
};

it('users total count is correct', ()=>{
  let action = setTotalCount(20);
  let newState = friendsReducer(state, action);
  expect(newState.totalCount).toBe(20)
});