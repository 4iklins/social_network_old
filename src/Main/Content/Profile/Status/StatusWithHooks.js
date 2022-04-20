import './Status.scss';
import {React, useState, useEffect} from 'react';


const StatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(()=>{
    setStatus(props.status)
  },[props.status]);

  const enableEditMode = () => {
    setEditMode(true)
  }
  const disableEditMode = () => {
    setEditMode(false)
    if(status !== props.status){
      props.setUserStatus(status)
    }
  }
  const onStatusChange = (evt) => {
    setStatus(evt.currentTarget.value)
  }

    return(
      <div className="status">
        {editMode
        ? <input type="text" className="status__input" value={status} onBlur={disableEditMode} onChange={onStatusChange} autoFocus={true}/>
        : <div className="status__text" onClick={enableEditMode}><span>Status: </span>{props.status}</div>
        }
      </div>
      
    )
}

export default StatusWithHooks;