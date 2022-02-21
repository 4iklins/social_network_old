import './Status.scss';
import React from 'react';

class Status extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editMode: false,
      statusText: this.props.status
    }
    this.enableEditMode = this.enableEditMode.bind(this);
    this.disableEditMode = this.disableEditMode.bind(this);
  }

  enableEditMode(){
    this.setState({editMode:true})
  }
  disableEditMode(e){
    debugger
    console.log(e.target.value);
    this.setState({editMode:false})
    this.props.setUserStatus(e.target.value)
  }

  render(){
    return(
      <div className="status">
        {this.state.editMode
        ? <input type="text" className="status_input" value={this.props.status} onBlur={this.disableEditMode} autoFocus={true}/>
        : <div className="status_text" onClick={this.enableEditMode}>{this.state.statusText}</div>
        }
      </div>
    )
  }
}

export default Status;