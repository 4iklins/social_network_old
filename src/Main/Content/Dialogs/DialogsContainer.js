import './Dialogs.scss';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { sendMessage} from '../../../data/dialogs-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getProfile } from '../../../data/auth_selectors';

const DialogsContainer = (props) => {
  return(
    <Dialogs {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    dialogsPage:state.dialogsPage,
    myProfile: getProfile(state)
  }
}
const mapDispatchToProps = {
    sendMessage:sendMessage
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DialogsContainer)