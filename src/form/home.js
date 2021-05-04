import React, { useState } from 'react';
import '../../src/App.scss';
import TyptingUtil from './test'

const TypingSettings = () => {
  const [selectVal, setSelectedVal] = useState(0);
  const [typingView, setTypingView] = useState(false);

  const onClick = (e) => {
    setSelectedVal(e.target.value);
  }
  const onStart = () => {
    setTypingView(true)
  }


  return (
    !typingView ?
      <div className="selectorContainer">
        <h5>Welcome to the #1 typing speed test with over 4 million tests completed every month!</h5>
        <div className="selectInnerContainer">
          <select className="form-select" aria-label="select" onChange={(e) => onClick(e)} value={selectVal}>
            <option value={0}>One Mintue test</option>
            <option value={1}>Two minute test</option>
            <option value={2}>Three mintue test</option>
          </select>
        </div>
        <div className="selectFooter">
          <button type="button" className="btn btn-primary" onClick={(e) => onStart(e)}>Start typing test</button>
          <p>New! Benchmark Your Typing Speed!</p></div>
      </div> : <TyptingUtil time={selectVal}></TyptingUtil>
  )

}

export default TypingSettings;
