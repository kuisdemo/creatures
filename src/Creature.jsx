import React , {useState} from 'react';

function Creature() {
    const [creature,setAwake] =useState()({
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
        creature: False

    })
    /*const awakeClick =()=>{
        setAwake(isAwake=>!isAwake)
    };*/

    return (
        <div onClick={()=>setAwake({...creature,isAwake: !creature.isAwake})}>
            <img src={props.sleepImageUrl} alt={props.name} width="120" onClick />

            <p>{props.name}, age {props.age}</p>
        </div>
        
    );
}

export default Creature;
