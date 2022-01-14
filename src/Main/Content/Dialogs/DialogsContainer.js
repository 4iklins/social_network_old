import './Dialogs.scss';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateEnteredMessageTextActionCreator } from '../../../data/dialogs-reducer';


const mapStateToProps = (state) => {
  return {
    dialogsPage:state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {dispatch(sendMessageActionCreator())},
    enteredTextChange: (text)=> {dispatch(updateEnteredMessageTextActionCreator(text))}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;