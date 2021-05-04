import React from 'react';
import '../../src/App.scss';


const Result = () => {

    return (
        <div className="resultContainer">
            <h2>{'Typing Test result'}</h2>
            <div className="resultItem">
                <h3>{'Typing speed'}</h3>
                <p>
                    <span>{'0 chars in 0 min'}</span>
                </p>
            </div>
            <div className="resultItem">
                <h3>{'Accuracy'}</h3>
                <p> <span>{'0 chars in 0 min'} </span></p>

            </div>
            <div className="resultItem">
                <h3>{'Score'}</h3>
                <p>
                    <span>{'0 errors Deducted'} </span>
                </p>

            </div>
            <button type="button" className="btn btn-primary">Retake Test</button>

        </div>

    )
}

export default Result;
