import React, {useState} from 'react';

function Creature(props) {
    const [isSleeping, setIsSleeping] = useState(false);

    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    return (
        <div style={style}>
            <img onClick={() => setIsSleeping(!isSleeping) } src={isSleeping? props.awakeImageUrl : props.sleepImageUrl} alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;

/*function Creature(props) {
    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    return (
        <div style={style}>
            <img src={props.sleepImageUrl} alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;*/