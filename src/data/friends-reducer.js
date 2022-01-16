const FOLLOW_TOGGLE = "FFOLLOW-TOGGLE";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
  friends: [
    {
      id: 0,
      name: "Andrei Bakinovskiy",
      avatar:
        "https://sun9-73.userapi.com/impg/NSpxZb1J_V-M_YJNBMaJhCVThrQniOiL73eGNQ/9cFQ4T1g3OA.jpg?size=810x1080&quality=95&sign=faeaf2da7a2da7c581b509f3b2eaacd2&type=album",
      folowed: true,
    },
    {
      id: 1,
      name: "Anthony Kiedis",
      avatar:
        "https://avatars.mds.yandex.net/i?id=dbe15ebdff2bdb03960c008e55c2b271-4034399-images-thumbs&n=13",
      folowed: true,
    },
    {
      id: 2,
      name: "Chad Smith",
      avatar:
        "https://kennyaronoff.com/wp-content/uploads/2016/08/Chad-Smith.jpg",
      folowed: true,
    },
    {
      id: 3,
      name: "Flea",
      avatar:
        "https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/8/f/9/e/fd7c-7e05-4d36-b23f-025885fd60e1.jpg",
      folowed: true,
    },
    {
      id: 4,
      name: "John Frusciante",
      avatar:
        "https://avatars.mds.yandex.net/i?id=02f58dbcd6821115f096fcc625d22156-4577390-images-thumbs&n=13",
      folowed: true,
    },
    {
      id: 5,
      name: "Neil Degrasse Tyson",
      avatar: "",
      folowed: true,
    },
  ],
  users: [
    {
      id: 0,
      name: "Andrei Bakinovskiy",
      avatar:
        "https://sun9-73.userapi.com/impg/NSpxZb1J_V-M_YJNBMaJhCVThrQniOiL73eGNQ/9cFQ4T1g3OA.jpg?size=810x1080&quality=95&sign=faeaf2da7a2da7c581b509f3b2eaacd2&type=album",
      folowed: true,
    },
    {
      id: 6,
      name: "Arnold Schwarzenegger",
      avatar: "https://funik.ru/wp-content/uploads/2021/01/96bf150823a123ea671d.jpg",
      folowed: false,
    },
    {
      id: 1,
      name: "Anthony Kiedis",
      avatar:
        "https://avatars.mds.yandex.net/i?id=dbe15ebdff2bdb03960c008e55c2b271-4034399-images-thumbs&n=13",
      folowed: true,
    },
    {
      id: 7,
      name: "Thomas Anderson",
      avatar: "https://img.kupigolos.ru/hero/5d00181f6189c.jpg?p=bh&s=19be05f98693a88f6d7027fc4e6e89b1",
      folowed: false,
    },
    {
      id: 2,
      name: "Chad Smith",
      avatar:
        "https://kennyaronoff.com/wp-content/uploads/2016/08/Chad-Smith.jpg",
      folowed: true,
    },
    {
      id: 8,
      name: "Rocky Balboa",
      avatar: "https://i.pinimg.com/originals/a2/8f/25/a28f252d63a61c66a22d24e23d80d7ab.jpg",
      folowed: false,
    },
    {
      id: 3,
      name: "Flea",
      avatar:
        "https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/8/f/9/e/fd7c-7e05-4d36-b23f-025885fd60e1.jpg",
      folowed: true,
    },
    {
      id: 9,
      name: "Barney Stinson",
      avatar: "https://stylecaster.com/wp-content/uploads/2014/11/x13686.jpg?w=830",
      folowed: false,
    },
    {
      id: 4,
      name: "John Frusciante",
      avatar:
        "https://avatars.mds.yandex.net/i?id=02f58dbcd6821115f096fcc625d22156-4577390-images-thumbs&n=13",
      folowed: true,
    },
    {
      id: 10,
      name: "Marshall Eriksen",
      avatar: "https://the-fasol.com/upload/img_all/marshall_eriksen.jpg",
      folowed: false,
    },
    {
      id: 5,
      name: "Neil Degrasse Tyson",
      avatar: "",
      folowed: true,
    },
  ],
};

const friendsReducer = (state = initialState, action) => {
  switch(action.type){
    case FOLLOW_TOGGLE:
      let stateCopy = {...state,
        friends: state.friends.map(friend => {
          if(friend.id === action.id){
            return {...friend, folowed:!friend.folowed}
          } return friend
        }),
        users: state.users.map(user => {
          if(user.id === action.id){
            return {...user, folowed:!user.folowed}
          } return user
        })
      }
    return stateCopy;
    default: return state;
  }
};

export const followToggleActionCreator = (id,list)=>({type:FOLLOW_TOGGLE,id:id});
export default friendsReducer;
