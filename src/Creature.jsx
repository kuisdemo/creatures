//import React , {useState} from 'react';
import { useState } from "react";

function Creature(props) {
    const [leftPos, setLeftPos] = useState(props.x);
    const [topPos, setTopPos] = useState(props.y);
    const [awake,setAwake] = useState({
    isAwake: false
    })
    const style = {
        position: 'absolute',
        left: leftPos + 'px',
        top: topPos + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
    } 

    

    return (
        <div style = {style} onClick={() => {setAwake({...awake, isAwake: !awake.isAwake})
        setLeftPos(Math.random() * 700)
        setTopPos(Math.random()* 700)}}>
            {awake.isAwake ?
            <img src={props.sleepImageUrl} alt={props.name} width="120" /> 
            :
            <img  src={props.awakeImageUrl} alt={props.name} width="120" />
            }
            <p>{props.name}, age {props.age}</p>
        </div>
        
    );
}

export default Creature;
