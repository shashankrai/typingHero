import React, { useState, useRef ,useEffect } from 'react';
import '../../src/App.css';
const  TyptingUtil  = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [oneSpace, setoneSpace] = useState(false);
    const [lastTyped, setLasttyped] = useState('');
    const [typed, setTyped] = useState([]);
    const [typing, setTypeing] = useState('');
    const inputRef = useRef(null);
    const givenText ="Bamboo is a very sustatinable material and it grows very fast and it is present in every part of india" 
    const changedText =givenText.split(" ");
    const getSeleted = (index,current) => {
        const isSelected =  selectedIndex ===index+current;
        return isSelected ? 'Selected' : 'normal';
    }
    const [textTypedext, settextTyped] = useState('');
    const inputRefs = [];
    const focusInput = (id) => inputRefs[id].focus();
    const setRef = (ref) => {
        inputRefs.push(ref);
      };
    useEffect(() => {
        console.log("came here");
        // inputRefs[selectedIndex].focus();
      }, [selectedIndex]); 
   
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

 
    const handleSpace= (event) => {
        inputRefs[0].focus();
        console.log("aaa" ,event.target.value);
        setTypeing(event.target.value)
        const {value } =event.target;
        console.log("typing",typing);
        const newArray = value.split(" ");
        console.log("valueArr",newArray);
        setTyped(newArray);
        if(event.keyCode === 32 ) {
            if(value.trimEnd() !== lastTyped){
                setSelectedIndex(selectedIndex+1);
                setLasttyped(event.target.value);
            }
        }
        if(event.keyCode === 8 ) {
            if(event.keyCode === 8 || event.keyCode === 46) {
                event.preventDefault();
            }
        }
     };

    const  handleChange  =(e) => {
        const updatedTyping =lastTyped+e.target.value;
        setLasttyped(updatedTyping);
        setTypeing(''); 
     }
  
     const handleDown= (event) => {
        console.log("if",event.keyCode,event.target.value,event.key);
        if(event.keyCode === 8 ) {
            if(event.keyCode === 8 || event.keyCode === 46) {
                event.preventDefault();
            }
        }
        else  if(event.keyCode === 32 ) {
            console.log("if",event.key);
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
        {data.map((text) =>
        <>
        <div dangerouslySetInnerHTML={{ __html: text }} />
        {/* <div dangerouslySetInnerHTML={{ __html: text }} /> <input type="text" onKeyDown ={handleSpace} ref={setRef}></input> */}
        </>
        )} 
        {data1.map((text) =>
        <>
            <div dangerouslySetInnerHTML={{ __html: text }} />
            </>
        )} 

        <input type="text"  ref={setRef} value  ={typing} onKeyDown ={handleDown} onChange ={handleChange}></input>
    </div>



   
    
    )
}
export default TyptingUtil;