function Creature(props) {

    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
        cursor: 'pointer' // cursor changes to pointer on hover
    };

    const handleClick = () => {
        // for Option 1 in creatureField
        //props.onWake(props.id); 
        // for Option 2 in creatureField
        props.isAwake
            ? props.onSleep(props.id) // if awake, put it to sleep
            : props.onWake(props.id); // if asleep, wake it up
    };

    return (
        <div style={style} onClick={handleClick}>
            <img 
                src={props.isAwake ? props.awakeImageUrl : props.sleepImageUrl} 
                alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
