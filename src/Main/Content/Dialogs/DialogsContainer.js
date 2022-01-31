import './Dialogs.scss';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { sendMessage, enteredTextChange} from '../../../data/dialogs-reducer';


const mapStateToProps = (state) => {
  return {
    dialogsPage:state.dialogsPage
  }
}
const mapDispatchToProps = {
    sendMessage:sendMessage,
    enteredTextChange:enteredTextChange
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;