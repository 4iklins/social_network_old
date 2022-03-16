import './Dialogs.scss';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { sendMessage} from '../../../data/dialogs-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


const mapStateToProps = (state) => {
  return {
    dialogsPage:state.dialogsPage
  }
}
const mapDispatchToProps = {
    sendMessage:sendMessage
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Dialogs)