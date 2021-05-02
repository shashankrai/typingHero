import React, { useState ,useEffect } from 'react';
import faker  from 'faker';
import '../../src/App.css';
const  TyptingUtil  = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [oneSpace, setoneSpace] = useState(false);
    const [lastTyped, setLasttyped] = useState('');
    const [typed, setTyped] = useState([]);
    const [typing, setTypeing] = useState('');
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(4);
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(60);
    const givenText ="Bamboo is a very sustatinable material and it grows very fast and it is present in every part of india" 
    const changedText =givenText.split(" ");
    const getSeleted = (index,current) => {
        const isSelected =  selectedIndex ===index+current;
        return isSelected ? 'Selected' : 'normal';
    }
    const [textTypedext, settextTyped] = useState('');

    useEffect(() => {
        console.log("came here");
        const data =faker.lorem.words(20);
         console.log("came here" ,data);
    }, []); 



    const compute = (counter) =>{
        if(counter === 0) {
             const setMinutes  = minute - 1;
             const setSeconds  = 0;
             setMinute(setMinutes);
             setSecond(setSeconds);
             setCounter(60);
        }
        else {
            const setSeconds  = counter - 1;
            const finalSeconds  = String(setSeconds).length === 1
            ? `0${setSeconds}`
            : setSeconds;
            setSecond(finalSeconds);
        }
      
    }
    useEffect(() => {
        let intervalId;
    
        if (isActive) {
          intervalId = setInterval(() => {
            compute(counter)
            setCounter((counter) => counter - 1);
          }, 1000);
        }
    
        return () => clearInterval(intervalId);
      }, [isActive, counter]);

    const finalOutput = () => {
        const formattedText =[];
        let finalIndex =0;
        for(let i = 0; i <changedText.length;) {
            let text = '';
            const index = i;
            finalIndex  =  finalIndex + 10 <  changedText.length ? finalIndex + 10  :changedText.length;
            const newVal = changedText.slice(i, finalIndex);
            for(let i = 0; i <newVal.length; i++) {
              text += `<span index=${i} class =${getSeleted(index,i)}> ${newVal[i]} </span>`;
            }
           formattedText.push(`<p index =${i} >${text}</p>`);
           text ='';
           i+=10;
        }
        return formattedText;
    };
    const data = finalOutput();

    const finalOutput1 = (data) => {
        const formattedText =[];
        let text = '';
        for(let i = 0; i <data.length;i++) {
            if(data[i]===changedText[i]){
                text += `<span index=${i} class ="matching"> ${data[i]} </span>`;
            }else {
                text += `<span index=${i} class ="nomatching"> ${data[i]} </span>`; 
            }
        }
        formattedText.push(`<p>${text}</p>`);
        return formattedText;
    };
    const data1 = finalOutput1(typed);

 
   

    const  handleChange  =(e) => {
        console.log("handle change",e.target.value);
        setIsActive(true);
        const updatedTyping =lastTyped+e.target.value;
        if(updatedTyping.trimEnd() !== lastTyped){
            console.log("spance",e.target.value);
            setLasttyped(updatedTyping);
            setoneSpace(false)
        } else {
            setoneSpace(true)
        }
         setTypeing(''); 
     }
  
     const handleDown= (event) => {
        console.log("if",event.keyCode,event.target.value,event.key);
        if(event.keyCode === 8 ) {
            if(event.keyCode === 8 || event.keyCode === 46) {
                event.preventDefault();
            }
        }
        else  if(event.keyCode === 32 && !oneSpace ) {
            setSelectedIndex(selectedIndex+1);
            setLasttyped('');
        }else{ 
            typed[selectedIndex] = lastTyped;
            setTyped(typed);
        }
        setTypeing(''); 
     };


    return (
    <div  tabindex="-1">
        <p>Let's take test</p>
        <span>{`${minute}:${second}`}</span>
        {data.map((text) =>
        <>
        <div dangerouslySetInnerHTML={{ __html: text }} />
        </>
        )} 
        {data1.map((text) =>
        <>
            <div dangerouslySetInnerHTML={{ __html: text }} />
            </>
        )}
        <div>
          <input type="text"  value={typing} onKeyDown ={handleDown} onChange ={handleChange}></input>
        </div> 
    </div> 
    
    )
}
export default TyptingUtil;