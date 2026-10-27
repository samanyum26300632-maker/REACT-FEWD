import { useState } from 'react';


function LearnEvent() {
  /*
   * Normal - js - click
   * React - js - onClick, onInput, onChange, onSubmit, onKeypress, onMouseover
   */


  const [text, setText] = useState("");


  function handleClick() {
    alert("Hello Everyone ");
  }


  function handleChange(e) {
    setText(e.target.value);
  }


  function handleClear() {
    setText("");
  }


  return (
    <div>
      {/* Click */}
      <button onClick={handleClick}>ShowAlert</button>


      {/* onChange */}
      <input type="text" value={text} onChange={handleChange} />
      <h1>{text}</h1>


      <button onClick={handleClear}>ClearAll</button>
    </div>
  );
}


export default LearnEvent;