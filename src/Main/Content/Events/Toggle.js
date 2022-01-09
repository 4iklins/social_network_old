

function Toggle() {
  let toggle = {isToggleOn: true};
  
  function handleClick() {
    console.log(toggle.isToggleOn)
      toggle.isToggleOn = !toggle.isToggleOn
  }
      return (
        <button onClick={handleClick}>
          {toggle.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
}

  export default Toggle