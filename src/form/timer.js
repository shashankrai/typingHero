import React from 'react';
import '../../src/App.scss';

const Timer = ({active, minute,second}) => {

    return (
        active ? <span>{`Duration ::${minute + 1}:00`}</span> : <span>{`${minute}:${second}`}</span>
    )
}

export default Timer;
