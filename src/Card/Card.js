import '../Card/Card.css'




export default function Card(props){
    return(
        <div className='Card'>
           
            <p>Origin des produits: {props.cardInfo}</p>
        </div>
    )
}