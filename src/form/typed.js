import React from 'react';
import '../../src/App.scss';


const  TypedComponenet =({typedData}) => {
    return (
            <div className ="typedData"> 
                <p className ="typedPara">
                        {typedData.map((data) => 
                            data.matching ===true ? <span className="matching">{data.value}</span>: <span className="nomatching">{data.value}</span>
                        )}
                        <span className="blink">|</span>
                </p>
           </div>
    
    ) 
} 

export default TypedComponenet;
