import React from 'react';
import '../../src/App.scss';


const Result = ({retake}) => {

// const totalchartyped =  typedData.word.toString().length;
//time = x min ;
//const WPM = TYPEDWORD/X;
//Const char in min  = totoaltyped/min;
//score = matching *10 - nomatching* 5; 
//const mistypeWord = mistyped;
// const percntage = misstyped/totalTyped *100;
//retake  

//    const retake = ({re}) =>{
//      history.push('/home');
//    }


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
            <button type="button" className="btn btn-primary" onClick={retake}> Retake Test</button>

        </div>

    )
}

export default Result;
