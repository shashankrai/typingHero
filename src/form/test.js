import React, { useState, useEffect } from 'react';
import faker from 'faker/locale/en_US';
import '../../src/App.scss';
import Typed from './typed'
import Given from './given'
import Result from './result'



const TyptingUtil = ({ time }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [oneSpace, setoneSpace] = useState(false);
    const [lastTyped, setLasttyped] = useState('');
    const [typed, setTyped] = useState([]);
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState(time);
    const [isTimeOver, setisTimeOver] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isRetake, setIsRetake] = useState(false);
    const [counter, setCounter] = useState(60);
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        const data = faker.lorem.words(100);
        const changedText = data.split(" ");
        setOriginalData(changedText);
    }, [isRetake]);

    useEffect(() => {
        let intervalId = null;
        if (isActive) {

            intervalId = setInterval(() => {
                if (counter === 0) {
                    const setMinutes = minute - 1;
                    const setSeconds = 0;
                    if (setMinutes < 0) {
                        setIsActive(false);
                        setisTimeOver(true)
                    }
                    setMinute(setMinutes);
                    setSecond(setSeconds);
                    setCounter(60);
                }
                else {
                    const setSeconds = counter - 1;
                    const finalSeconds = String(setSeconds).length === 1
                        ? `0${setSeconds}`
                        : setSeconds;
                    setSecond(finalSeconds);
                }
                setCounter((counter) => counter - 1);
            }, 1000);
        }
        return () => {
            clearInterval(intervalId) 
        };
    }, [isActive, counter, isTimeOver, minute]);

    useEffect(
        () => {
            const isSupported = window && window.addEventListener;
            if (!isSupported) return;
            window.addEventListener('keydown', handleDown);
            return () => {
                window.removeEventListener('keydown', handleDown);
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [lastTyped, oneSpace]
    );

    const finalOutput2 = (data) => {
        const formattedText = [];
        for (let i = 0; i < data.length; i++) {
            let newNode = null;
            if (data[i] === originalData[i]) {
                newNode = { value: data[i], matching: true, id: i }
            } else {
                newNode = { value: data[i], matching: false, id: i }
            }
            formattedText.push(newNode);

        }

        return formattedText;
    };
    const data2 = finalOutput2(typed);

    const handleChange = (value) => {
        setIsActive(true);
        const updatedTyping = `${lastTyped}${value}`;
        setLasttyped(updatedTyping);
        setoneSpace(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleDown = (event) => {
        const value = event.key;
        const charCode = event.keyCode;
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
            handleChange(value);
            typed[selectedIndex] = lastTyped === '' ? value : `${lastTyped}${value}`;
            setTyped(typed);
        }
        else if (event.keyCode === 8 && typed.length) {
            const updatedTyped = lastTyped.substring(0, lastTyped.length - 1);
            if (lastTyped.length === 0 && selectedIndex > 0) {
                setSelectedIndex(selectedIndex - 1);
                const getPrivious = typed[selectedIndex - 1];
                setLasttyped(getPrivious);
            } else {
                setLasttyped(updatedTyped);
                if (updatedTyped) {
                    typed[selectedIndex] = updatedTyped;
                    setTyped(typed);
                } else {
                    typed.pop();
                    setTyped(typed);
                    const index = selectedIndex === 0 ? 0 : selectedIndex - 1;
                    const value = selectedIndex === 0 ? '' : typed[selectedIndex - 1];
                    setSelectedIndex(index);
                    setLasttyped(value);
                }
            }

        }
        else if (event.keyCode === 32) {
            if (oneSpace) {
                setLasttyped('');
                return;
            } else {
                setSelectedIndex(selectedIndex + 1);
                setLasttyped('');
                setoneSpace(true)
            }
        }
    };
    const retake = () =>{
        console.log("is time");
        setisTimeOver(false);
        setIsActive(false);
        setLasttyped('');
        setTyped([]);
        setSecond('00');
        setSelectedIndex(0);
        setoneSpace(false);
        setMinute(time);
        setCounter(60);
        setIsRetake(true);
      }
   

    return (
        isTimeOver ? <><Result retake ={retake}></Result></> :
            <div className="testContainer">
                <p className="logoheading">Let's take test</p>
                {!isActive ? <span>{`Duration ::${minute + 1}:00`}</span> : <span>{`${minute}:${second}`}</span>}
                <Given selectedIndex={selectedIndex} originalData={originalData}/>
                <div className="divCustom" onKeyDown={handleDown} >
                    <Typed typedData={data2} ></Typed>
                </div>
            </div>

    )
}
export default TyptingUtil;