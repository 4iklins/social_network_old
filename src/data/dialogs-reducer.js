const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_ENTERED_MESSAGE_TEXT = 'UPDATE_ENTERED_MESSAGE_TEXT';

let initialState = {
  me: {
    avatar: "/static/media/avatar.38c7a0b0.jpg",
  },
  users: [
    {
      id: 0,
      name: "Andrei Bakinovskiy",
      avatar:
        "https://sun9-73.userapi.com/impg/NSpxZb1J_V-M_YJNBMaJhCVThrQniOiL73eGNQ/9cFQ4T1g3OA.jpg?size=810x1080&quality=95&sign=faeaf2da7a2da7c581b509f3b2eaacd2&type=album",
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
      avatar:
        "https://avatars.mds.yandex.net/i?id=dbe15ebdff2bdb03960c008e55c2b271-4034399-images-thumbs&n=13",
      messages: [
        {
          isMe: false,
          message: "Yo man!",
          date: new Date(2021, 9, 16, 13, 40, 13),
        },
          {
            isMe: true,
            message: "Otherside ",
            date: new Date(2021, 9, 17, 13, 40, 13),
          },
        ]
    },
    {
      id: 2,
      name: "Chad Smith",
      avatar:
        "https://kennyaronoff.com/wp-content/uploads/2016/08/Chad-Smith.jpg",
      messages: []
    },
    {
      id: 3,
      name: "Flea",
      avatar:
        "https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/8/f/9/e/fd7c-7e05-4d36-b23f-025885fd60e1.jpg",
      messages: [
          {
            isMe: false,
            message: "Yo man!",
            date: new Date(2021, 8, 21, 15, 40, 13),
          },
          {
            isMe: true,
            message: "Yo Flea!",
            date: new Date(2021, 8, 21, 16, 44, 13),
          },
        ]
    },
    {
      id: 4,
      name: "John Frusciante",
      avatar:
        "https://avatars.mds.yandex.net/i?id=02f58dbcd6821115f096fcc625d22156-4577390-images-thumbs&n=13",
        messages: []
    },
    {
      id: 5,
      name: "Neil Degrasse Tyson",
      avatar: "",
      messages: []
    },
  ],
  newMessageText:""
}

const newMessage = (state) => {
  let message = {}
  message.isMe = true;
  message.message = state.newMessageText;
  message.date = new Date();
  state.users[0].messages.push(message);
  state.newMessageText = '';
};

const updateEnteredMessageText = (state, text) => {
  state.newMessageText = text;
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      newMessage(state);
      return state;
    case UPDATE_ENTERED_MESSAGE_TEXT:
      updateEnteredMessageText(state, action.text);
      return state;
    default: return state;
  }
}

export const sendMessageActionCreator = () => ({type:SEND_MESSAGE});
export const updateEnteredMessageTextActionCreator = (text) => ({type:UPDATE_ENTERED_MESSAGE_TEXT, text: text});

export default dialogsReducer