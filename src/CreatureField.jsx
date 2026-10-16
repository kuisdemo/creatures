import { useState } from 'react';
import Creature from './Creature.jsx';

    const creatureData =[
        {
            id: 1, name: "Mr. Fresh", age: 3,
            sleepImageUrl: "/images/first_sleep.png",
            awakeImageUrl: "/images/first_awake.png",
            x: 120, y: 140, isAwake: false
        },
        {
            id: 2, name: "Meimei", age: 5,
            sleepImageUrl: "/images/second_sleep.png",
            awakeImageUrl: "/images/second_awake.png",
            x: 300, y: 260, isAwake: false
        },
        {
            id: 3, name: "Bingus", age: 2,
            sleepImageUrl: "/images/third_sleep.png",
            awakeImageUrl: "/images/third_awake.png",
            x: 550, y: 40, isAwake: false
        },
        {
            id: 4, name: "Leipä", age: 4,
            sleepImageUrl: "/images/fourth_sleep.png",
            awakeImageUrl: "/images/fourth_awake.png",
            x: 150, y: 420, isAwake: false
        },
        {
            id: 5, name: "Mista", age: 4,
            sleepImageUrl: "/images/fifth_sleep.png",
            awakeImageUrl: "/images/fifth_awake.png",
            x: 550, y: 590, isAwake: false
        }
    ]

function CreatureField() {

    // state lifted up to CreatureField as an array of creatures
    const [creatures, setCreatures] = useState(creatureData);

    // Handle individual creature wake/sleep
    // Option 1: One function to handle both waking and sleeping
    const handleWake = (id) => {
        setCreatures(creatures.map(c => {
            if (c.id !== id) return c; // If not the clicked creature, return it unchanged
            if (c.isAwake) return { ...c, isAwake: false }; // if awake, put it to sleep
            // if asleep, wake it up and move to a new random position
            return { ...c, 
                isAwake: true, 
                x: Math.floor(Math.random() * 700), 
                y: Math.floor(Math.random() * 700) };
        }));
    };

    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: '#6b8c66'
    };

    return (
        <div style={fieldStyle}>
            {creatures.map(creature => (
                <Creature
                    key={creature.id}
                    id={creature.id}
                    name={creature.name}
                    age={creature.age}
                    sleepImageUrl={creature.sleepImageUrl}
                    awakeImageUrl={creature.awakeImageUrl}
                    x={creature.x} y={creature.y}
                    isAwake={creature.isAwake}
                    onWake={handleWake}
                />
            ))} 
        </div>
    );
}

export default CreatureField;
