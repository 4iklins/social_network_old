import {useState, useEffect} from 'react';

function Toggle() {

  let[isToggleOn,setToggle] = useState(true);

  // useEffect(()=>{

  // },[isToggleOn])
  
  function handleClick() {
    setToggle(!isToggleOn)
  }
      return (
        <button onClick={handleClick}>
          {isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
}

  export default Toggle