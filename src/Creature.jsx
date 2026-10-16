import { useState } from 'react';

function Creature(props) {
    const [isAwake, setIsAwake] = useState(false);
    const [x, setX] = useState(props.x);
    const [y, setY] = useState(props.y);

    const style = {
        position: 'absolute',
        left: x + 'px',
        top: y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
        cursor: 'pointer' // cursor changes to pointer on hover
    };

    const handleClick = () => {
        if (!isAwake) {
            // Waking up - toggle and move to new random position
            setIsAwake(true);
            setX(Math.floor(Math.random() * 700));
            setY(Math.floor(Math.random() * 700));
        } else {
            // Going back to sleep - toggle only, stay in position
            setIsAwake(false);
        }
    };

    return (
        <div style={style} onClick={handleClick}>
            <img 
                src={isAwake ? props.awakeImageUrl : props.sleepImageUrl} 
                alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
