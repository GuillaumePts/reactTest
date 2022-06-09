import '../Card/Card.css'




export default function CardProduit(props) {
    return (
 
        <div className='produit'>
        <h1>Card Produit</h1>
          <figure>
    <img src={props.image} ></img>
    <figcaption>
        <ul>
       <h3>titre : {props.titre}</h3>
       <p>description : {props.description}</p>
       <h4>prix : {props.prix}</h4>
       <h5>avis : {props.avis}</h5>
       </ul>
    </figcaption>
  </figure>
  </div>
  
    )
}