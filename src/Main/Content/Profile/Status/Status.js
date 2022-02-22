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
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  enableEditMode(){
    this.setState({editMode:true})
  }
  disableEditMode(){
    this.setState({editMode:false})
    if(this.state.statusText !== this.props.status){
      this.props.setUserStatus(this.state.statusText)
    }
  }
  onStatusChange(evt){
    this.setState({statusText:evt.currentTarget.value})
  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.status !== this.props.status){
      this.setState({statusText: this.props.status})
    }
  }

  render(){
    return(
      <div className="status">
        {this.state.editMode
        ? <input type="text" className="status_input" value={this.state.statusText} onBlur={this.disableEditMode} onChange={this.onStatusChange} autoFocus={true}/>
        : <div className="status_text" onClick={this.enableEditMode}><span>Status: </span>{this.props.status}</div>
        }
      </div>
    )
  }
}

export default Status;