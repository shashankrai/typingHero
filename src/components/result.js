import React from 'react';

const Result = (props) => {
    const { retake, time, wordsDetails } = props;
    const data = wordsDetails();
    const { correct, totalChar, totalWord, nonmatching } = data;
    const timer = time + 1;
    const wpm = Math.round(totalWord / timer);
    const cpm = Math.round(totalChar / timer);
    const score = correct * 10 - nonmatching * 5;
    const accuracy = ((correct / totalWord) * 100).toFixed(2);


    return (
        <div className="resultContainer">
            <h2>{'Typing Test result'}</h2>
            <div className="resultItem">
                <h3>{'Typing speed'}</h3>
                <p>
                    <span>{correct <= 0 ? `0 words in 1 min` : `${wpm} words in 1 min`} </span><br></br>
                    <span>{`${cpm} char in 1 min`}</span>
                </p>
            </div>
            <div className="resultItem">
                <h3>{'Accuracy'}</h3>
                <p><span>{correct > 0 ? `${accuracy}%` : '0%'}</span></p>

            </div>
            <div className="resultItem">
                <h3>{'Score'}</h3>
                <p>
                    <span>{`${score}`} </span>
                </p>

            </div>
            <button type="button" className="btn btn-primary startBtn" onClick={retake}> Retake Test</button>

        </div>
    )
}

export default Result;
