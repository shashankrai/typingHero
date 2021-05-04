import React from 'react';
import '../../src/App.scss';

const GivenComponenet = ({ originalData, selectedIndex }) => {

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

export default GivenComponenet;
