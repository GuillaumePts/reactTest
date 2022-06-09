import '../Titre/Titre.css'






export default function Titre(props){
    return(
        <div className='tittle'>
            <h4>Produit Made in {props.tittle}</h4>
        </div>
    )
}



