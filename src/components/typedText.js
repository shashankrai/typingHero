import React from 'react';


const TypedText = ({ typedData, onSpace }) => {
    return (
        <p className="typedPara">
            {typedData.map((data) =>
                data.matching === true ? <span className="matching">{data.value}</span> : <span className="nomatching">{data.value}</span>
            )}
            <span className={"blink " + (onSpace ? 'space' : 'noSpace')}>|</span>
        </p>

    )
}

export default TypedText;
