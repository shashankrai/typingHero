import React, { useState } from 'react';
import '../../src/App.scss';
import TyptingUtil from './test'

const TypingSettings = () => {
  const [selectVal, setSelectedVal] = useState(0);
  const [typingView, setTypingView] = useState(false);

  const onClick = (e) => {
    setSelectedVal(e.target.value)
  }
  const onStart = () => {
    setTypingView(true)
  }


  return (
    !typingView ? <div>
      <p>Welcome to the #1 typing speed test with over 4 million tests completed every month!</p>
      <select className="form-select" aria-label="select" onChange={(e) => onClick(e)} value={selectVal}>
        <option value="0">One Mintue</option>
        <option value="1">Two minute</option>
        <option value="2">Three mintue</option>
      </select>
      <button type="button" className="btn btn-primary" onClick={(e) => onStart(e)}>Start</button>
    </div> : <TyptingUtil></TyptingUtil>
  )

}

export default TypingSettings;