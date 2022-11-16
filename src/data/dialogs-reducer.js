const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

const initialState = {
  me: {
    avatar: "/static/media/avatar.38c7a0b0.jpg",
  },
  users: [
    {
      id: 0,
      name: "Andrei Bakinovskiy",
      photos:{
        small:"https://sun9-73.userapi.com/impg/NSpxZb1J_V-M_YJNBMaJhCVThrQniOiL73eGNQ/9cFQ4T1g3OA.jpg?size=810x1080&quality=95&sign=faeaf2da7a2da7c581b509f3b2eaacd2&type=album",
        large:"https://sun9-73.userapi.com/impg/NSpxZb1J_V-M_YJNBMaJhCVThrQniOiL73eGNQ/9cFQ4T1g3OA.jpg?size=810x1080&quality=95&sign=faeaf2da7a2da7c581b509f3b2eaacd2&type=album"
      },
      messages: [
          {
            isMe: false,
            message: "Bor!",
            date: new Date(2021, 8, 21, 15, 20, 13),
          },
          {
            isMe: true,
            message: "Back in of sky!",
            date: new Date(2021, 8, 21, 15, 40, 13),
          },
        ]
    },
    {
      id: 1,
      name: "Anthony Kiedis",
      photos:{
        small:"https://avatars.mds.yandex.net/i?id=dbe15ebdff2bdb03960c008e55c2b271-4034399-images-thumbs&n=13",
        large:"https://avatars.mds.yandex.net/i?id=dbe15ebdff2bdb03960c008e55c2b271-4034399-images-thumbs&n=13"
      },
      messages: [
        {
          isMe: false,
          message: "First born unicorn",
          date: new Date(2021, 9, 16, 13, 40, 13),
        },
         {
          isMe: true,
          message: "Hardcore soft porn",
          date: new Date(2021, 9, 17, 13, 40, 13),
        },
        {
          isMe: false,
          message: "Dream of Californication",
          date: new Date(2021, 9, 18, 13, 40, 13),
        },
        ]
    },
    {
      id: 2,
      name: "Chad Smith",
      photos:{
        small:"https://images.equipboard.com/uploads/user/image/4237/big_chad-smith.jpg?v=1667985656",
        large:"https://images.equipboard.com/uploads/user/image/4237/big_chad-smith.jpg?v=1667985656"
      },
      messages: []
    },
    {
      id: 3,
      name: "Flea",
      photos:{
        small:"https://mb.com.ph/wp-content/uploads/2020/10/flea.jpg",
        large:"https://mb.com.ph/wp-content/uploads/2020/10/flea.jpg"
      },
      messages: [
          {
            isMe: false,
            message: "California show your teeth",
            date: new Date(2021, 8, 21, 15, 40, 13),
          },
          {
            isMe: true,
            message: "She's my priestess, I'm your priest",
            date: new Date(2021, 8, 21, 16, 44, 13),
          },
          {
            isMe: false,
            message: "Yeah, yeah",
            date: new Date(2021, 8, 21, 17, 40, 13),
          }
        ]
    },
    {
      id: 4,
      name: "John Frusciante",
      photos:{
        small:"https://avatars.mds.yandex.net/i?id=02f58dbcd6821115f096fcc625d22156-4577390-images-thumbs&n=13",
        large:"https://avatars.mds.yandex.net/i?id=02f58dbcd6821115f096fcc625d22156-4577390-images-thumbs&n=13"
      },
        messages: []
    },
    {
      id: 5,
      name: "Neil Degrasse Tyson",
      photos: {
        small:null,
        large:null
      },
      messages: [
        {
          isMe: false,
          message: "The good thing about science is that it’s true whether or not you believe in it.",
          date: new Date(2021, 8, 21, 15, 40, 13),
        },
      ]
    },
  ]
}

const _newMessage = (state, messageText,id) => {
  
  let message = {}
  message.isMe = true;
  message.message = messageText;
  message.date = new Date();

  let stateCopy = {...state,
    users: [...state.users]
  }
  stateCopy.users[id].messages = [...state.users[id].messages, message]

  return stateCopy
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return _newMessage(state, action.messageText, action.userId);
    default: return state;
  }
}

export const sendMessage = (text,id) => ({type:SEND_MESSAGE, messageText:text, userId:id});

export default dialogsReducer