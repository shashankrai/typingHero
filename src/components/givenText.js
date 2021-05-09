import React from 'react';

const GivenText = ({ originalData, selectedIndex }) => {

    return (
        <div className="givenData">
            <p>
                {
                    originalData.map((value, i) =>
                        selectedIndex === i ?
                            <span className='selected'>{value}</span> : <span className="normal">{value}</span>
                    )}
            </p>
        </div>

    )
}

export default GivenText;
