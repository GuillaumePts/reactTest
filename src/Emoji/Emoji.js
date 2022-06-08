import './Emoji.css'
/*
const montrerEmoji = event => alert(event.target.id)

function Emoji(){
    return(
        <ul>
            
                <button onClick={event => alert(event.target.id)}>
                    <span id='fire'>🔥</span>
                    </button>
                    <button onClick={montrerEmoji}>
                    <span role='img' id='snake'>🐍</span>
                    </button>
                    <button>
                    <span id='water'>🌊</span>
                </button>
            
        </ul>
    )
}

export default Emoji; */

const emojie =[
    {
        emoji : '🌊',
        name : 'water'
    },
    {
        emoji : '🔥',
        name : 'fire'
    },
    {
        emoji : '🐍',
        name : 'snake'
    }
];

const planetes=[
    "terre", "saturne", "pluton"
];
/*
export default function Emoji(){
    return(
        <>
        {planetes.map(planete => <div key={planete}>{planete}</div>)}
        </>
    )
} */

export default function Emoji(){
    return(
        <>
        <ul>
            {
                emojie.map(emoji =>(
                   
                    <button key={emoji.emoji}>{emoji.emoji}</button>
                    
                ))
            }
        </ul>
        </>
    )
}