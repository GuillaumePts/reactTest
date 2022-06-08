import './Message.css';

export default function Message(props) {
    return (
        <div className='message'>
            <h2>Les props dans React</h2>
            <h3>salut à toi {props.nom}</h3>
            <p>{props.messagePasse}</p>
        </div>
    )

}