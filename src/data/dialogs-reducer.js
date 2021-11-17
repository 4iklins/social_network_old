const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_ENTERED_MESSAGE_TEXT = 'UPDATE_ENTERED_MESSAGE_TEXT';

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

const dialogsReducer = (state, action) => {
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